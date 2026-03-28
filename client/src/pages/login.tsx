import { useState } from "react";
import { useLocation } from "wouter";
import { Phone, ArrowRight, ShieldCheck, Fingerprint, ScanFace } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";

export default function Login() {
  const [_, setLocation] = useLocation();
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showBiometric, setShowBiometric] = useState<string | null>(null);
  const { t } = useI18n();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) return;
    
    setIsLoading(true);
    setTimeout(() => {
      setLocation("/otp");
    }, 1000);
  };

  const handleBiometric = (type: string) => {
    setShowBiometric(type);
    setTimeout(() => {
      setShowBiometric(null);
      setLocation("/dashboard");
    }, 2000);
  };

  return (
    <div className="min-h-[100dvh] bg-white flex flex-col px-6 relative">
      <div className="absolute top-6 right-6 z-10">
        <LanguageSwitcher />
      </div>
      
      <div className="pt-20 pb-8 flex-1">
        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8">
          <span className="text-3xl font-black text-primary font-heading">M</span>
        </div>
        
        <h1 className="text-3xl font-bold mb-2">{t.welcome}</h1>
        <p className="text-muted-foreground mb-10 text-sm">{t.loginDesc}</p>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold mx-1 block">{t.phoneLabel}</label>
            <div className="relative flex items-center">
              <div className="absolute ltr:left-4 rtl:right-4 text-muted-foreground flex items-center gap-2 font-medium z-10">
                <span>🇩🇿 +213</span>
                <div className="w-[1px] h-4 bg-border"></div>
              </div>
              <Input 
                type="tel"
                placeholder={t.phonePlaceholder}
                className="ltr:pl-24 rtl:pr-24 h-14 bg-muted/50 border-transparent rounded-2xl text-lg focus-visible:ring-primary focus-visible:bg-white transition-colors"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>

          <Button 
            type="submit" 
            className="w-full h-14 rounded-2xl text-base font-semibold shadow-lg shadow-primary/25"
            disabled={isLoading || !phone}
          >
            {isLoading ? "..." : t.getOtp}
            {!isLoading && <ArrowRight className="ltr:ml-2 rtl:mr-2 w-5 h-5 rtl:rotate-180" />}
          </Button>
        </form>

        <div className="mt-12">
          <div className="relative flex items-center py-5">
            <div className="flex-grow border-t border-border"></div>
            <span className="flex-shrink-0 mx-4 text-muted-foreground text-xs font-medium">{t.loginMethods}</span>
            <div className="flex-grow border-t border-border"></div>
          </div>
          
          <div className="flex gap-4 justify-center mt-2">
            <button 
              onClick={() => handleBiometric('face')}
              className="w-16 h-16 rounded-2xl border border-border flex items-center justify-center text-foreground hover:bg-muted transition-colors group relative overflow-hidden"
            >
              <ScanFace className="w-8 h-8 group-hover:text-primary transition-colors" strokeWidth={1.5} />
            </button>
            <button 
              onClick={() => handleBiometric('fingerprint')}
              className="w-16 h-16 rounded-2xl border border-border flex items-center justify-center text-foreground hover:bg-muted transition-colors group relative overflow-hidden"
            >
              <Fingerprint className="w-8 h-8 group-hover:text-primary transition-colors" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>

      <div className="pb-10 flex flex-col items-center justify-center gap-2 text-sm text-muted-foreground">
        <ShieldCheck className="w-5 h-5 text-primary" />
        <p>Mobilis Secure Connection</p>
      </div>

      {/* Biometric Overlay */}
      {showBiometric && (
        <div className="absolute inset-0 z-50 bg-white/90 backdrop-blur-sm flex flex-col items-center justify-center animate-in fade-in duration-200">
          <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-6 relative">
            <div className="absolute inset-0 border-4 border-primary rounded-full animate-[spin_3s_linear_infinite] border-t-transparent border-r-transparent"></div>
            {showBiometric === 'face' ? (
              <ScanFace className="w-12 h-12 text-primary animate-pulse" strokeWidth={1.5} />
            ) : (
              <Fingerprint className="w-12 h-12 text-primary animate-pulse" strokeWidth={1.5} />
            )}
          </div>
          <h2 className="text-xl font-bold mb-2">正在验证...</h2>
          <p className="text-muted-foreground">请确保证您的{showBiometric === 'face' ? '面部' : '指纹'}在扫描区域内</p>
        </div>
      )}
    </div>
  );
}