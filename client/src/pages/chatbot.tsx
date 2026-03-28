import { useState, useRef, useEffect } from "react";
import { Header } from "@/components/layout/Header";
import { Send, Bot, User as UserIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useI18n } from "@/lib/i18n";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
}

export default function Chatbot() {
  const { t } = useI18n();
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: t.chatWelcome, isBot: true }
  ]);
  const [inputText, setInputText] = useState("");
  const chatScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatScrollRef.current) {
      chatScrollRef.current.scrollTop = chatScrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputText.trim()) return;

    const newUserMsg: Message = { id: Date.now(), text: inputText, isBot: false };
    setMessages(prev => [...prev, newUserMsg]);
    setInputText("");

    // Simulate bot reply
    setTimeout(() => {
      setMessages(prev => [...prev, { id: Date.now(), text: t.chatReply, isBot: true }]);
    }, 1000);
  };

  return (
    <div className="min-h-[100dvh] bg-muted/30 flex flex-col">
      <div className="bg-primary text-white pb-2 shadow-sm relative z-20">
        <Header 
          title={
            <div className="flex flex-col items-center">
              <span className="text-lg font-bold">{t.aiAssistant}</span>
              <span className="text-xs font-normal text-white/80 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-green-400"></span> {t.online}
              </span>
            </div>
          } 
          transparent={true} 
        />
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-6" ref={chatScrollRef}>
        <div className="text-center text-xs text-muted-foreground mt-2 mb-4">
          {new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
        </div>
        
        {messages.map((msg) => (
          <div key={msg.id} className={`flex gap-3 max-w-[85%] ${msg.isBot ? 'ltr:mr-auto rtl:ml-auto' : 'ltr:ml-auto rtl:mr-auto flex-row-reverse'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.isBot ? 'bg-primary text-white' : 'bg-secondary text-white'}`}>
              {msg.isBot ? <Bot className="w-4 h-4" /> : <UserIcon className="w-4 h-4" />}
            </div>
            <div className={`p-3 rounded-2xl text-sm leading-relaxed ${msg.isBot ? 'bg-white border border-border shadow-sm ltr:rounded-tl-sm rtl:rounded-tr-sm' : 'bg-primary text-white shadow-sm ltr:rounded-tr-sm rtl:rounded-tl-sm'}`}>
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 bg-white border-t border-border mb-safe">
        <form onSubmit={handleSendMessage} className="flex gap-2">
          <Input 
            placeholder={t.chatInput}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="flex-1 h-12 rounded-full bg-muted/50 border-transparent focus-visible:ring-primary focus-visible:bg-white"
          />
          <button 
            type="submit"
            disabled={!inputText.trim()}
            className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shrink-0 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
          >
            <Send className="w-5 h-5 ltr:ml-1 rtl:mr-1 rtl:rotate-180" />
          </button>
        </form>
      </div>
    </div>
  );
}