import { Header } from "@/components/layout/Header";
import { User, Settings, Shield, Bell, CreditCard, ChevronRight, LogOut, Smartphone, Activity } from "lucide-react";
import avatar from "@/assets/avatar.png";
import { useLocation } from "wouter";
import { useI18n } from "@/lib/i18n";

export default function Profile() {
  const [_, setLocation] = useLocation();
  const { t } = useI18n();
  
  const menuGroups = [
    {
      title: t.accManagement,
      items: [
        { icon: User, label: t.personalInfo, path: "/profile/edit" },
        { icon: Smartphone, label: t.deviceSim, path: "#", value: t.esimActive },
        { icon: Activity, label: t.billsInvoices, path: "#" }
      ]
    },
    {
      title: t.settings,
      items: [
        { icon: Shield, label: t.accSecurity, path: "#" },
        { icon: Bell, label: t.notifSettings, path: "#" },
        { icon: CreditCard, label: t.payMethods, path: "#" },
        { icon: Settings, label: t.generalSettings, path: "#" }
      ]
    }
  ];

  return (
    <div className="min-h-[100dvh] bg-background pb-28">
      <Header title={t.profileTitle} showBack={false} />
      
      <div className="px-4 mt-2">
        <div 
          className="bg-white rounded-3xl p-5 border border-border shadow-sm mb-6 flex items-center gap-4 cursor-pointer hover:border-primary/50 transition-colors group"
          onClick={() => setLocation("/profile/edit")}
        >
          <div className="w-16 h-16 rounded-full border-2 border-primary/20 overflow-hidden bg-muted group-hover:border-primary transition-colors">
            <img src={avatar} alt="User" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold font-heading">Ahmed Yassine</h2>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-sm font-medium text-muted-foreground" dir="ltr">+213 05 50 12 34 56</span>
              <span className="px-1.5 py-0.5 bg-green-100 text-green-700 text-[10px] font-bold rounded">{t.verified}</span>
            </div>
          </div>
          <button className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors">
            <ChevronRight className="w-5 h-5 rtl:rotate-180" />
          </button>
        </div>

        <div className="bg-gradient-dark rounded-2xl p-5 mb-8 text-white relative overflow-hidden cursor-pointer group">
          <div className="absolute right-0 top-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/3 group-hover:bg-white/10 transition-colors"></div>
          <div className="flex justify-between items-center relative z-10">
            <div>
              <p className="text-xs text-white/70 mb-1">{t.memberLevel}</p>
              <h3 className="font-bold text-lg flex items-center gap-2">
                <span>{t.goldMember}</span>
              </h3>
            </div>
            <div className="text-right">
              <p className="text-xs text-white/70 mb-1">{t.pointsBalance}</p>
              <h3 className="font-bold text-lg text-yellow-400">12,450</h3>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {menuGroups.map((group, idx) => (
            <div key={idx}>
              <h3 className="text-sm font-bold text-muted-foreground mx-2 mb-3">{group.title}</h3>
              <div className="bg-white border border-border rounded-3xl overflow-hidden shadow-sm">
                <div className="divide-y divide-border">
                  {group.items.map((item, i) => (
                    <button 
                      key={i} 
                      className="w-full p-4 flex items-center gap-4 hover:bg-muted/50 transition-colors group"
                      onClick={() => item.path !== '#' && setLocation(item.path)}
                    >
                      <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground group-hover:text-primary transition-colors">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <span className="font-semibold text-sm flex-1 text-left">{item.label}</span>
                      {item.value && (
                        <span className="text-xs text-muted-foreground mx-2">{item.value}</span>
                      )}
                      <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:ltr:translate-x-1 group-hover:rtl:-translate-x-1 transition-all rtl:rotate-180" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <button 
          onClick={() => {
            if(confirm(t.logoutConfirm)) {
              setLocation("/login");
            }
          }}
          className="w-full mt-8 p-4 bg-red-50 text-red-600 rounded-3xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-red-100 transition-colors"
        >
          <LogOut className="w-4 h-4" />
          {t.logout}
        </button>
        
        <p className="text-center text-xs text-muted-foreground mt-8">
          {t.version}
        </p>
      </div>
    </div>
  );
}