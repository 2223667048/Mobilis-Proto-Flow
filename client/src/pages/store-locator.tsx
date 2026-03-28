import { Header } from "@/components/layout/Header";
import { Search, MapPin, ChevronRight, Navigation } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useI18n } from "@/lib/i18n";
import mapImg from "@/assets/map.png";

export default function StoreLocator() {
  const { t } = useI18n();
  
  const mockStores = [
    { id: 1, name: "Mobilis HQ Branch", distance: "0.8 km", status: true, hours: "08:00 - 18:00" },
    { id: 2, name: "Mobilis Airport Store", distance: "5.2 km", status: true, hours: "24h" },
    { id: 3, name: "Mobilis Didouche Exp", distance: "2.1 km", status: false, hours: "09:00 - 17:00" }
  ];

  return (
    <div className="min-h-[100dvh] bg-background flex flex-col relative">
      <div className="absolute top-0 left-0 right-0 z-20">
         <Header title={t.storeLocator} />
      </div>

      <div className="relative flex-1 bg-muted/50 -mt-20">
        <div className="absolute inset-0 opacity-80 mix-blend-multiply pointer-events-none">
          <img src={mapImg} alt="Map" className="w-full h-full object-cover" />
        </div>
        
        {/* Map Pins */}
        <div className="absolute top-1/3 left-1/4 animate-bounce">
          <MapPin className="w-10 h-10 text-primary drop-shadow-md" fill="currentColor" />
        </div>
        <div className="absolute top-1/2 right-1/3">
          <MapPin className="w-8 h-8 text-primary/80 drop-shadow-md" />
        </div>
        
        {/* Current Location */}
        <div className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg ring-4 ring-blue-500/20"></div>
      </div>

      <div className="bg-white rounded-t-3xl -mt-6 relative z-10 p-6 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] flex flex-col max-h-[60vh]">
        <div className="w-12 h-1.5 bg-border rounded-full mx-auto mb-4 shrink-0"></div>
        
        <div className="relative mb-4 shrink-0">
          <Search className="absolute ltr:left-4 rtl:right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input 
            placeholder={t.searchStore} 
            className="ltr:pl-12 rtl:pr-12 h-12 bg-muted/50 rounded-2xl border-transparent"
          />
        </div>
        
        <div className="space-y-4 overflow-y-auto no-scrollbar pb-4 flex-1">
          {mockStores.map((store) => (
            <div key={store.id} className="p-4 rounded-2xl border border-border shadow-sm flex flex-col gap-3">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-bold mb-1">{store.name}</h4>
                  <div className="flex items-center gap-3 text-xs">
                    <span className={`px-1.5 py-0.5 rounded font-bold ${store.status ? 'bg-green-100 text-green-700' : 'bg-muted text-muted-foreground'}`}>
                      {store.status ? t.openStore : t.closedStore}
                    </span>
                    <span className="text-muted-foreground flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {store.distance}
                    </span>
                  </div>
                </div>
                <button className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Navigation className="w-4 h-4" />
                </button>
              </div>
              <div className="bg-muted/30 p-2 rounded-lg text-xs flex justify-between">
                <span className="text-muted-foreground">{t.hours}</span>
                <span className="font-medium">{store.hours}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}