
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatMessage from '@/components/ChatMessage';
import ChatInput from '@/components/ChatInput';
import QuickReplies from '@/components/QuickReplies';
import { initialMessages, quickReplies, getResponseForMessage } from '@/data/chatbot';

interface Message {
  id: string;
  role: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

const ChatPage = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [showQuickReplies, setShowQuickReplies] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Scroll to bottom whenever messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  const handleSendMessage = (content: string) => {
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setShowQuickReplies(false);
    
    // Simulate bot response with a slight delay
    setTimeout(() => {
      const botResponse = getResponseForMessage(content);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'bot',
        content: botResponse,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
      setShowQuickReplies(true);
    }, 1000);
  };
  
  const handleQuickReply = (replyId: string) => {
    const reply = quickReplies.find(r => r.id === replyId);
    if (reply) {
      // Add user message (the quick reply)
      handleSendMessage(reply.text);
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col bg-background">
        <div className="bg-gradient-to-r from-jama-primary/20 to-jama-primary/10 p-4">
          <div className="container">
            <Button 
              variant="ghost" 
              className="mb-2"
              onClick={() => navigate('/')}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver
            </Button>
            
            <h1 className="text-2xl font-bold">Habla con Jamito</h1>
            <p className="text-muted-foreground">Tu asistente personal para encontrar el lugar perfecto</p>
          </div>
        </div>
        
        <div className="flex-1 container py-6 overflow-hidden flex flex-col">
          <div className="flex-1 overflow-y-auto custom-scrollbar pb-4">
            {messages.map(message => (
              <ChatMessage key={message.id} message={message} />
            ))}
            <div ref={messagesEndRef} />
          </div>
          
          {showQuickReplies && (
            <QuickReplies 
              replies={quickReplies}
              onSelectReply={handleQuickReply}
            />
          )}
          
          <ChatInput onSendMessage={handleSendMessage} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ChatPage;
