import { GoogleGenAI, FunctionDeclaration, Type } from "@google/genai";
import { Review } from '../types';

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY || '' });

const SYSTEM_INSTRUCTION_CHAT = `
You are 'Kai', the booking assistant for Kilo, the owner and therapist at "Aloha Healing & Wellness".
Setting: Private backyard gazebo, open-air, local/sanctuary feel with twinkle lights and candles at night.
Audience: Locals & Hospitality workers.
Integrations: You are connected to the business's GoHighLevel calendar.

Your Goals:
1. Answer questions about Kilo's services (Lomi Lomi, Deep Tissue/Industry Reset).
2. CHECK AVAILABILITY: If a user asks for a time, use the 'checkAvailability' tool.
3. BOOK APPOINTMENTS: If a user wants to book, ask for their NAME and PHONE NUMBER, then use the 'bookAppointment' tool.
4. Be concise, warm, and authentic ("local style").

Do not make up availability. Always check the tool.
`;

// Tool Definitions
const checkAvailabilityTool: FunctionDeclaration = {
  name: 'checkAvailability',
  description: 'Check available appointment slots for a specific date.',
  parameters: {
    type: Type.OBJECT,
    properties: {
      date: {
        type: Type.STRING,
        description: 'The date to check in YYYY-MM-DD format.',
      },
    },
    required: ['date'],
  },
};

const bookAppointmentTool: FunctionDeclaration = {
  name: 'bookAppointment',
  description: 'Book a new appointment for a client.',
  parameters: {
    type: Type.OBJECT,
    properties: {
      name: { type: Type.STRING, description: 'Client full name' },
      phone: { type: Type.STRING, description: 'Client phone number' },
      time: { type: Type.STRING, description: 'The requested time for the appointment (ISO string or clear time description)' },
    },
    required: ['name', 'phone', 'time'],
  },
};

export const chatSession = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
        systemInstruction: SYSTEM_INSTRUCTION_CHAT,
        tools: [{ functionDeclarations: [checkAvailabilityTool, bookAppointmentTool] }],
    },
});

export const analyzeReviews = async (reviews: Review[]): Promise<string> => {
  try {
    const reviewsText = reviews.map(r => `"${r.text}" - ${r.rating} stars`).join('\n');
    
    const prompt = `
      Here are the recent Google Reviews for Kilo's massage business (Clientele is mostly locals/industry workers):
      ${reviewsText}

      Please provide a brief business analysis:
      1. What do the locals appreciate most about Kilo's backyard/gazebo setting?
      2. Are there recurring physical issues mentioned?
      3. Draft a short, grateful response from Kilo emphasizing community and wellness.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "Unable to analyze reviews at this time.";
  } catch (error) {
    console.error("Analysis Error:", error);
    return "Unable to perform analysis due to connection issues.";
  }
};