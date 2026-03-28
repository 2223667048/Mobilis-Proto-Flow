import { Header } from "@/components/layout/Header";
import { CreditCard, Smartphone, CheckCircle2, AlertCircle } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLocation } from "wouter";
import { useI18n } from "@/lib/i18n";

export default function Recharge() {
  const { t } = useI18n();
  const [amount, setAmount] = useState<string>("1000");
  const [step, setStep] = useState<1 | 2>(1);
  const [method, setMethod] = useState<"card" | "scratch">("card");
  const [isLoading, setIsLoading] = useState(false);
  const [_, setLocation] = useLocation();

  const handleRecharge = () => {
    setIsLoading(true);
    setTimeout(() => {
      setStep(2);
      setIsLoading(false);
    }, 1500);
  };

  if (step === 2) {
    return (
      <div className="min-h-[100dvh] bg-background flex flex-col items-center justify-center p-6 text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-500 animate-in zoom-in duration-500">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h1 className="text-2xl font-bold mb-2">{t.successTitle}</h1>
        <p className="text-muted-foreground mb-8">{t.successDesc}</p>
        
        <div className="bg-white p-6 rounded-3xl w-full border border-border mb-8 shadow-sm text-left">
          <div className="flex justify-between mb-3 text-sm">
            <span className="text-muted-foreground">{t.phoneStr}</span>
            <span className="font-semibold" dir="ltr">+213 05 50 12 34 56</span>
          </div>
          <div className="flex justify-between mb-3 text-sm">
            <span className="text-muted-foreground">{t.transTime}</span>
            <span className="font-semibold">2026-03-28 10:24</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">{t.transId}</span>
            <span className="font-semibold">MOB84729184</span>
          </div>
        </div>
        
        <Button 
          className="w-full h-14 rounded-2xl text-base font-semibold"
          onClick={() => setLocation("/dashboard")}
        >
          {t.backHome}
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-[100dvh] bg-background pb-28">
      <Header title={t.rechargeTitle} />
      
      <div className="px-4 mt-6">
        <div className="flex p-1 bg-muted rounded-2xl mb-8">
          <button 
            className={`flex-1 py-3 rounded-xl text-sm font-semibold transition-all ${method === 'card' ? 'bg-white shadow-sm text-primary' : 'text-muted-foreground'}`}
            onClick={() => setMethod('card')}
          >
            {t.cardMethod}
          </button>
          <button 
            className={`flex-1 py-3 rounded-xl text-sm font-semibold transition-all ${method === 'scratch' ? 'bg-white shadow-sm text-primary' : 'text-muted-foreground'}`}
            onClick={() => setMethod('scratch')}
          >
            {t.scratchMethod}
          </button>
        </div>

        {method === 'card' ? (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-6">
              <label className="text-sm font-semibold mb-2 block mx-1">{t.rechargeNumber}</label>
              <div className="relative">
                <Smartphone className="absolute ltr:left-4 rtl:right-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input 
                  value="05 50 12 34 56" 
                  readOnly
                  dir="ltr"
                  className="ltr:pl-12 rtl:pr-12 h-14 bg-white border-border rounded-2xl font-semibold text-lg"
                />
                <span className="absolute ltr:right-4 rtl:left-4 top-1/2 -translate-y-1/2 text-xs text-primary bg-primary/10 px-2 py-1 rounded-md font-semibold">{t.self}</span>
              </div>
            </div>

            <div className="mb-8">
              <label className="text-sm font-semibold mb-3 block mx-1">{t.selectAmount}</label>
              <div className="grid grid-cols-3 gap-3 mb-4">
                {['500', '1000', '2000', '3000', '5000', '10000'].map((val) => (
                  <button
                    key={val}
                    onClick={() => setAmount(val)}
                    className={`h-14 rounded-2xl font-bold text-lg border-2 transition-all ${amount === val ? 'border-primary bg-primary/5 text-primary' : 'border-border bg-white text-foreground hover:border-primary/30'}`}
                  >
                    <span dir="ltr">{val}</span>
                  </button>
                ))}
              </div>
              <div className="relative mt-4">
                <span className="absolute ltr:left-4 rtl:right-4 top-1/2 -translate-y-1/2 text-muted-foreground font-medium">{t.customAmount}</span>
                <Input 
                  type="number" 
                  className="ltr:pl-24 ltr:pr-12 rtl:pr-24 rtl:pl-12 h-14 bg-white border-border rounded-2xl font-semibold ltr:text-right rtl:text-left text-lg"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  dir="ltr"
                />
                <span className="absolute ltr:right-4 rtl:left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-medium">{t.dzd}</span>
              </div>
            </div>
            
            <div className="bg-blue-50 text-blue-800 p-4 rounded-2xl flex items-start gap-3 mb-8 text-sm">
              <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
              <p>{t.promoHint}</p>
            </div>

            <Button 
              className="w-full h-14 rounded-2xl text-base font-semibold shadow-lg shadow-primary/25"
              onClick={handleRecharge}
              disabled={isLoading || !amount}
            >
              {isLoading ? t.processing : `${t.confirmPay} ${amount} ${t.dzd}`}
            </Button>
          </div>
        ) : (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
             <div className="mb-8">
              <label className="text-sm font-semibold mb-2 block mx-1">{t.password14}</label>
              <Input 
                placeholder="XXXX XXXX XXXX XX" 
                dir="ltr"
                className="text-center h-14 bg-white border-border rounded-2xl font-semibold text-xl tracking-widest"
              />
            </div>
            
            <div className="bg-muted p-6 rounded-3xl mb-8 flex flex-col items-center justify-center border border-dashed border-border">
              <CreditCard className="w-12 h-12 text-muted-foreground mb-3 opacity-50" />
              <p className="text-sm text-muted-foreground text-center whitespace-pre-line">{t.scratchHint}</p>
            </div>

            <Button 
              className="w-full h-14 rounded-2xl text-base font-semibold shadow-lg shadow-primary/25"
              onClick={handleRecharge}
              disabled={isLoading}
            >
              {isLoading ? t.verifying : t.rechargeNow}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}