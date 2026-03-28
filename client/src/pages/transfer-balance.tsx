import { Header } from "@/components/layout/Header";
import { CornerRightUp, Smartphone, AlertCircle, CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useLocation } from "wouter";

export default function TransferBalance() {
  const [_, setLocation] = useLocation();
  const [step, setStep] = useState<1 | 2>(1);
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleTransfer = () => {
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
        <h1 className="text-2xl font-bold mb-2">转账成功</h1>
        <p className="text-muted-foreground mb-8">
          您已成功向 {phone} 转移了 {amount} DZD。
        </p>
        <Button 
          className="w-full h-14 rounded-2xl text-base font-semibold max-w-xs"
          onClick={() => setLocation("/dashboard")}
        >
          返回首页
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-[100dvh] bg-background pb-8 flex flex-col">
      <Header title="余额转账 (代付)" />
      
      <div className="px-4 mt-6">
        <div className="bg-primary/10 text-primary p-4 rounded-2xl flex items-start gap-3 mb-8 text-sm">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <p>您可以将账户余额转移给其他 Mobilis 用户。单次转账收取 10 DZD 手续费。</p>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold ml-1">收款人手机号</label>
            <div className="relative">
              <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input 
                type="tel"
                placeholder="05 XX XX XX XX"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="pl-12 h-14 bg-white border-border rounded-2xl font-semibold text-lg"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold ml-1">转账金额 (DZD)</label>
            <div className="relative">
              <Input 
                type="number"
                placeholder="输入金额"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="pr-12 h-14 bg-white border-border rounded-2xl font-semibold text-lg"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground font-medium">DZD</span>
            </div>
            <p className="text-xs text-muted-foreground text-right mt-1">
              可用余额: 2,450 DZD
            </p>
          </div>

          <div className="pt-4">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-muted-foreground">转账金额</span>
              <span className="font-semibold">{amount || "0"} DZD</span>
            </div>
            <div className="flex justify-between text-sm mb-4">
              <span className="text-muted-foreground">手续费</span>
              <span className="font-semibold">10 DZD</span>
            </div>
            <div className="flex justify-between text-lg font-bold border-t border-border pt-4 mb-8">
              <span>总扣款</span>
              <span className="text-primary">{amount ? Number(amount) + 10 : 0} DZD</span>
            </div>

            <Button 
              className="w-full h-14 rounded-2xl text-base font-semibold shadow-lg shadow-primary/25"
              onClick={handleTransfer}
              disabled={isLoading || !phone || !amount || Number(amount) <= 0}
            >
              {isLoading ? "处理中..." : "确认转账"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}