import { Link, useLocation } from "wouter";
import { Home, CreditCard, LayoutGrid, Headset, User } from "lucide-react";

export function BottomNav() {
  const [location] = useLocation();

  const navItems = [
    { icon: Home, label: "首页", path: "/dashboard" },
    { icon: CreditCard, label: "充值", path: "/recharge" },
    { icon: LayoutGrid, label: "套餐", path: "/plans" },
    { icon: Headset, label: "客服", path: "/support" },
    { icon: User, label: "我的", path: "/profile" },
  ];

  // Hide bottom nav on specific pages
  if (['/', '/login', '/otp'].includes(location)) {
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