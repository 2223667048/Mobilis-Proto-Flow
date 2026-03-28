import { Header } from "@/components/layout/Header";
import { ShieldAlert, KeyRound, CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function PukCode() {
  const [phone, setPhone] = useState("05 50 12 34 56");
  const [pin, setPin] = useState("");
  const [showPuk, setShowPuk] = useState(false);

  return (
    <div className="min-h-[100dvh] bg-background pb-8 flex flex-col">
      <Header title="查询 PUK 码" />
      
      <div className="px-4 mt-6">
        <div className="bg-orange-50 text-orange-800 p-4 rounded-2xl flex items-start gap-3 mb-8 text-sm">
          <ShieldAlert className="w-5 h-5 shrink-0 mt-0.5" />
          <p>如果您的 SIM 卡因连续输错 PIN 码被锁，请输入您的服务密码以获取 PUK 码进行解锁。请勿随意尝试，连续输错 10 次 PUK 码将导致 SIM 卡永久报废。</p>
        </div>

        {!showPuk ? (
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold ml-1">手机号码</label>
              <Input 
                value={phone} 
                onChange={(e) => setPhone(e.target.value)}
                className="h-14 bg-white border-border rounded-2xl font-medium"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-semibold ml-1">服务密码 (4-6位数字)</label>
              <Input 
                type="password"
                maxLength={6}
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                placeholder="请输入服务密码"
                className="h-14 bg-white border-border rounded-2xl font-medium"
              />
            </div>

            <Button 
              className="w-full h-14 rounded-2xl text-base font-semibold shadow-lg shadow-primary/25 mt-4"
              disabled={pin.length < 4}
              onClick={() => setShowPuk(true)}
            >
              获取 PUK 码
            </Button>
          </div>
        ) : (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 flex flex-col items-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-500">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h2 className="text-xl font-bold mb-6">您的 PUK 码查询成功</h2>
            
            <div className="bg-white p-6 rounded-3xl w-full border border-border shadow-sm text-center mb-8 relative overflow-hidden">
              <KeyRound className="absolute -right-4 -top-4 w-24 h-24 text-muted/30 -rotate-12" />
              <p className="text-muted-foreground text-sm mb-2 relative z-10">手机号 {phone} 的 PUK 码为：</p>
              <h1 className="text-4xl font-black font-heading tracking-widest text-primary relative z-10">
                84920173
              </h1>
            </div>

            <p className="text-sm text-center text-muted-foreground mb-8">
              请在手机提示输入 PUK 码时，输入上方8位数字。解锁后，系统会提示您重新设置一个新的 PIN 码。
            </p>

            <Button 
              variant="outline"
              className="w-full h-14 rounded-2xl text-base font-semibold"
              onClick={() => window.history.back()}
            >
              返回上一页
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}