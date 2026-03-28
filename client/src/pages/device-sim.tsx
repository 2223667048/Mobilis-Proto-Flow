import { Header } from "@/components/layout/Header";
import { Smartphone, SimCard as SimCardIcon, Settings2, Plus, QrCode } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export default function DeviceSim() {
  const { t } = useI18n();

  return (
    <div className="min-h-[100dvh] bg-background pb-8 flex flex-col">
      <Header title={t.deviceSim} />
      
      <div className="px-4 mt-2">
        <h2 className="text-lg font-bold mb-4">我的设备</h2>
        <div className="bg-white rounded-3xl p-5 border border-border shadow-sm mb-6 flex items-center gap-4">
          <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center">
            <Smartphone className="w-8 h-8 text-foreground" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-lg">iPhone 14 Pro</h3>
            <p className="text-sm text-muted-foreground">当前使用设备</p>
          </div>
          <button className="text-primary text-sm font-semibold hover:underline">
            详情
          </button>
        </div>

        <h2 className="text-lg font-bold mb-4">SIM 卡管理</h2>
        
        {/* Physical SIM */}
        <div className="bg-white rounded-3xl p-5 border border-border shadow-sm mb-4">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center">
                <SimCardIcon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold">物理 SIM 卡</h3>
                <p className="text-xs text-muted-foreground">+213 05 50 12 34 56</p>
              </div>
            </div>
            <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-lg">使用中</span>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-border">
            <button className="flex flex-col items-center justify-center p-3 hover:bg-muted rounded-xl transition-colors text-sm font-medium gap-2">
              <Settings2 className="w-5 h-5 text-muted-foreground" />
              PIN/PUK码
            </button>
            <button className="flex flex-col items-center justify-center p-3 hover:bg-muted rounded-xl transition-colors text-sm font-medium gap-2 text-destructive">
              挂失/停机
            </button>
          </div>
        </div>

        {/* eSIM */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-3xl p-5 shadow-lg mb-6 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-32 h-32 bg-primary/20 rounded-full blur-2xl translate-x-1/3 -translate-y-1/3"></div>
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <QrCode className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold">eSIM 数字卡</h3>
                  <p className="text-xs text-white/70">未激活</p>
                </div>
              </div>
            </div>
            <p className="text-sm text-white/80 mb-4 leading-relaxed">
              将您的物理卡转换为 eSIM，无需实体卡槽，支持多号码随时切换。
            </p>
            <button className="w-full bg-primary text-white font-bold py-3 rounded-xl hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
              <Plus className="w-5 h-5" /> 立即开通 eSIM
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
