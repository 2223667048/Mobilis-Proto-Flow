import { useI18n } from "@/lib/i18n";
import { Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function LanguageSwitcher() {
  const { language, setLanguage } = useI18n();

  const languages = [
    { code: 'zh', label: '中文' },
    { code: 'fr', label: 'Français' },
    { code: 'ar', label: 'العربية' },
    { code: 'en', label: 'English' }
  ] as const;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="p-2 rounded-full hover:bg-muted/80 transition-colors flex items-center gap-1 text-sm font-medium">
          <Globe className="w-5 h-5" />
          <span className="uppercase">{language}</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-white/90 backdrop-blur-lg rounded-2xl border-border/50">
        {languages.map((lang) => (
          <DropdownMenuItem 
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`cursor-pointer rounded-xl my-1 ${language === lang.code ? 'bg-primary/10 text-primary font-bold' : ''}`}
          >
            {lang.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}