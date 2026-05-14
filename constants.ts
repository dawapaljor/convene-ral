import { Message, MessageType, Testimonial, FeatureItem, NavLink } from './types';
import { Shield, Globe, Zap, Lock, Smartphone, UserX } from 'lucide-react';

export const DEMO_MESSAGES: Message[] = [
  {
    id: '1',
    sender: 'agent',
    content: 'Secure room created. The link will expire in 24 hours.',
    timestamp: new Date(Date.now() - 60000),
    type: MessageType.SYSTEM
  },
  {
    id: '2',
    sender: 'user',
    content: 'Is this link safe to share with the journalists?',
    timestamp: new Date(Date.now() - 45000),
    type: MessageType.TEXT,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix'
  },
  {
    id: '3',
    sender: 'agent',
    content: 'Yes. No account or phone number needed, no logs kept. Just share the URL.',
    timestamp: new Date(Date.now() - 30000),
    type: MessageType.TEXT,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah'
  },
  {
    id: '4',
    sender: 'user',
    content: 'Perfect. I am uploading the report now.',
    timestamp: new Date(Date.now() - 15000),
    type: MessageType.TEXT,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix'
  }
];

export const NAV_LINKS: NavLink[] = [
  { label: 'Features', page: 'home', targetId: 'security-features', href: '/#security-features' },
  { label: 'How it Works', page: 'home', targetId: 'how-it-works', href: '/#how-it-works' },
  { label: 'FAQ', page: 'faq', href: '/faq' },
];

export const FOOTER_LINKS = {
  platform: [
    { label: 'How it Works', page: 'home', targetId: 'how-it-works', href: '/#how-it-works' },
    { label: 'Features', page: 'home', targetId: 'security-features', href: '/#security-features' },
    { label: 'FAQs', page: 'faq', href: '/faq' },
    { label: 'Source Code', href: 'https://gitlab.com/keanuapp/keanuapp-weblite.git', external: true }
  ] as NavLink[],
  legal: [
    { label: 'Privacy Policy', page: 'privacy', href: '/privacy' },
    { label: 'Security', page: 'security', href: '/security' },
    { label: 'Terms of Service', page: 'terms', href: '/terms' },
    { label: 'Contact', href: '#', isAction: true }
  ] as NavLink[]
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "I am currently in a Convene room with over 850 guests... it’s a great tool for us to not only share news articles but also do outreach beyond Telegram/WeChat.",
    author: "Human Rights Trainer",
    role: ""
  },
  {
    quote: "We need secure places for our work. Could this platform be an answer? I believe that yes it is.",
    author: "Activist",
    role: "Middle East Region"
  },
  {
    quote: "This tool is helpful for journalists. It gives access to important information that can be shared outside [place redacted]. It’s good to have a secure platform like this.",
    author: "Journalist",
    role: "International Press"
  }
];

export const FEATURES: FeatureItem[] = [
  {
    title: "No Sign-up Required",
    description: "Avoid app-store distribution. No phone numbers, no logins, no personal identifiers. Just a link.",
    icon: UserX
  },
  {
    title: "Browser Based",
    description: "Use your existing mobile or desktop browser. No download involved.",
    icon: Globe
  },
  {
    title: "Signal-Grade Security",
    description: "End-to-end encryption that protects your conversations from prying eyes.",
    icon: Lock
  },
  {
    title: "Truly Ephemeral",
    description: "Once the conversation is over, delete the room and everything is wiped from our servers.",
    icon: Zap
  },
  {
    title: "Censorship Resistant",
    description: "Designed for use in highly censored environments to bypass restrictions.",
    icon: Shield
  },
  {
    title: "Mobile Ready",
    description: "Optimized for mobile browsers, reducing the digital fingerprints that endanger users.",
    icon: Smartphone
  }
];