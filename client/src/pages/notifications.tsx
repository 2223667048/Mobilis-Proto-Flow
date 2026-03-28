import { Header } from "@/components/layout/Header";
import { Bell, Gift, CreditCard, CheckCircle2 } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { useState } from "react";

export default function Notifications() {
  const { t } = useI18n();
  const [activeTab, setActiveTab] = useState('all');

  const notifications = [
    { id: 1, type: "system", icon: CreditCard, color: "text-blue-500", bg: "bg-blue-50", title: t.successTitle, desc: "Vous avez rechargé 1000 DZD avec succès.", time: "10:24 AM", unread: true },
    { id: 2, type: "promo", icon: Gift, color: "text-orange-500", bg: "bg-orange-50", title: t.promoTitle.replace('\n', ' '), desc: "Obtenez 50% de réduction sur votre prochain forfait", time: "Hier", unread: true },
    { id: 3, type: "system", icon: CheckCircle2, color: "text-green-500", bg: "bg-green-50", title: t.signSuccessTitle, desc: "Contrat électronique signé et validé.", time: "Lun", unread: false },
  ];

  return (
    <div className="min-h-[100dvh] bg-background">
      <Header title={t.notifTitle} />
      
      <div className="px-4 mt-2">
        <div className="flex gap-2 mb-6">
          <button 
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${activeTab === 'all' ? 'bg-foreground text-background' : 'bg-muted text-muted-foreground'}`}
          >
            {t.all}
          </button>
          <button 
            onClick={() => setActiveTab('unread')}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${activeTab === 'unread' ? 'bg-foreground text-background' : 'bg-muted text-muted-foreground'}`}
          >
            {t.unread} (2)
          </button>
        </div>

        <div className="space-y-4">
          {notifications.map((notif) => (
            <div key={notif.id} className={`bg-white p-4 rounded-3xl border border-border shadow-sm flex gap-4 ${notif.unread ? 'border-primary/30 bg-primary/5' : ''}`}>
              <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${notif.bg} ${notif.color}`}>
                <notif.icon className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-bold text-sm leading-tight pr-4">{notif.title}</h4>
                  <span className="text-[10px] text-muted-foreground whitespace-nowrap">{notif.time}</span>
                </div>
                <p className="text-xs text-muted-foreground">{notif.desc}</p>
                <div className="mt-2 text-[10px] font-semibold">
                  <span className="bg-muted px-2 py-1 rounded text-muted-foreground">
                    {notif.type === 'system' ? t.notifSysMsg : t.notifPromoMsg}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}