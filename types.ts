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

export type Page = 'home' | 'about' | 'pricing' | 'faq' | 'features' | 'how-it-works' | 'privacy' | 'terms' | 'security' | 'signup' | 'not-found';

export interface NavLink {
  label: string;
  page?: Page;
  targetId?: string; // Optional element ID to scroll to on the target page
  href: string; // The URL to show when hovered or copied
  external?: boolean; // If true, opens in a new tab
  isAction?: boolean; // If true, acts as a button (e.g. opens a modal)
}