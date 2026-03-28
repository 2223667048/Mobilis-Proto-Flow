import { Link, useLocation } from "wouter";
import { Header } from "@/components/layout/Header";
import { Plus, ArrowRight, Zap, Gift, ShieldAlert, CreditCard, Activity, Star, Bell } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { useI18n } from "@/lib/i18n";
import banner1 from "@/assets/banner1.png";
import avatar from "@/assets/avatar.png";

export default function Dashboard() {
  const [_, setLocation] = useLocation();
  const { t } = useI18n();

  return (
    <div className="min-h-[100dvh] bg-background pb-28">
      <div className="bg-secondary rounded-b-[2.5rem] pt-6 pb-24 px-4 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/20 rounded-full blur-2xl translate-y-1/3 -translate-x-1/4"></div>

        <div className="flex justify-between items-center mb-8 relative z-10 pt-4">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => setLocation("/profile")}>
            <div className="w-12 h-12 rounded-full border-2 border-white/20 overflow-hidden bg-white/10 group-hover:border-white/50 transition-colors">
              <img src={avatar} alt="User" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-xs text-white/70 font-medium">{t.goodMorning}</p>
              <h2 className="text-base font-bold group-hover:text-primary-100 transition-colors">Ahmed Yassine</h2>
            </div>
          </div>
          <button 
            onClick={() => setLocation("/notifications")}
            className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/10 hover:bg-white/20 transition-colors relative"
          >
            <Bell className="w-5 h-5 text-white" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-destructive rounded-full border border-secondary"></span>
          </button>
        </div>

        <div className="relative z-10 cursor-pointer group" onClick={() => setLocation("/recharge")}>
          <div className="flex justify-between items-end mb-2">
            <p className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">{t.currentBalance}</p>
            <span className="px-2 py-1 rounded-lg bg-primary/20 text-primary-foreground text-xs font-semibold border border-primary/30">
              {t.prepaid}
            </span>
          </div>
          <div className="flex items-baseline gap-2 mb-6 group-hover:scale-[1.02] transform origin-left transition-transform">
            <h1 className="text-5xl font-black tracking-tight font-heading">2,450</h1>
            <span className="text-lg font-medium text-white/70 mb-1">{t.dzd}</span>
          </div>
        </div>
      </div>

      <div className="px-4 -mt-16 relative z-20">
        <div className="glass bg-white rounded-3xl p-4 shadow-xl flex justify-between gap-2">
          <Link href="/transfer-balance">
            <a className="flex-1 flex flex-col items-center justify-center py-2 gap-2 group cursor-pointer">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <CreditCard className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold text-center leading-tight hover:underline">余额代付</span>
            </a>
          </Link>
          <Link href="/data-addons">
            <a className="flex-1 flex flex-col items-center justify-center py-2 gap-2 group cursor-pointer">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Zap className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold text-center leading-tight hover:underline">流量包</span>
            </a>
          </Link>
          <button 
            onClick={() => setLocation("/support")}
            className="flex-1 flex flex-col items-center justify-center py-2 gap-2 group cursor-pointer"
          >
            <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <span className="text-xs font-semibold text-center leading-tight hover:underline">{t.emergency}</span>
          </button>
        </div>
      </div>

      <div className="px-4 mt-8 space-y-6">
        <section>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold">{t.myUsage}</h3>
            <Link href="/plans">
              <a className="text-sm font-semibold text-primary flex items-center hover:underline">
                {t.details} <ArrowRight className="w-4 h-4 ltr:ml-1 rtl:mr-1 rtl:rotate-180" />
              </a>
            </Link>
          </div>
          
          <div className="bg-white rounded-3xl p-5 shadow-sm border border-border cursor-pointer hover:border-primary/50 transition-colors group" onClick={() => setLocation("/plans")}>
            <div className="flex justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-green-100 rounded-lg text-green-600">
                  <Activity className="w-4 h-4" />
                </div>
                <span className="font-semibold text-sm group-hover:text-primary transition-colors">PixX 1000 {t.planData}</span>
              </div>
              <span className="text-xs font-medium text-muted-foreground">{t.remainingDays}</span>
            </div>
            
            <div className="flex items-end justify-between mt-4 mb-3">
              <div>
                <span className="text-3xl font-bold font-heading text-primary">12.5</span>
                <span className="text-muted-foreground text-sm mx-1 font-medium">GB</span>
              </div>
              <div className="text-right">
                <span className="text-xs text-muted-foreground">{t.total} 40 GB</span>
              </div>
            </div>
            
            <Progress value={30} className="h-2.5 bg-muted" indicatorClassName="bg-primary" />
            
            <div className="mt-4 pt-4 border-t border-border flex justify-between">
              <div className="text-center">
                <p className="text-xs text-muted-foreground mb-1">{t.calls}</p>
                <p className="font-bold text-sm">{t.unlimited}</p>
              </div>
              <div className="w-px bg-border"></div>
              <div className="text-center">
                <p className="text-xs text-muted-foreground mb-1">{t.sms}</p>
                <p className="font-bold text-sm">{t.unlimited}</p>
              </div>
              <div className="w-px bg-border"></div>
              <div className="text-center">
                <p className="text-xs text-muted-foreground mb-1">{t.international}</p>
                <p className="font-bold text-sm flex gap-1">500<span className="text-[10px]">DZD</span></p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold">{t.promotions}</h3>
          </div>
          <div 
            className="relative rounded-3xl overflow-hidden shadow-sm h-40 cursor-pointer group"
            onClick={() => setLocation("/plans")}
          >
            <img src={banner1} alt="Promo" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent p-5 flex flex-col justify-center">
              <span className="px-2 py-1 bg-primary text-white text-[10px] font-bold rounded-md w-fit mb-2">{t.hot}</span>
              <h4 className="text-white font-bold text-xl mb-1 leading-tight whitespace-pre-line group-hover:text-primary-100 transition-colors">{t.promoTitle}</h4>
              <button className="mt-auto text-sm font-semibold text-white flex items-center w-fit group-hover:underline">
                {t.promoAction} <ArrowRight className="w-4 h-4 ltr:ml-1 rtl:mr-1 rtl:rotate-180" />
              </button>
            </div>
          </div>
        </section>
        
        <section className="mb-8">
          <h3 className="text-lg font-bold mb-4">{t.selfService}</h3>
          <div className="grid grid-cols-4 gap-4">
            {[
              { icon: Plus, label: t.changeService, color: "bg-purple-100 text-purple-600", path: "/plans" },
              { icon: ShieldAlert, label: t.pukCode, color: "bg-red-100 text-red-600", path: "/puk-code" },
              { icon: Star, label: t.pointsMall, color: "bg-yellow-100 text-yellow-600", path: "/points-mall" },
              { icon: CreditCard, label: t.billQuery, color: "bg-blue-100 text-blue-600", path: "/bills" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <button 
                  onClick={() => setLocation(item.path)}
                  className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center hover:scale-110 transition-transform shadow-sm`}
                >
                  <item.icon className="w-6 h-6" />
                </button>
                <span className="text-[11px] font-medium text-center leading-tight hover:underline cursor-pointer" onClick={() => setLocation(item.path)}>{item.label}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}