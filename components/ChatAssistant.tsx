import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import { chatSession } from '../services/geminiService';
import { checkAvailabilityTool, bookAppointmentTool } from '../services/ghlService';

const ChatAssistant: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<ChatMessage[]>([
        { id: '1', role: 'model', text: 'Aloha! 🌺 I can help you check the schedule or book a session with Kilo right here. What works for you?', timestamp: new Date() }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(scrollToBottom, [messages, isOpen]);

    const handleSend = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMsg: ChatMessage = {
            id: Date.now().toString(),
            role: 'user',
            text: input,
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setIsTyping(true);

        try {
            // 1. Send user message to Gemini
            let result = await chatSession.sendMessage({ message: userMsg.text });
            
            // 2. Check for Function Calls (Tools)
            // The model might want to call a function before giving a final text response.
            // We need to loop because it might call multiple tools in sequence (though usually just one turn).
            while (result.functionCalls && result.functionCalls.length > 0) {
                 const call = result.functionCalls[0]; // Handle first function call
                 let functionResult = "";
                 
                 // Execute the requested tool
                 if (call.name === 'checkAvailability') {
                    const args = call.args as any;
                    functionResult = await checkAvailabilityTool(args.date);
                 } else if (call.name === 'bookAppointment') {
                    const args = call.args as any;
                    functionResult = await bookAppointmentTool(args.name, args.phone, args.time);
                 }

                 // Send the tool execution result back to Gemini
                 result = await chatSession.sendToolResponse({
                    functionResponses: [
                        {
                            id: call.id,
                            name: call.name,
                            response: { result: functionResult }
                        }
                    ]
                 });
            }

            // 3. Final Text Response
            const botMsg: ChatMessage = {
                id: (Date.now() + 1).toString(),
                role: 'model',
                text: result.text || "I'm sorry, I got a bit confused. Could you try asking that again?",
                timestamp: new Date()
            };
            setMessages(prev => [...prev, botMsg]);

        } catch (error) {
            console.error("Chat Error:", error);
            const errorMsg: ChatMessage = {
                id: Date.now().toString(),
                role: 'model',
                text: "I'm having trouble connecting to the booking system right now. Please try again later.",
                timestamp: new Date()
            };
            setMessages(prev => [...prev, errorMsg]);
        } finally {
            setIsTyping(false);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            {/* Chat Window */}
            {isOpen && (
                <div className="bg-white w-[350px] h-[550px] rounded-2xl shadow-2xl flex flex-col overflow-hidden mb-4 border border-sand-200 animate-fade-in-up">
                    {/* Header */}
                    <div className="bg-ocean-900 p-4 flex justify-between items-center text-white">
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <div className="w-10 h-10 bg-palm-600 rounded-full flex items-center justify-center">
                                    <i className="fa-solid fa-leaf"></i>
                                </div>
                                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-ocean-900"></div>
                            </div>
                            <div>
                                <h3 className="font-bold text-sm">Aloha Assistant</h3>
                                <p className="text-xs text-ocean-200">Bookings for Kilo</p>
                            </div>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="text-ocean-300 hover:text-white">
                            <i className="fa-solid fa-times"></i>
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 bg-sand-50 space-y-4">
                        {messages.map((msg) => (
                            <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                                    msg.role === 'user' 
                                    ? 'bg-ocean-600 text-white rounded-tr-none' 
                                    : 'bg-white border border-sand-200 text-gray-800 rounded-tl-none shadow-sm'
                                }`}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        {isTyping && (
                             <div className="flex justify-start">
                                <div className="bg-white border border-sand-200 rounded-2xl rounded-tl-none px-4 py-3 shadow-sm">
                                    <div className="flex space-x-1">
                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input */}
                    <form onSubmit={handleSend} className="p-4 bg-white border-t border-sand-200">
                        <div className="flex items-center gap-2">
                            <input 
                                type="text" 
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Type a message..."
                                className="flex-1 bg-sand-50 border border-sand-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-ocean-500 focus:ring-1 focus:ring-ocean-500 text-gray-800"
                            />
                            <button 
                                type="submit" 
                                disabled={!input.trim() || isTyping}
                                className="w-10 h-10 bg-ocean-800 text-white rounded-full flex items-center justify-center hover:bg-ocean-900 transition disabled:opacity-50"
                            >
                                <i className="fa-solid fa-paper-plane text-sm"></i>
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {/* Toggle Button */}
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="bg-ocean-800 hover:bg-ocean-900 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition transform hover:scale-110 z-50 relative"
            >
                {isOpen ? (
                    <i className="fa-solid fa-chevron-down text-xl"></i>
                ) : (
                    <i className="fa-solid fa-calendar-check text-xl"></i>
                )}
                 {!isOpen && (
                    <span className="absolute -top-1 -right-1 flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-palm-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-palm-500"></span>
                    </span>
                )}
            </button>
        </div>
    );
};

export default ChatAssistant;