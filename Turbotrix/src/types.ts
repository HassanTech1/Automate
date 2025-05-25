export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
  images?: string[];
}

export interface Conversation {
  id: string;
  title: string;
  messages: Message[];
  timestamp: number;
}

export interface ImageGenRequest {
  prompt: string;
  width?: number;
  height?: number;
}

export interface ImageGenResponse {
  url: string;
}