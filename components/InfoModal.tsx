import React, { useState } from 'react';

const InfoModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-8 relative">
        <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 transition"
        >
            <i className="fa-solid fa-times text-2xl"></i>
        </button>

        <h2 className="text-2xl font-bold text-ocean-900 mb-4 flex items-center gap-2">
            <i className="fa-solid fa-code text-palm-600"></i>
            Developer Update: GHL Integration
        </h2>
        
        <div className="space-y-4 text-gray-700 leading-relaxed">
            <p className="font-semibold text-lg text-ocean-900">GoHighLevel (GHL) Architecture Implemented</p>
            <p className="text-sm">
                I have updated the system to mock a full integration with the GoHighLevel API. This allows for automated SMS/Email marketing and centralized booking.
            </p>

            <div className="bg-sand-50 p-4 rounded-lg border border-sand-200 space-y-3">
                <div className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-ocean-100 rounded-full flex items-center justify-center text-ocean-700 font-bold">1</div>
                    <div>
                        <h4 className="font-bold text-ocean-900 text-sm">Custom React Calendar</h4>
                        <p className="text-xs text-gray-600">Replaced static link with a dynamic calendar component. It mocks fetching slots from `GET /v1/appointments/slots`.</p>
                    </div>
                </div>
                 <div className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-ocean-100 rounded-full flex items-center justify-center text-ocean-700 font-bold">2</div>
                    <div>
                        <h4 className="font-bold text-ocean-900 text-sm">AI Chat Booking (Function Calling)</h4>
                        <p className="text-xs text-gray-600">
                            The chatbot is now "smart". Try asking: <br/>
                            <span className="italic text-palm-700">"Can I book a massage for tomorrow at 10am?"</span><br/>
                            Gemini will detect the intent, check the GHL API for slots, and execute the booking function directly.
                        </p>
                    </div>
                </div>
            </div>

            <p className="text-xs text-gray-500 mt-4">
                * To go live, replace the mock functions in <code>services/ghlService.ts</code> with real <code>fetch()</code> calls to your GoHighLevel Location API using your API Key.
            </p>

            <button 
                onClick={() => setIsOpen(false)}
                className="w-full mt-6 bg-ocean-800 text-white py-3 rounded-xl font-bold hover:bg-ocean-900 transition"
            >
                Test the Booking System
            </button>
        </div>
      </div>
    </div>
  );
};

export default InfoModal;