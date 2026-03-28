import { Header } from "@/components/layout/Header";
import { CreditCard, Smartphone, CheckCircle2, AlertCircle } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLocation } from "wouter";

export default function Recharge() {
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
        <h1 className="text-2xl font-bold mb-2">充值成功！</h1>
        <p className="text-muted-foreground mb-8">
          您已成功充值 {amount} DZD 到您的账户。
        </p>
        
        <div className="bg-white p-6 rounded-3xl w-full border border-border mb-8 shadow-sm text-left">
          <div className="flex justify-between mb-3 text-sm">
            <span className="text-muted-foreground">手机号码</span>
            <span className="font-semibold">+213 05 50 12 34 56</span>
          </div>
          <div className="flex justify-between mb-3 text-sm">
            <span className="text-muted-foreground">交易时间</span>
            <span className="font-semibold">2026-03-28 10:24</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">交易单号</span>
            <span className="font-semibold">MOB84729184</span>
          </div>
        </div>
        
        <Button 
          className="w-full h-14 rounded-2xl text-base font-semibold"
          onClick={() => setLocation("/dashboard")}
        >
          返回首页
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-[100dvh] bg-background pb-28">
      <Header title="账户充值" />
      
      <div className="px-4 mt-6">
        {/* Method Toggle */}
        <div className="flex p-1 bg-muted rounded-2xl mb-8">
          <button 
            className={`flex-1 py-3 rounded-xl text-sm font-semibold transition-all ${method === 'card' ? 'bg-white shadow-sm text-primary' : 'text-muted-foreground'}`}
            onClick={() => setMethod('card')}
          >
            银行卡/电子支付
          </button>
          <button 
            className={`flex-1 py-3 rounded-xl text-sm font-semibold transition-all ${method === 'scratch' ? 'bg-white shadow-sm text-primary' : 'text-muted-foreground'}`}
            onClick={() => setMethod('scratch')}
          >
            充值卡
          </button>
        </div>

        {method === 'card' ? (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-6">
              <label className="text-sm font-semibold mb-2 block ml-1">充值号码</label>
              <div className="relative">
                <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input 
                  value="05 50 12 34 56" 
                  readOnly
                  className="pl-12 h-14 bg-white border-border rounded-2xl font-semibold text-lg"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-primary bg-primary/10 px-2 py-1 rounded-md font-semibold">本机</span>
              </div>
            </div>

            <div className="mb-8">
              <label className="text-sm font-semibold mb-3 block ml-1">选择金额 (DZD)</label>
              <div className="grid grid-cols-3 gap-3 mb-4">
                {['500', '1000', '2000', '3000', '5000', '10000'].map((val) => (
                  <button
                    key={val}
                    onClick={() => setAmount(val)}
                    className={`h-14 rounded-2xl font-bold text-lg border-2 transition-all ${amount === val ? 'border-primary bg-primary/5 text-primary' : 'border-border bg-white text-foreground hover:border-primary/30'}`}
                  >
                    {val}
                  </button>
                ))}
              </div>
              <div className="relative mt-4">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-medium">其他金额</span>
                <Input 
                  type="number" 
                  placeholder="输入自定义金额"
                  className="pl-24 pr-12 h-14 bg-white border-border rounded-2xl font-semibold text-right text-lg"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground font-medium">DZD</span>
              </div>
            </div>
            
            <div className="bg-blue-50 text-blue-800 p-4 rounded-2xl flex items-start gap-3 mb-8 text-sm">
              <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
              <p>充值 1000 DZD 或以上，即可获得 10% 额外流量赠送！活动截止至本月底。</p>
            </div>

            <Button 
              className="w-full h-14 rounded-2xl text-base font-semibold shadow-lg shadow-primary/25"
              onClick={handleRecharge}
              disabled={isLoading || !amount}
            >
              {isLoading ? "处理中..." : `确认支付 ${amount} DZD`}
            </Button>
          </div>
        ) : (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
             <div className="mb-8">
              <label className="text-sm font-semibold mb-2 block ml-1">14位充值密码</label>
              <Input 
                placeholder="XXXX XXXX XXXX XX" 
                className="text-center h-14 bg-white border-border rounded-2xl font-semibold text-xl tracking-widest"
              />
            </div>
            
            <div className="bg-muted p-6 rounded-3xl mb-8 flex flex-col items-center justify-center border border-dashed border-border">
              <CreditCard className="w-12 h-12 text-muted-foreground mb-3 opacity-50" />
              <p className="text-sm text-muted-foreground text-center">刮开充值卡背面的涂层<br/>输入14位数字密码</p>
            </div>

            <Button 
              className="w-full h-14 rounded-2xl text-base font-semibold shadow-lg shadow-primary/25"
              onClick={handleRecharge}
              disabled={isLoading}
            >
              {isLoading ? "验证中..." : "立即充值"}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}