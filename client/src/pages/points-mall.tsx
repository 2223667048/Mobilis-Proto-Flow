import { Header } from "@/components/layout/Header";
import { Star, Gift, ShoppingBag, ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";

export default function PointsMall() {
  const { t } = useI18n();
  
  const items = [
    { name: "5GB 流量包 (3天)", points: 500, type: "data" },
    { name: "网内无限通话 (1天)", points: 300, type: "call" },
    { name: "100 DZD 话费", points: 1000, type: "balance" },
    { name: "Netflix 1个月会员", points: 5000, type: "partner" },
  ];

  return (
    <div className="min-h-[100dvh] bg-background pb-8 flex flex-col">
      <Header title={t.pointsMall} />
      
      <div className="px-4 mt-2">
        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-3xl p-6 shadow-lg mb-8 text-center relative overflow-hidden">
           <Star className="absolute left-4 top-4 w-16 h-16 text-white/20 -rotate-12" />
           <Star className="absolute right-4 bottom-4 w-24 h-24 text-white/10 rotate-45" />
           <p className="text-white/90 text-sm font-medium relative z-10 mb-1">可用积分</p>
           <h2 className="text-5xl font-black font-heading relative z-10 mb-4">12,450</h2>
           <div className="flex justify-center gap-2 relative z-10">
             <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-bold backdrop-blur-sm">Gold 会员</span>
             <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-bold backdrop-blur-sm">即将过期: 0</span>
           </div>
        </div>

        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">积分兑换</h2>
          <span className="text-sm text-muted-foreground">兑换记录</span>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {items.map((item, i) => (
            <div key={i} className="bg-white rounded-3xl p-4 border border-border shadow-sm flex flex-col">
              <div className="w-12 h-12 rounded-full bg-yellow-50 flex items-center justify-center mb-3">
                {item.type === 'data' ? <ShoppingBag className="w-6 h-6 text-yellow-600" /> : <Gift className="w-6 h-6 text-yellow-600" />}
              </div>
              <h3 className="font-bold text-sm mb-1 flex-1 leading-tight">{item.name}</h3>
              <div className="flex items-center gap-1 text-orange-500 font-bold mb-3">
                <Star className="w-4 h-4 fill-current" />
                <span>{item.points}</span>
              </div>
              <Button size="sm" variant="outline" className="w-full rounded-xl border-orange-200 text-orange-600 hover:bg-orange-50 hover:text-orange-700">
                立即兑换
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
