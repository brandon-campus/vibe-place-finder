
import React from 'react';
import { cn } from '@/lib/utils';

interface ChatMessageProps {
  message: {
    id: string;
    role: 'user' | 'bot';
    content: string;
    timestamp: Date;
  };
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isBot = message.role === 'bot';
  
  return (
    <div className={cn(
      "flex w-full mb-4",
      isBot ? "justify-start" : "justify-end"
    )}>
      <div className={cn(
        "flex gap-3 max-w-[80%] md:max-w-[70%]",
        isBot ? "flex-row" : "flex-row-reverse"
      )}>
        {isBot && (
          <div className="w-8 h-8 rounded-full bg-jama-primary text-white flex items-center justify-center flex-shrink-0">
            J
          </div>
        )}
        
        {!isBot && (
          <div className="w-8 h-8 rounded-full bg-jama-secondary text-white flex items-center justify-center flex-shrink-0">
            T
          </div>
        )}
        
        <div className={cn(
          "py-3 px-4 rounded-2xl",
          isBot ? "bg-accent text-accent-foreground" : "bg-primary text-primary-foreground"
        )}>
          <p className="text-sm">{message.content}</p>
          <p className="text-xs mt-1 opacity-60">
            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
