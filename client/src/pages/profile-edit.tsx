import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Camera, CheckCircle2 } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { useLocation } from "wouter";
import avatar from "@/assets/avatar.png";

export default function ProfileEdit() {
  const { t } = useI18n();
  const [_, setLocation] = useLocation();
  const [isSaving, setIsSaving] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      setShowSuccess(true);
      setTimeout(() => setLocation("/profile"), 1500);
    }, 1000);
  };

  if (showSuccess) {
    return (
      <div className="min-h-[100dvh] bg-background flex flex-col items-center justify-center p-6 text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-500 animate-in zoom-in duration-500">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h1 className="text-2xl font-bold mb-2">{t.saveSuccess}</h1>
      </div>
    );
  }

  return (
    <div className="min-h-[100dvh] bg-background pb-8 flex flex-col">
      <Header title={t.editProfile} />
      
      <div className="px-6 mt-6 flex-1">
        <div className="flex justify-center mb-8 relative">
          <div className="w-28 h-28 rounded-full border-4 border-white shadow-lg overflow-hidden bg-muted relative">
            <img src={avatar} alt="User" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer">
              <Camera className="w-8 h-8 text-white" />
            </div>
          </div>
          <button className="absolute bottom-0 translate-x-10 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center border-4 border-white shadow-sm">
            <Camera className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold ml-1">{t.name}</label>
            <Input 
              defaultValue="Ahmed Yassine" 
              className="h-14 bg-white border-border rounded-2xl font-medium"
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-semibold ml-1">{t.phoneLabel}</label>
            <Input 
              value="+213 05 50 12 34 56" 
              readOnly
              className="h-14 bg-muted/50 border-transparent rounded-2xl font-medium text-muted-foreground"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold ml-1">{t.email}</label>
            <Input 
              type="email"
              defaultValue="ahmed.y@example.com" 
              className="h-14 bg-white border-border rounded-2xl font-medium"
            />
          </div>
        </div>

        <div className="mt-12">
          <Button 
            onClick={handleSave}
            disabled={isSaving}
            className="w-full h-14 rounded-2xl text-base font-semibold shadow-lg shadow-primary/25"
          >
            {isSaving ? "..." : t.save}
          </Button>
        </div>
      </div>
    </div>
  );
}