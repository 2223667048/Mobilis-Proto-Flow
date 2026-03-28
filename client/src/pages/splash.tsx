import { useEffect } from "react";
import { useLocation } from "wouter";
import { Loader2 } from "lucide-react";

export default function Splash() {
  const [_, setLocation] = useLocation();

  useEffect(() => {
    // Simulate loading and check auth state
    const timer = setTimeout(() => {
      setLocation("/login");
    }, 2500);

    return () => clearTimeout(timer);
  }, [setLocation]);

  return (
    <div className="min-h-[100dvh] bg-gradient-primary flex flex-col items-center justify-center text-white p-6">
      <div className="flex-1 flex flex-col items-center justify-center animate-in fade-in zoom-in duration-700">
        <div className="w-24 h-24 bg-white rounded-[2rem] flex items-center justify-center shadow-xl mb-6">
          <span className="text-4xl font-black text-primary font-heading tracking-tighter">M</span>
        </div>
        <h1 className="text-4xl font-black tracking-tight mb-2">Mobilis</h1>
        <p className="text-primary-foreground/80 font-medium">Connecting You Everywhere</p>
      </div>
      
      <div className="h-24 flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-white/70" />
      </div>
    </div>
  );
}