import { TimeSlot, BookingRequest } from '../types';

// This service mimics the GoHighLevel API endpoints.
// In a production environment, you would use fetch() to hit:
// https://services.leadconnectorhq.com/....

const MOCK_DELAY = 800;

export const fetchAvailableSlots = async (date: Date): Promise<TimeSlot[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, MOCK_DELAY));

  // Mocking logic: Generate slots for the given date
  // In real GHL: GET /v1/appointments/slots?date=...
  const slots: TimeSlot[] = [];
  const startHour = 9;
  const endHour = 17;

  for (let i = startHour; i < endHour; i++) {
    // Randomly decide if slot is taken for demo purposes
    if (Math.random() > 0.3) { 
        const slotDate = new Date(date);
        slotDate.setHours(i, 0, 0, 0);
        slots.push({
            id: `slot-${i}`,
            time: slotDate.toISOString(),
            available: true
        });
    }
  }
  return slots;
};

export const createBooking = async (booking: BookingRequest): Promise<{ success: boolean; confirmationCode: string }> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, MOCK_DELAY + 500));

    console.log("Submitting to GoHighLevel:", booking);
    
    // In real GHL, this would likely be a two-step process:
    // 1. Create/Update Contact (POST /v1/contacts)
    // 2. Create Appointment (POST /v1/appointments)
    
    return {
        success: true,
        confirmationCode: "GHL-" + Math.random().toString(36).substr(2, 9).toUpperCase()
    };
};

// Helper for the Chatbot to parse natural language dates roughly
export const checkAvailabilityTool = async (dateStr: string) => {
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return "Invalid date provided.";
    const slots = await fetchAvailableSlots(date);
    if (slots.length === 0) return "No slots available for that date.";
    return slots.map(s => {
        const d = new Date(s.time);
        return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }).join(", ");
};

export const bookAppointmentTool = async (name: string, phone: string, time: string) => {
    // Simplified booking for the chatbot
    const result = await createBooking({
        name,
        phone,
        email: "collected-via-chat@example.com",
        serviceId: "chat-booking",
        slotId: "chat-slot",
        date: time
    });
    return `Appointment confirmed! Confirmation code: ${result.confirmationCode}. You will receive a text message shortly.`;
};