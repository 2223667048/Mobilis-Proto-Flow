import { Link, useLocation } from "wouter";
import { Home, CreditCard, LayoutGrid, Headset, User } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function BottomNav() {
  const [location] = useLocation();
  const { t } = useI18n();

  const navItems = [
    { icon: Home, label: t.home, path: "/dashboard" },
    { icon: CreditCard, label: t.recharge, path: "/recharge" },
    { icon: LayoutGrid, label: t.plans, path: "/plans" },
    { icon: Headset, label: t.support, path: "/support" },
    { icon: User, label: t.profile, path: "/profile" },
  ];

  // Hide bottom nav on specific pages
  const hideNavRoutes = [
    '/', '/login', '/otp', '/signature', '/store-locator', 
    '/chatbot', '/notifications', '/profile/edit'
  ];
  
  if (hideNavRoutes.includes(location)) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-6 pt-2 bg-white/80 backdrop-blur-xl border-t border-border sm:absolute">
      <div className="flex justify-between items-center max-w-sm mx-auto">
        {navItems.map((item) => {
          const isActive = location === item.path;
          const Icon = item.icon;
          
          return (
            <Link key={item.path} href={item.path}>
              <a className="flex flex-col items-center justify-center w-16 gap-1 group">
                <div className={`p-2 rounded-2xl transition-all duration-300 ${isActive ? 'bg-primary/10 text-primary' : 'text-muted-foreground group-hover:bg-muted'}`}>
                  <Icon size={24} className={isActive ? 'fill-primary/20' : ''} strokeWidth={isActive ? 2.5 : 2} />
                </div>
                <span className={`text-[10px] font-medium transition-colors ${isActive ? 'text-primary' : 'text-muted-foreground'}`}>
                  {item.label}
                </span>
              </a>
            </Link>
          );
        })}
      </div>
    </div>
  );
}