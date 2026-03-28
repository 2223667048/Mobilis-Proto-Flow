import { Header } from "@/components/layout/Header";
import { Wifi, Plus, ShoppingCart, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useLocation } from "wouter";

export default function DataAddons() {
  const [_, setLocation] = useLocation();
  const [purchasing, setPurchasing] = useState<number | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const addons = [
    { id: 1, name: "周末特惠流量包", data: "10 GB", price: "200 DZD", validity: "2天", tag: "特惠" },
    { id: 2, name: "夜间无限流量", data: "无限", price: "150 DZD", validity: "1晚 (00:00-06:00)" },
    { id: 3, name: "社交媒体专享", data: "5 GB", price: "100 DZD", validity: "7天", tag: "热门" },
    { id: 4, name: "标准流量加油包", data: "2 GB", price: "300 DZD", validity: "30天" }
  ];

  const handlePurchase = (id: number) => {
    setPurchasing(id);
    setTimeout(() => {
      setPurchasing(null);
      setShowSuccess(true);
    }, 1500);
  };

  if (showSuccess) {
    return (
      <div className="min-h-[100dvh] bg-background flex flex-col items-center justify-center p-6 text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-500 animate-in zoom-in duration-500">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h1 className="text-2xl font-bold mb-2">订购成功</h1>
        <p className="text-muted-foreground mb-8">
          流量叠加包已生效，费用已从您的账户余额中扣除。
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
      <Header title="流量叠加包" />
      
      <div className="px-4 mt-2">
        <p className="text-sm text-muted-foreground mb-6">
          当前套餐流量不足？随时购买叠加包，立刻恢复高速上网体验。
        </p>

        <div className="space-y-4">
          {addons.map((item) => (
            <div key={item.id} className="bg-white rounded-3xl p-5 border border-border shadow-sm flex items-center gap-4 relative overflow-hidden">
              {item.tag && (
                <div className="absolute top-0 right-0 bg-red-500 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl z-10">
                  {item.tag}
                </div>
              )}
              
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shrink-0">
                <Wifi className="w-7 h-7" />
              </div>
              
              <div className="flex-1">
                <h3 className="font-bold text-base mb-1">{item.name}</h3>
                <div className="flex items-center gap-2 text-xs">
                  <span className="font-black text-primary text-sm">{item.data}</span>
                  <span className="text-muted-foreground border-l border-border pl-2">有效期 {item.validity}</span>
                </div>
              </div>
              
              <div className="flex flex-col items-end gap-2 shrink-0">
                <span className="font-bold font-heading">{item.price}</span>
                <Button 
                  size="sm" 
                  className="rounded-xl px-4 font-semibold"
                  disabled={purchasing === item.id}
                  onClick={() => handlePurchase(item.id)}
                >
                  {purchasing === item.id ? "处理中" : "购买"}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}