import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Sparkles, User, Bot, Loader2 } from 'lucide-react';
import { useStylistStore } from '../store';

const AIChatInterface = () => {
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const { 
    conversations, 
    currentConversation, 
    startNewConversation, 
    addMessage,
    currentMood,
    currentOccasion,
    setCurrentMood,
    setCurrentOccasion
  } = useStylistStore();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [conversations]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const message = {
      id: Date.now(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    // Start new conversation if none exists
    let conversationId = currentConversation;
    if (!conversationId) {
      const newConv = startNewConversation();
      conversationId = newConv.id;
    }

    addMessage(conversationId, message);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = generateAIResponse(inputMessage);
      const aiMessage = {
        id: Date.now() + 1,
        text: aiResponse,
        sender: 'ai',
        timestamp: new Date()
      };
      addMessage(conversationId, aiMessage);
      setIsTyping(false);
    }, 1500);
  };

  const generateAIResponse = (userMessage) => {
    const responses = {
      greeting: [
        "Hello! I'm your AI fashion stylist. I'd love to help you create the perfect look! What's the occasion?",
        "Hi there! Ready to elevate your style? Tell me what you're looking for today.",
        "Welcome to your personal fashion consultation! What can I help you with?"
      ],
      occasion: [
        "Perfect! For that occasion, I'd recommend starting with a base piece that reflects your personal style. What colors do you feel most confident in?",
        "Great choice! Let's build an outfit that makes you feel amazing. What's your preferred style - classic, trendy, or something in between?",
        "Excellent! I have some fantastic ideas for that. What's your budget range for this outfit?"
      ],
      style: [
        "I love that style direction! Let me suggest some pieces that will complement your aesthetic perfectly.",
        "Perfect! That style is so versatile. I can see it working beautifully with some key accessories.",
        "Great taste! That style really suits you. Let me recommend some pieces that will enhance your natural elegance."
      ],
      default: [
        "That's interesting! Tell me more about what you're looking for in terms of style and comfort.",
        "I'd love to help you with that! What specific aspects of fashion would you like to explore?",
        "Fascinating! Let me understand your style preferences better. What colors and patterns do you gravitate towards?"
      ]
    };

    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return responses.greeting[Math.floor(Math.random() * responses.greeting.length)];
    } else if (lowerMessage.includes('party') || lowerMessage.includes('work') || lowerMessage.includes('date') || lowerMessage.includes('casual')) {
      return responses.occasion[Math.floor(Math.random() * responses.occasion.length)];
    } else if (lowerMessage.includes('classic') || lowerMessage.includes('trendy') || lowerMessage.includes('elegant') || lowerMessage.includes('comfortable')) {
      return responses.style[Math.floor(Math.random() * responses.style.length)];
    } else {
      return responses.default[Math.floor(Math.random() * responses.default.length)];
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const currentConv = conversations.find(conv => conv.id === currentConversation);
  const messages = currentConv?.messages || [];

  return (
    <div className="flex flex-col h-full">
      {/* Chat Header */}
      <div className="glass-fashion rounded-t-2xl p-6 border-b border-white/20">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gradient-to-br from-slate-700 to-stone-600 rounded-full flex items-center justify-center neon-glow-classic">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-800">AI Fashion Stylist</h3>
            <p className="text-slate-600">Your personal fashion consultant</p>
          </div>
        </div>
        
        {/* Mood and Occasion Selector */}
        <div className="mt-4 flex flex-wrap gap-3">
          <select
            value={currentMood}
            onChange={(e) => setCurrentMood(e.target.value)}
            className="input-fashion text-sm py-2 px-3"
          >
            <option value="">Select Mood</option>
            <option value="confident">Confident</option>
            <option value="casual">Casual</option>
            <option value="elegant">Elegant</option>
            <option value="playful">Playful</option>
            <option value="professional">Professional</option>
          </select>
          
          <select
            value={currentOccasion}
            onChange={(e) => setCurrentOccasion(e.target.value)}
            className="input-fashion text-sm py-2 px-3"
          >
            <option value="">Select Occasion</option>
            <option value="work">Work</option>
            <option value="casual">Casual</option>
            <option value="party">Party</option>
            <option value="date">Date Night</option>
            <option value="formal">Formal Event</option>
          </select>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-20 h-20 bg-gradient-to-br from-slate-700 to-stone-600 rounded-full flex items-center justify-center mx-auto mb-4 neon-glow-classic">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-2">Start Your Style Journey</h3>
            <p className="text-slate-600">Tell me about your style preferences, occasion, or ask for fashion advice!</p>
          </motion.div>
        )}

        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className={`flex items-start space-x-3 max-w-xs lg:max-w-md ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  message.sender === 'user' 
                    ? 'bg-gradient-to-br from-slate-700 to-stone-600' 
                    : 'bg-gradient-to-br from-teal-600 to-blue-600'
                }`}>
                  {message.sender === 'user' ? (
                    <User className="w-4 h-4 text-white" />
                  ) : (
                    <Bot className="w-4 h-4 text-white" />
                  )}
                </div>
                <div className={`rounded-2xl px-4 py-3 ${
                  message.sender === 'user'
                    ? 'bg-gradient-to-r from-slate-700 to-stone-600 text-white'
                    : 'bg-white/80 backdrop-blur-md border border-white/30 text-slate-800'
                }`}>
                  <p className="text-sm">{message.text}</p>
                  <p className={`text-xs mt-2 ${
                    message.sender === 'user' ? 'text-slate-200' : 'text-slate-500'
                  }`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Typing Indicator */}
        {isTyping && (
          <motion.div
            className="flex justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-teal-600 to-blue-600 rounded-full flex items-center justify-center">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div className="bg-white/80 backdrop-blur-md border border-white/30 rounded-2xl px-4 py-3">
                <div className="flex items-center space-x-2">
                  <Loader2 className="w-4 h-4 text-slate-600 animate-spin" />
                  <span className="text-sm text-slate-600">AI is typing...</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="glass-fashion rounded-b-2xl p-6 border-t border-white/20">
        <div className="flex space-x-4">
          <div className="flex-1">
            <textarea
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me about fashion advice, style tips, or outfit recommendations..."
              className="input-fashion resize-none h-12 leading-6"
              rows={1}
            />
          </div>
          <button
            onClick={handleSendMessage}
            disabled={!inputMessage.trim() || isTyping}
            className="w-12 h-12 bg-gradient-to-r from-slate-700 to-stone-600 text-white rounded-xl flex items-center justify-center hover:scale-105 transition-transform duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIChatInterface;
