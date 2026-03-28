import { useState } from "react";
import { useLocation } from "wouter";
import { Phone, ArrowRight, ShieldCheck } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Login() {
  const [_, setLocation] = useLocation();
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) return;
    
    setIsLoading(true);
    setTimeout(() => {
      setLocation("/otp");
    }, 1000);
  };

  return (
    <div className="min-h-[100dvh] bg-white flex flex-col px-6">
      <div className="pt-20 pb-8 flex-1">
        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8">
          <span className="text-3xl font-black text-primary font-heading">M</span>
        </div>
        
        <h1 className="text-3xl font-bold mb-2">欢迎回来</h1>
        <p className="text-muted-foreground mb-10 text-sm">请输入您的 Mobilis 手机号码进行登录或注册。</p>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold ml-1">手机号码</label>
            <div className="relative flex items-center">
              <div className="absolute left-4 text-muted-foreground flex items-center gap-2 font-medium">
                <span>🇩🇿 +213</span>
                <div className="w-[1px] h-4 bg-border"></div>
              </div>
              <Input 
                type="tel"
                placeholder="05 XX XX XX XX"
                className="pl-24 h-14 bg-muted/50 border-transparent rounded-2xl text-lg focus-visible:ring-primary focus-visible:bg-white transition-colors"
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
            {isLoading ? "发送中..." : "获取验证码"}
            {!isLoading && <ArrowRight className="ml-2 w-5 h-5" />}
          </Button>
        </form>
      </div>

      <div className="pb-10 flex flex-col items-center justify-center gap-2 text-sm text-muted-foreground">
        <ShieldCheck className="w-5 h-5 text-primary" />
        <p>安全连接保障您的账号安全</p>
      </div>
    </div>
  );
}