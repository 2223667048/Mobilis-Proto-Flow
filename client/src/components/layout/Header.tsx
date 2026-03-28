import { ChevronLeft, Bell } from "lucide-react";
import { useLocation } from "wouter";

interface HeaderProps {
  title?: string;
  showBack?: boolean;
  transparent?: boolean;
  action?: React.ReactNode;
}

export function Header({ title, showBack = true, transparent = false, action }: HeaderProps) {
  const [_, setLocation] = useLocation();

  return (
    <header className={`px-4 pt-12 pb-4 flex items-center justify-between sticky top-0 z-40 transition-colors ${transparent ? 'bg-transparent text-white' : 'bg-white/80 backdrop-blur-md text-foreground'}`}>
      <div className="w-10">
        {showBack && (
          <button 
            onClick={() => window.history.back()}
            className={`p-2 -ml-2 rounded-full transition-colors ${transparent ? 'hover:bg-white/20' : 'hover:bg-muted'}`}
          >
            <ChevronLeft size={24} />
          </button>
        )}
      </div>
      
      {title && (
        <h1 className="text-lg font-bold font-heading flex-1 text-center">
          {title}
        </h1>
      )}
      
      <div className="w-10 flex justify-end">
        {action ? action : (
          <button className={`p-2 -mr-2 rounded-full transition-colors relative ${transparent ? 'hover:bg-white/20' : 'hover:bg-muted'}`}>
            <Bell size={22} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-destructive rounded-full border border-white"></span>
          </button>
        )}
      </div>
    </header>
  );
}