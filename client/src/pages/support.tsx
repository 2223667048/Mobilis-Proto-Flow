import { Header } from "@/components/layout/Header";
import { MessageSquareText, Phone, MapPin, FileQuestion, ChevronRight, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useLocation } from "wouter";
import { useI18n } from "@/lib/i18n";

export default function Support() {
  const { t } = useI18n();
  const [_, setLocation] = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqs = [
    { q: "如何查询我的 PUK 码？", a: "您可以在APP的'我的主页'中找到它..." },
    { q: "套餐内的流量用完了怎么办？", a: "您可以购买叠加包..." },
    { q: "eSIM 卡如何激活？", a: "前往营业厅或在APP中申请..." }
  ]; // Condensed for mockup

  return (
    <div className="min-h-[100dvh] bg-background pb-28">
      <Header title={t.support} />
      
      <div className="px-4 mt-2">
        <h1 className="text-2xl font-bold mb-2">{t.howCanWeHelp}</h1>
        
        <div className="relative mb-8 mt-6">
          <Search className="absolute ltr:left-4 rtl:right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input 
            placeholder="Search..." 
            className="ltr:pl-12 rtl:pr-12 h-14 bg-white rounded-2xl border-border shadow-sm text-base focus-visible:ring-primary"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-2 gap-4 mb-8">
          <button 
            className="bg-white p-4 rounded-3xl border border-border shadow-sm flex flex-col items-center justify-center gap-3 hover:border-primary hover:bg-primary/5 transition-colors group"
            onClick={() => setLocation("/chatbot")}
          >
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform relative">
              <MessageSquareText className="w-6 h-6" />
              <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 border-2 border-white rounded-full"></span>
            </div>
            <div className="text-center">
              <span className="font-semibold block text-sm">{t.chatbot}</span>
              <span className="text-[10px] text-muted-foreground group-hover:text-primary/70">{t.chatbotDesc}</span>
            </div>
          </button>
          <button 
            className="bg-white p-4 rounded-3xl border border-border shadow-sm flex flex-col items-center justify-center gap-3 hover:border-blue-500 hover:bg-blue-50 transition-colors group"
          >
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <Phone className="w-6 h-6" />
            </div>
            <div className="text-center">
              <span className="font-semibold block text-sm">{t.callSupport}</span>
              <span className="text-[10px] text-muted-foreground group-hover:text-blue-500/70">{t.callSupportDesc}</span>
            </div>
          </button>
        </div>

        <div className="bg-white border border-border rounded-3xl overflow-hidden mb-8 shadow-sm">
          <div className="p-4 border-b border-border bg-muted/30 flex items-center gap-2">
            <FileQuestion className="w-5 h-5 text-primary" />
            <h3 className="font-bold">{t.faq}</h3>
          </div>
          <div className="divide-y divide-border">
            {faqs.map((faq, i) => (
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
            ))}
          </div>
          <button className="w-full p-4 text-sm font-semibold text-primary text-center hover:bg-muted/30 transition-colors">
            {t.viewMoreFaq}
          </button>
        </div>

        <button 
          className="w-full bg-secondary text-white p-4 rounded-3xl flex items-center justify-between hover:bg-secondary/90 transition-colors group relative overflow-hidden"
          onClick={() => setLocation("/store-locator")}
        >
          <div className="absolute right-0 top-0 w-24 h-24 bg-primary/20 rounded-full blur-xl translate-x-1/2 -translate-y-1/2"></div>
          <div className="flex items-center gap-3 relative z-10">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="text-left">
              <span className="font-bold block text-sm">{t.findStore}</span>
              <span className="text-xs text-white/70">{t.findStoreDesc}</span>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-white/70 group-hover:ltr:translate-x-1 group-hover:rtl:-translate-x-1 transition-transform relative z-10 rtl:rotate-180" />
        </button>
      </div>
    </div>
  );
}