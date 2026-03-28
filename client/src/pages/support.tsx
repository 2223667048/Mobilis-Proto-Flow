import { Header } from "@/components/layout/Header";
import { MessageSquareText, Phone, MapPin, FileQuestion, ChevronRight, Search, X, Send, Bot, User as UserIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState, useRef, useEffect } from "react";
import { useI18n } from "@/lib/i18n";
import mapImg from "@/assets/map.png";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
}

export default function Support() {
  const { t } = useI18n();
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  
  // Chatbot State
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "您好！我是 Mobilis 智能助手，请问有什么可以帮您的？", isBot: true }
  ]);
  const [inputText, setInputText] = useState("");
  const chatScrollRef = useRef<HTMLDivElement>(null);

  // Store Map State
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    if (chatScrollRef.current) {
      chatScrollRef.current.scrollTop = chatScrollRef.current.scrollHeight;
    }
  }, [messages, isChatOpen]);

  const handleSendMessage = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputText.trim()) return;

    const newUserMsg: Message = { id: Date.now(), text: inputText, isBot: false };
    setMessages(prev => [...prev, newUserMsg]);
    setInputText("");

    // Simulate bot reply
    setTimeout(() => {
      let replyText = "我已经收到您的问题。系统检测到这是一个常见问题，稍后将有专员为您解答，或者您可以先查看FAQ。";
      if (newUserMsg.text.includes("套餐") || newUserMsg.text.includes("流量")) {
        replyText = "关于套餐和流量的问题，您可以点击底部的'套餐'菜单查看所有可选的方案。PixX 系列目前非常受欢迎！";
      } else if (newUserMsg.text.includes("充值")) {
        replyText = "您可以通过首页或底部的'充值'入口，使用银行卡或充值卡快速为账户充值。";
      }
      
      setMessages(prev => [...prev, { id: Date.now(), text: replyText, isBot: true }]);
    }, 1000);
  };

  const faqs = [
    {
      q: "如何查询我的 PUK 码？",
      a: "您可以在APP的'我的主页 -> 我的设备与 SIM -> 查看 PUK 码'中找到它。或者使用其他手机拨打客服热线并提供您的身份信息。"
    },
    {
      q: "套餐内的流量用完了怎么办？",
      a: "如果套餐流量用完，您可以直接在APP内购买叠加包或者升级到流量更多的套餐。超出套餐的流量将按照标准资费扣除话费余额。"
    },
    {
      q: "如何为他人代充值？",
      a: "在充值页面，您可以直接修改充值号码为需要代充值的手机号，然后选择相应的金额进行支付即可。"
    },
    {
      q: "国际漫游服务如何开通？",
      a: "您可以在'套餐'页面的漫游专区自助开通国际漫游服务。我们建议您在出国前至少一天开通并确认。"
    },
    {
      q: "eSIM 卡如何激活？",
      a: "前往营业厅或在APP的设备管理中申请eSIM二维码，使用支持eSIM的手机扫描该二维码即可完成配置与激活。"
    }
  ];

  const filteredFaqs = faqs.filter(faq => faq.q.includes(searchQuery));

  // Chatbot Overlay
  if (isChatOpen) {
    return (
      <div className="fixed inset-0 bg-background z-50 flex flex-col animate-in slide-in-from-bottom-full duration-300">
        <div className="pt-12 pb-4 px-4 bg-primary text-white flex items-center justify-between shadow-md">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Bot className="w-6 h-6" />
            </div>
            <div>
              <h2 className="font-bold text-lg leading-tight">{t.chatbot}</h2>
              <span className="text-xs text-white/80 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-green-400"></span> 在线
              </span>
            </div>
          </div>
          <button 
            onClick={() => setIsChatOpen(false)}
            className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-muted/30" ref={chatScrollRef}>
          <div className="text-center text-xs text-muted-foreground mb-4">今天 {new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>
          
          {messages.map((msg) => (
            <div key={msg.id} className={`flex gap-3 max-w-[85%] ${msg.isBot ? 'mr-auto' : 'ml-auto flex-row-reverse'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.isBot ? 'bg-primary text-white' : 'bg-secondary text-white'}`}>
                {msg.isBot ? <Bot className="w-4 h-4" /> : <UserIcon className="w-4 h-4" />}
              </div>
              <div className={`p-3 rounded-2xl text-sm ${msg.isBot ? 'bg-white border border-border shadow-sm rounded-tl-sm' : 'bg-primary text-white shadow-sm rounded-tr-sm'}`}>
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 bg-white border-t border-border">
          <form onSubmit={handleSendMessage} className="flex gap-2">
            <Input 
              placeholder={t.chatPlaceholder}
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

  // Map Overlay
  if (showMap) {
    const mockStores = [
      { id: 1, name: "Mobilis 阿尔及尔总店", distance: "0.8 km", status: "营业中", hours: "08:00 - 18:00" },
      { id: 2, name: "Mobilis 机场营业厅", distance: "5.2 km", status: "营业中", hours: "24小时" },
      { id: 3, name: "Mobilis Didouche 体验店", distance: "2.1 km", status: "休息", hours: "09:00 - 17:00" }
    ];

    return (
      <div className="fixed inset-0 bg-background z-50 flex flex-col animate-in slide-in-from-right-full duration-300">
        <Header 
          title={t.findStore} 
          action={
            <button onClick={() => setShowMap(false)} className="p-2 -mr-2">
              <X className="w-6 h-6" />
            </button>
          }
          showBack={false}
        />
        
        <div className="relative flex-1 bg-muted/50">
          <div className="absolute inset-0 opacity-80 mix-blend-multiply pointer-events-none">
            <img src={mapImg} alt="Map" className="w-full h-full object-cover" />
          </div>
          
          {/* Map Pins */}
          <div className="absolute top-1/3 left-1/4 animate-bounce">
            <MapPin className="w-10 h-10 text-primary drop-shadow-md" fill="currentColor" />
          </div>
          <div className="absolute top-1/2 right-1/3">
            <MapPin className="w-8 h-8 text-primary/80 drop-shadow-md" />
          </div>
          
          {/* Current Location */}
          <div className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg ring-4 ring-blue-500/20"></div>
        </div>

        <div className="bg-white rounded-t-3xl -mt-6 relative z-10 p-6 shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
          <div className="w-12 h-1.5 bg-border rounded-full mx-auto mb-6"></div>
          <h3 className="font-bold text-lg mb-4">附近的营业厅</h3>
          
          <div className="space-y-4 overflow-y-auto max-h-[40vh] no-scrollbar">
            {mockStores.map((store) => (
              <div key={store.id} className="p-4 rounded-2xl border border-border shadow-sm flex justify-between items-center gap-3">
                <div className="flex-1">
                  <h4 className="font-bold mb-1 flex items-center gap-2">
                    {store.name}
                  </h4>
                  <div className="flex items-center gap-3 text-xs">
                    <span className="text-muted-foreground flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {store.distance}
                    </span>
                    <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${store.status === '营业中' ? 'bg-green-100 text-green-700' : 'bg-muted text-muted-foreground'}`}>
                      {store.status}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">营业时间: {store.hours}</p>
                </div>
                <button className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <ChevronRight className="w-5 h-5 ltr:ml-0.5 rtl:mr-0.5 rtl:rotate-180" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[100dvh] bg-background pb-28">
      <Header title={t.support} />
      
      <div className="px-4 mt-2">
        <h1 className="text-2xl font-bold mb-2">{t.howCanWeHelp}</h1>
        <p className="text-muted-foreground text-sm mb-6">我们随时为您提供支持</p>
        
        <div className="relative mb-8">
          <Search className="absolute ltr:left-4 rtl:right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input 
            placeholder="搜索问题或关键词..." 
            className="ltr:pl-12 rtl:pr-12 h-14 bg-white rounded-2xl border-border shadow-sm text-base focus-visible:ring-primary"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-2 gap-4 mb-8">
          <button 
            className="bg-white p-4 rounded-3xl border border-border shadow-sm flex flex-col items-center justify-center gap-3 hover:border-primary hover:bg-primary/5 transition-colors group"
            onClick={() => setIsChatOpen(true)}
          >
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform relative">
              <MessageSquareText className="w-6 h-6" />
              <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 border-2 border-white rounded-full"></span>
            </div>
            <div className="text-center">
              <span className="font-semibold block text-sm">{t.chatbot}</span>
              <span className="text-[10px] text-muted-foreground group-hover:text-primary/70">7x24小时智能解答</span>
            </div>
          </button>
          <button 
            className="bg-white p-4 rounded-3xl border border-border shadow-sm flex flex-col items-center justify-center gap-3 hover:border-blue-500 hover:bg-blue-50 transition-colors group"
            onClick={() => alert("将拨打客服热线: 666")}
          >
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <Phone className="w-6 h-6" />
            </div>
            <div className="text-center">
              <span className="font-semibold block text-sm">电话支持</span>
              <span className="text-[10px] text-muted-foreground group-hover:text-blue-500/70">拨打 666 或 888</span>
            </div>
          </button>
        </div>

        <div className="bg-white border border-border rounded-3xl overflow-hidden mb-8 shadow-sm">
          <div className="p-4 border-b border-border bg-muted/30 flex items-center gap-2">
            <FileQuestion className="w-5 h-5 text-primary" />
            <h3 className="font-bold">常见问题 (FAQ)</h3>
          </div>
          <div className="divide-y divide-border">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, i) => (
                <div key={i} className="w-full text-left">
                  <button 
                    className="w-full p-4 text-sm font-medium flex justify-between items-center hover:bg-muted/50 transition-colors"
                    onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  >
                    <span className="ltr:pr-4 rtl:pl-4">{faq.q}</span>
                    <ChevronRight className={`w-4 h-4 text-muted-foreground shrink-0 transition-transform duration-300 ${expandedFaq === i ? 'rotate-90' : 'rtl:rotate-180'}`} />
                  </button>
                  {expandedFaq === i && (
                    <div className="p-4 pt-0 text-sm text-muted-foreground bg-muted/20 border-t border-border/50 animate-in slide-in-from-top-2 duration-200">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="p-8 text-center text-muted-foreground text-sm">
                未找到匹配的问题
              </div>
            )}
          </div>
          {!searchQuery && (
            <button className="w-full p-4 text-sm font-semibold text-primary text-center hover:bg-muted/30 transition-colors">
              查看更多问题
            </button>
          )}
        </div>

        <button 
          className="w-full bg-secondary text-white p-4 rounded-3xl flex items-center justify-between hover:bg-secondary/90 transition-colors group relative overflow-hidden"
          onClick={() => setShowMap(true)}
        >
          <div className="absolute right-0 top-0 w-24 h-24 bg-primary/20 rounded-full blur-xl translate-x-1/2 -translate-y-1/2"></div>
          <div className="flex items-center gap-3 relative z-10">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="text-left">
              <span className="font-bold block text-sm">{t.findStore}</span>
              <span className="text-xs text-white/70">查询网点位置与营业时间</span>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-white/70 group-hover:translate-x-1 transition-transform relative z-10 rtl:rotate-180" />
        </button>
      </div>
    </div>
  );
}