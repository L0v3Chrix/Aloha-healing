export interface Review {
  id: number;
  author: string;
  rating: number;
  text: string;
  date: string;
  platform: 'Google' | 'Yelp';
}

export interface Service {
  id: string;
  title: string;
  duration: string;
  price: number;
  description: string;
  image: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text?: string;
  timestamp: Date;
  isToolCall?: boolean;
}

export interface TimeSlot {
  id: string;
  time: string; // ISO String
  available: boolean;
}

export interface BookingRequest {
  name: string;
  email: string;
  phone: string;
  serviceId: string;
  slotId: string;
  date: string;
}