import { Header } from "@/components/layout/Header";
import { Search, Wifi, Phone, MessageSquare, ArrowRight, ShieldCheck } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const PLANS = [
  {
    id: 1,
    name: "PixX 1000",
    price: 1000,
    data: "40 GB",
    calls: "无限",
    sms: "无限制",
    validity: "30天",
    popular: true,
    color: "bg-primary"
  },
  {
    id: 2,
    name: "PixX 2000",
    price: 2000,
    data: "100 GB",
    calls: "无限",
    sms: "无限制",
    validity: "30天",
    popular: false,
    color: "bg-blue-600"
  },
  {
    id: 3,
    name: "PixX 500",
    price: 500,
    data: "15 GB",
    calls: "无限 (网内)",
    sms: "100条",
    validity: "15天",
    popular: false,
    color: "bg-purple-600"
  }
];

export default function Plans() {
  return (
    <div className="min-h-[100dvh] bg-background pb-28">
      <Header title="探索套餐" />
      
      <div className="px-4 mt-2">
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input 
            placeholder="搜索套餐名称..." 
            className="pl-12 h-12 bg-white rounded-2xl border-border"
          />
        </div>

        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2 mb-4 -mx-4 px-4">
          {["全部", "PixX 系列", "Awawal", "国际漫游", "纯流量"].map((cat, i) => (
            <button 
              key={cat}
              className={`whitespace-nowrap px-4 py-2 rounded-xl text-sm font-semibold transition-colors ${i === 0 ? 'bg-foreground text-background' : 'bg-white border border-border text-foreground'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {PLANS.map((plan) => (
            <div key={plan.id} className="bg-white rounded-[2rem] p-5 shadow-sm border border-border relative overflow-hidden">
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-orange-500 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl z-10">
                  最受欢迎
                </div>
              )}
              
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold font-heading mb-1">{plan.name}</h3>
                  <p className="text-muted-foreground text-xs font-medium">有效期 {plan.validity}</p>
                </div>
                <div className="text-right">
                  <div className="flex items-baseline gap-1 text-primary">
                    <span className="text-2xl font-black font-heading">{plan.price}</span>
                    <span className="text-xs font-bold">DZD</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 mb-6">
                <div className="bg-muted rounded-xl p-3 flex flex-col items-center justify-center gap-1">
                  <Wifi className="w-5 h-5 text-blue-500" />
                  <span className="font-bold text-sm">{plan.data}</span>
                  <span className="text-[10px] text-muted-foreground">流量</span>
                </div>
                <div className="bg-muted rounded-xl p-3 flex flex-col items-center justify-center gap-1">
                  <Phone className="w-5 h-5 text-green-500" />
                  <span className="font-bold text-sm">{plan.calls}</span>
                  <span className="text-[10px] text-muted-foreground">通话</span>
                </div>
                <div className="bg-muted rounded-xl p-3 flex flex-col items-center justify-center gap-1">
                  <MessageSquare className="w-5 h-5 text-purple-500" />
                  <span className="font-bold text-sm">{plan.sms}</span>
                  <span className="text-[10px] text-muted-foreground">短信</span>
                </div>
              </div>

              <div className="flex gap-3">
                <Button variant="outline" className="flex-1 h-12 rounded-xl border-border font-semibold">
                  查看详情
                </Button>
                <Button className="flex-1 h-12 rounded-xl font-semibold shadow-md shadow-primary/20">
                  立即订购 <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Roaming Promo */}
        <div className="mt-8 bg-secondary text-white rounded-3xl p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/30 rounded-full blur-2xl translate-x-1/3 -translate-y-1/3"></div>
          <div className="relative z-10">
            <ShieldCheck className="w-8 h-8 text-primary mb-3" />
            <h3 className="text-xl font-bold mb-2">需要出国旅行？</h3>
            <p className="text-sm text-white/80 mb-4">开通国际漫游套餐，在全球超过 150 个国家保持连接。</p>
            <button className="bg-white text-secondary font-bold text-sm px-5 py-2.5 rounded-xl">
              查看漫游套餐
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}