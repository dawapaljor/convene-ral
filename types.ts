import React from 'react';

export enum MessageType {
  TEXT = 'text',
  IMAGE = 'image',
  SYSTEM = 'system'
}

export interface Message {
  id: string;
  sender: 'user' | 'agent' | 'system';
  content: string;
  timestamp: Date;
  type: MessageType;
  avatar?: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface Testimonial {
  quote: string;
  author: string;
  role?: string;
}