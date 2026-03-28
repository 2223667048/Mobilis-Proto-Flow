import { Header } from "@/components/layout/Header";
import { Search, Wifi, Phone, MessageSquare, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useLocation } from "wouter";
import { useI18n } from "@/lib/i18n";

export default function Plans() {
  const { t } = useI18n();
  const [selectedCategory, setSelectedCategory] = useState(t.catAll);
  const [purchasingPlan, setPurchasingPlan] = useState<number | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [_, setLocation] = useLocation();

  const categories = [t.catAll, t.catPixx, t.catAwawal, t.catRoaming, t.catData];

  const PLANS = [
    { id: 1, name: "PixX 1000", price: 1000, data: "40 GB", calls: t.unlimited, sms: t.unlimited, validity: `30 ${t.validity}`, popular: true },
    { id: 2, name: "PixX 2000", price: 2000, data: "100 GB", calls: t.unlimited, sms: t.unlimited, validity: `30 ${t.validity}`, popular: false },
    { id: 3, name: "PixX 500", price: 500, data: "15 GB", calls: t.unlimited, sms: "100", validity: `15 ${t.validity}`, popular: false }
  ];

  const handlePurchase = (planId: number) => {
    setLocation("/signature");
  };

  if (showSuccess) {
    return (
      <div className="min-h-[100dvh] bg-background flex flex-col items-center justify-center p-6 text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-500 animate-in zoom-in duration-500">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h1 className="text-2xl font-bold mb-2">{t.orderSuccess}</h1>
        <p className="text-muted-foreground mb-8">{t.orderSuccessDesc}</p>
        <Button className="w-full h-14 rounded-2xl text-base font-semibold max-w-xs" onClick={() => { setShowSuccess(false); setLocation("/dashboard"); }}>
          {t.backHome}
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-[100dvh] bg-background pb-28">
      <Header title={t.explorePlans} />
      
      <div className="px-4 mt-2">
        <div className="relative mb-6">
          <Search className="absolute ltr:left-4 rtl:right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input 
            placeholder={t.searchPlan} 
            className="ltr:pl-12 rtl:pr-12 h-12 bg-white rounded-2xl border-border"
          />
        </div>

        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2 mb-4 -mx-4 px-4">
          {categories.map((cat) => (
            <button 
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`whitespace-nowrap px-4 py-2 rounded-xl text-sm font-semibold transition-colors ${selectedCategory === cat ? 'bg-foreground text-background' : 'bg-white border border-border text-foreground hover:bg-muted'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {PLANS.map((plan) => (
            <div key={plan.id} className="bg-white rounded-[2rem] p-5 shadow-sm border border-border relative overflow-hidden">
              {plan.popular && (
                <div className="absolute top-0 ltr:right-0 rtl:left-0 bg-orange-500 text-white text-[10px] font-bold px-3 py-1 ltr:rounded-bl-xl rtl:rounded-br-xl z-10">
                  {t.popular}
                </div>
              )}
              
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold font-heading mb-1">{plan.name}</h3>
                  <p className="text-muted-foreground text-xs font-medium">{plan.validity}</p>
                </div>
                <div className="text-right">
                  <div className="flex items-baseline gap-1 text-primary">
                    <span className="text-2xl font-black font-heading">{plan.price}</span>
                    <span className="text-xs font-bold">{t.dzd}</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 mb-6">
                <div className="bg-muted rounded-xl p-3 flex flex-col items-center justify-center gap-1">
                  <Wifi className="w-5 h-5 text-blue-500" />
                  <span className="font-bold text-sm">{plan.data}</span>
                  <span className="text-[10px] text-muted-foreground">{t.catData}</span>
                </div>
                <div className="bg-muted rounded-xl p-3 flex flex-col items-center justify-center gap-1">
                  <Phone className="w-5 h-5 text-green-500" />
                  <span className="font-bold text-sm leading-tight text-center">{plan.calls}</span>
                  <span className="text-[10px] text-muted-foreground">{t.calls}</span>
                </div>
                <div className="bg-muted rounded-xl p-3 flex flex-col items-center justify-center gap-1">
                  <MessageSquare className="w-5 h-5 text-purple-500" />
                  <span className="font-bold text-sm">{plan.sms}</span>
                  <span className="text-[10px] text-muted-foreground">{t.sms}</span>
                </div>
              </div>

              <div className="flex gap-3">
                <Button variant="outline" className="flex-1 h-12 rounded-xl border-border font-semibold hover:bg-muted">
                  {t.viewDetails}
                </Button>
                <Button 
                  className="flex-1 h-12 rounded-xl font-semibold shadow-md shadow-primary/20"
                  onClick={() => handlePurchase(plan.id)}
                >
                  {t.buyPlan} <ArrowRight className="w-4 h-4 ltr:ml-1 rtl:mr-1 rtl:rotate-180" />
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 bg-secondary text-white rounded-3xl p-6 relative overflow-hidden group cursor-pointer">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/30 rounded-full blur-2xl translate-x-1/3 -translate-y-1/3 group-hover:scale-150 transition-transform duration-700"></div>
          <div className="relative z-10">
            <ShieldCheck className="w-8 h-8 text-primary mb-3" />
            <h3 className="text-xl font-bold mb-2">{t.roamingTitle}</h3>
            <p className="text-sm text-white/80 mb-4">{t.roamingDesc}</p>
            <button className="bg-white text-secondary font-bold text-sm px-5 py-2.5 rounded-xl hover:bg-primary hover:text-white transition-colors">
              {t.viewRoaming}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}