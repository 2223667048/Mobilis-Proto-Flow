import { Link, useLocation } from "wouter";
import { Header } from "@/components/layout/Header";
import { Plus, ArrowRight, Zap, Gift, ShieldAlert, CreditCard, Activity, Star } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import banner1 from "@/assets/banner1.png";
import avatar from "@/assets/avatar.png";

export default function Dashboard() {
  const [_, setLocation] = useLocation();

  return (
    <div className="min-h-[100dvh] bg-background pb-28">
      {/* Dynamic Header Section */}
      <div className="bg-secondary rounded-b-[2.5rem] pt-6 pb-24 px-4 text-white relative overflow-hidden">
        {/* Abstract background shapes */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/20 rounded-full blur-2xl translate-y-1/3 -translate-x-1/4"></div>

        <div className="flex justify-between items-center mb-8 relative z-10">
          <div className="flex items-center gap-3" onClick={() => setLocation("/profile")}>
            <div className="w-12 h-12 rounded-full border-2 border-white/20 overflow-hidden bg-white/10 cursor-pointer">
              <img src={avatar} alt="User" className="w-full h-full object-cover" />
            </div>
            <div className="cursor-pointer">
              <p className="text-xs text-white/70 font-medium">早上好</p>
              <h2 className="text-base font-bold">Ahmed Yassine</h2>
            </div>
          </div>
          <button 
            onClick={() => alert("目前没有新的活动或通知。")}
            className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/10 hover:bg-white/20 transition-colors"
          >
            <Gift className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Main Balance Card */}
        <div className="relative z-10" onClick={() => setLocation("/recharge")}>
          <div className="flex justify-between items-end mb-2 cursor-pointer">
            <p className="text-sm font-medium text-white/80">当前话费余额</p>
            <span className="px-2 py-1 rounded-lg bg-primary/20 text-primary-foreground text-xs font-semibold border border-primary/30">
              预付费
            </span>
          </div>
          <div className="flex items-baseline gap-2 mb-6 cursor-pointer">
            <h1 className="text-5xl font-black tracking-tight font-heading">2,450</h1>
            <span className="text-lg font-medium text-white/70 mb-1">DZD</span>
          </div>
        </div>
      </div>

      {/* Overlapping Quick Actions */}
      <div className="px-4 -mt-16 relative z-20">
        <div className="glass bg-white rounded-3xl p-4 shadow-xl flex justify-between gap-2">
          <Link href="/recharge">
            <a className="flex-1 flex flex-col items-center justify-center py-2 gap-2 group">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <CreditCard className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold">充值缴费</span>
            </a>
          </Link>
          <Link href="/plans">
            <a className="flex-1 flex flex-col items-center justify-center py-2 gap-2 group">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Zap className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold">购买套餐</span>
            </a>
          </Link>
          <button 
            onClick={() => setLocation("/support")}
            className="flex-1 flex flex-col items-center justify-center py-2 gap-2 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <span className="text-xs font-semibold">紧急救助</span>
          </button>
        </div>
      </div>

      <div className="px-4 mt-8 space-y-6">
        {/* Usage Card */}
        <section>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold">我的用量</h3>
            <Link href="/plans">
              <a className="text-sm font-semibold text-primary flex items-center">
                详情 <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </Link>
          </div>
          
          <div className="bg-white rounded-3xl p-5 shadow-sm border border-border cursor-pointer hover:border-primary/50 transition-colors" onClick={() => setLocation("/plans")}>
            <div className="flex justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-green-100 rounded-lg text-green-600">
                  <Activity className="w-4 h-4" />
                </div>
                <span className="font-semibold text-sm">PixX 1000 套餐流量</span>
              </div>
              <span className="text-xs font-medium text-muted-foreground">剩余 3 天</span>
            </div>
            
            <div className="flex items-end justify-between mt-4 mb-3">
              <div>
                <span className="text-3xl font-bold font-heading text-primary">12.5</span>
                <span className="text-muted-foreground text-sm ml-1 font-medium">GB</span>
              </div>
              <div className="text-right">
                <span className="text-xs text-muted-foreground">总计 40 GB</span>
              </div>
            </div>
            
            <Progress value={30} className="h-2.5 bg-muted" indicatorClassName="bg-primary" />
            
            <div className="mt-4 pt-4 border-t border-border flex justify-between">
              <div className="text-center">
                <p className="text-xs text-muted-foreground mb-1">通话</p>
                <p className="font-bold text-sm">无限制</p>
              </div>
              <div className="w-px bg-border"></div>
              <div className="text-center">
                <p className="text-xs text-muted-foreground mb-1">短信</p>
                <p className="font-bold text-sm">无限制</p>
              </div>
              <div className="w-px bg-border"></div>
              <div className="text-center">
                <p className="text-xs text-muted-foreground mb-1">国际</p>
                <p className="font-bold text-sm">500 DZD</p>
              </div>
            </div>
          </div>
        </section>

        {/* Promotions */}
        <section>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold">专享优惠</h3>
          </div>
          <div 
            className="relative rounded-3xl overflow-hidden shadow-sm h-40 cursor-pointer group"
            onClick={() => setLocation("/plans")}
          >
            <img src={banner1} alt="Promo" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent p-5 flex flex-col justify-center">
              <span className="px-2 py-1 bg-primary text-white text-[10px] font-bold rounded-md w-fit mb-2">HOT</span>
              <h4 className="text-white font-bold text-xl mb-1 leading-tight">5G 体验套餐<br/>限时半价</h4>
              <button className="mt-auto text-sm font-semibold text-white flex items-center w-fit group-hover:underline">
                立即办理 <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>
        </section>
        
        {/* Quick Services */}
        <section className="mb-8">
          <h3 className="text-lg font-bold mb-4">自助服务</h3>
          <div className="grid grid-cols-4 gap-4">
            {[
              { icon: Plus, label: "服务变更", color: "bg-purple-100 text-purple-600", path: "/plans" },
              { icon: ShieldAlert, label: "PUK码", color: "bg-red-100 text-red-600", path: "/support" },
              { icon: Star, label: "积分商城", color: "bg-yellow-100 text-yellow-600", path: "/profile" },
              { icon: CreditCard, label: "账单查询", color: "bg-blue-100 text-blue-600", path: "/profile" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <button 
                  onClick={() => setLocation(item.path)}
                  className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center hover:scale-105 transition-transform`}
                >
                  <item.icon className="w-6 h-6" />
                </button>
                <span className="text-[11px] font-medium text-center">{item.label}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}