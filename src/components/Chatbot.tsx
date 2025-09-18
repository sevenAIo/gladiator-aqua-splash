import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/enhanced-button';
import { Input } from './ui/input';
import { ScrollArea } from './ui/scroll-area';
import { MessageCircle, Send, X, Bot, User } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm your Gladiator Water assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const predefinedResponses: Record<string, string> = {
    'hello': "Hello! Welcome to Gladiator Mineral Water. How can I assist you today?",
    'hi': "Hi there! I'm here to help you with any questions about our premium mineral water.",
    'price': "Our prices: 500ml - Rp 3,500 ($0.25), 1.5L - Rp 8,500 ($0.60), 19L - Rp 25,000 ($1.75). Would you like to place an order?",
    'order': "I'd be happy to help you place an order! You can call us at +62-21-xxxx-xxxx or visit our website's order section.",
    'ingredients': "Gladiator contains natural mountain spring water enhanced with ION Silver technology and balanced minerals for optimal health benefits.",
    'delivery': "We offer same-day delivery in major Indonesian cities. International shipping is available to 15+ countries.",
    'health': "Our water is processed using Japanese technology with ION Silver for antimicrobial protection and natural minerals for health benefits.",
    'technology': "We use advanced Japanese purification technology combined with ION Silver enhancement for superior quality and safety.",
    'locations': "We're available in 15+ countries across Southeast Asia. Check our global reach section for specific locations.",
    'contact': "You can reach us at +62-21-xxxx-xxxx or email support@gladiator-water.com. We're here 24/7!",
    'sustainability': "We're committed to 100% recyclable packaging, carbon-neutral production, and water conservation practices.",
    'default': "I understand you're asking about our premium mineral water. For detailed information, please contact our support team at +62-21-xxxx-xxxx or browse our website sections above."
  };

  const getResponse = (userMessage: string): string => {
    const lowercaseMessage = userMessage.toLowerCase();
    
    for (const [key, response] of Object.entries(predefinedResponses)) {
      if (key !== 'default' && lowercaseMessage.includes(key)) {
        return response;
      }
    }
    
    // Check for partial matches
    if (lowercaseMessage.includes('buy') || lowercaseMessage.includes('purchase')) {
      return predefinedResponses.order;
    }
    if (lowercaseMessage.includes('where') || lowercaseMessage.includes('location')) {
      return predefinedResponses.locations;
    }
    if (lowercaseMessage.includes('clean') || lowercaseMessage.includes('pure')) {
      return predefinedResponses.technology;
    }
    if (lowercaseMessage.includes('eco') || lowercaseMessage.includes('environment')) {
      return predefinedResponses.sustainability;
    }
    
    return predefinedResponses.default;
  };

  const sendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    // Simulate bot response delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getResponse(inputValue),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);

    setInputValue('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <>
      {/* Chat button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-premium premium-glow animate-pulse"
          variant="hero"
          size="icon"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      )}

      {/* Chat window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 z-50 w-80 h-96 shadow-premium border-primary/20 animate-fade-in-up">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border bg-gradient-water rounded-t-lg">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Gladiator Assistant</h3>
                <p className="text-xs text-white/80">Always here to help</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Messages */}
          <ScrollArea className="flex-1 p-4 h-64">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-2 ${
                    message.sender === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  {message.sender === 'bot' && (
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <Bot className="w-3 h-3 text-primary" />
                    </div>
                  )}
                  <div
                    className={`max-w-[70%] p-3 rounded-lg text-sm ${
                      message.sender === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-foreground'
                    }`}
                  >
                    {message.text}
                  </div>
                  {message.sender === 'user' && (
                    <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <User className="w-3 h-3 text-accent" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </ScrollArea>

          {/* Input */}
          <div className="p-4 border-t border-border">
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about our water..."
                className="flex-1"
              />
              <Button
                onClick={sendMessage}
                size="icon"
                variant="splash"
                disabled={!inputValue.trim()}
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
            
            {/* Quick suggestions */}
            <div className="flex flex-wrap gap-1 mt-2">
              {['Prices', 'Delivery', 'Health Benefits'].map((suggestion) => (
                <button
                  key={suggestion}
                  onClick={() => setInputValue(suggestion.toLowerCase())}
                  className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        </Card>
      )}
    </>
  );
};