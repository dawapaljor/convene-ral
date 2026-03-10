import React, { useState, useEffect, useRef } from 'react';
import { Send, Paperclip, Lock, ShieldCheck } from 'lucide-react';
import { DEMO_MESSAGES } from '../constants';
import { Message, MessageType } from '../types';

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Simulate initial message loading sequence
  useEffect(() => {
    let timeoutIds: ReturnType<typeof setTimeout>[] = [];
    let accumulatedDelay = 500;

    DEMO_MESSAGES.forEach((msg, index) => {
      const delay = accumulatedDelay + (index * 1200);
      const id = setTimeout(() => {
        setMessages(prev => [...prev, msg]);
      }, delay);
      timeoutIds.push(id);
    });

    return () => timeoutIds.forEach(clearTimeout);
  }, []);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      sender: 'user',
      content: inputValue,
      timestamp: new Date(),
      type: MessageType.TEXT,
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix'
    };

    setMessages(prev => [...prev, newMessage]);
    setInputValue('');

    // Simulate reply
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const replyMessage: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'agent',
        content: "Received. This room will auto-destruct in 5 minutes after we leave.",
        timestamp: new Date(),
        type: MessageType.TEXT,
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah'
      };
      setMessages(prev => [...prev, replyMessage]);
    }, 2000);
  };

  return (
    <div className="relative w-full max-w-[350px] sm:max-w-md mx-auto bg-white rounded-[2.5rem] shadow-2xl border-8 border-slate-900 overflow-hidden flex flex-col h-[600px] transform transition-all duration-500 hover:scale-[1.01]">

      {/* Dynamic Island / Notch area (Purely decorative for "Phone" look) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-2xl z-20"></div>

      {/* Browser Header Bar */}
      <div className="bg-slate-50 px-4 pt-10 pb-3 border-b border-slate-200 flex flex-col gap-2">
        {/* Fake URL Bar */}
        <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg px-3 py-1.5 shadow-sm">
          <Lock className="w-3 h-3 text-green-600" />
          <span className="text-xs text-slate-500 flex-1 text-center font-medium">letsconvene.im/room/roomname</span>
        </div>
      </div>

      {/* Messages Area */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-4 space-y-4 no-scrollbar bg-slate-50 scroll-smooth"
      >
        <div className="text-center py-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-50 border border-yellow-200 text-yellow-800 text-[10px] font-medium">
            <ShieldCheck className="w-3 h-3" />
            End-to-end encrypted
          </div>
        </div>

        {messages.map((msg) => {
          const isUser = msg.sender === 'user';
          const isSystem = msg.type === MessageType.SYSTEM;

          if (isSystem) {
            return (
              <div key={msg.id} className="flex justify-center my-2">
                <span className="text-slate-400 text-xs font-medium">
                  {msg.content}
                </span>
              </div>
            );
          }

          return (
            <div key={msg.id} className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
              <div className={`flex gap-2 max-w-[85%] ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
                {msg.avatar && !isUser && (
                  <img
                    src={msg.avatar}
                    alt="Avatar"
                    className="w-8 h-8 rounded-full self-end shadow-sm border border-white"
                  />
                )}
                <div className={`group relative px-4 py-2.5 rounded-2xl text-sm leading-relaxed shadow-sm transition-all duration-300
                  ${isUser
                    ? 'bg-brand-600 text-white rounded-br-none'
                    : 'bg-white text-slate-700 rounded-bl-none border border-slate-100'
                  }
                `}>
                  {msg.content}
                  <span className={`text-[9px] opacity-60 block text-right mt-1 ${isUser ? 'text-blue-100' : 'text-slate-400'}`}>
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            </div>
          );
        })}

        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-white p-3 rounded-2xl rounded-bl-none border border-slate-100 flex gap-1 items-center h-10 shadow-sm ml-10">
              <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
              <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
              <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
            </div>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="p-3 bg-white border-t border-slate-100">
        <form onSubmit={handleSendMessage} className="flex items-center gap-2">
          <button type="button" className="p-2 text-slate-400 hover:text-brand-600 transition-colors rounded-full hover:bg-slate-50">
            <Paperclip size={20} />
          </button>
          <div className="flex-1 relative">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Message..."
              className="w-full bg-slate-100 border-0 rounded-full py-2.5 px-4 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500/20 transition-all"
            />
          </div>
          <button type="submit" className={`p-2.5 rounded-full transition-all ${inputValue.trim() ? 'bg-brand-600 text-white shadow-md' : 'bg-slate-100 text-slate-400'}`}>
            <Send size={18} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatInterface;