import { useState, useEffect, useRef } from "react";
import { useLocation } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";

export default function OTP() {
  const [_, setLocation] = useLocation();
  const { t } = useI18n();
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [isLoading, setIsLoading] = useState(false);
  const [countdown, setCountdown] = useState(60);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) value = value[0];
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const verifyOtp = () => {
    if (otp.join("").length !== 4) return;
    setIsLoading(true);
    setTimeout(() => {
      setLocation("/dashboard");
    }, 1200);
  };

  return (
    <div className="min-h-[100dvh] bg-white flex flex-col px-6">
      <div className="pt-14 pb-8 flex-1">
        <button 
          onClick={() => window.history.back()}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-muted hover:bg-muted/80 transition-colors mb-8 -mx-2"
        >
          <ArrowLeft className="w-5 h-5 rtl:rotate-180" />
        </button>
        
        <h1 className="text-3xl font-bold mb-2">{t.otpTitle}</h1>
        <p className="text-muted-foreground mb-10 text-sm leading-relaxed">
          {t.otpSentTo} <br/>
          <span className="font-semibold text-foreground" dir="ltr">+213 05 50 12 34 56</span>
        </p>

        <div className="flex justify-between mb-10 gap-3" dir="ltr">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={el => inputRefs.current[index] = el}
              type="text"
              inputMode="numeric"
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="w-[72px] h-[72px] rounded-2xl bg-muted/50 border-2 border-transparent text-center text-3xl font-bold focus:border-primary focus:bg-white transition-all outline-none"
              maxLength={1}
            />
          ))}
        </div>

        <Button 
          onClick={verifyOtp}
          className="w-full h-14 rounded-2xl text-base font-semibold shadow-lg shadow-primary/25"
          disabled={isLoading || otp.join("").length !== 4}
        >
          {isLoading ? t.verifying : t.confirm}
        </Button>
        
        <div className="mt-8 text-center">
          {countdown > 0 ? (
            <p className="text-sm text-muted-foreground font-medium">
              {t.resend} ({countdown}s)
            </p>
          ) : (
            <button className="text-sm text-primary font-semibold hover:underline">
              {t.resendOtp}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}