import { Header } from "@/components/layout/Header";
import { Shield, Bell, CreditCard, Key, Lock, Fingerprint, Eye, Globe } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Switch } from "@/components/ui/switch";
import { useLocation } from "wouter";

export default function Settings() {
  const { t } = useI18n();
  const [_, setLocation] = useLocation();

  return (
    <div className="min-h-[100dvh] bg-background pb-8 flex flex-col">
      <Header title={t.settings} />
      
      <div className="px-4 mt-2 space-y-6">
        
        {/* Account Security */}
        <section>
          <h3 className="text-sm font-bold text-muted-foreground ml-2 mb-3">{t.accSecurity}</h3>
          <div className="bg-white border border-border rounded-3xl overflow-hidden shadow-sm divide-y divide-border">
            <div className="p-4 flex justify-between items-center hover:bg-muted/50 transition-colors cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Key className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-semibold text-sm block">修改登录密码</span>
                  <span className="text-xs text-muted-foreground">上次修改: 3个月前</span>
                </div>
              </div>
            </div>
            <div className="p-4 flex justify-between items-center hover:bg-muted/50 transition-colors cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center">
                  <Lock className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-semibold text-sm block">充值支付密码</span>
                  <span className="text-xs text-muted-foreground">用于大额支付验证</span>
                </div>
              </div>
            </div>
            <div className="p-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center">
                  <Fingerprint className="w-5 h-5" />
                </div>
                <span className="font-semibold text-sm block">指纹/面容登录</span>
              </div>
              <Switch defaultChecked />
            </div>
          </div>
        </section>

        {/* Notifications & Privacy */}
        <section>
          <h3 className="text-sm font-bold text-muted-foreground ml-2 mb-3">偏好设置</h3>
          <div className="bg-white border border-border rounded-3xl overflow-hidden shadow-sm divide-y divide-border">
            <div className="p-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-yellow-50 text-yellow-600 flex items-center justify-center">
                  <Bell className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-semibold text-sm block">推送通知</span>
                  <span className="text-xs text-muted-foreground">接收账单及活动提醒</span>
                </div>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="p-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center">
                  <Eye className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-semibold text-sm block">隐藏余额显示</span>
                  <span className="text-xs text-muted-foreground">在首页默认隐藏金额</span>
                </div>
              </div>
              <Switch />
            </div>
            <div className="p-4 flex justify-between items-center hover:bg-muted/50 transition-colors cursor-pointer" onClick={() => {
              if(confirm("将返回登录页进行语言切换测试。")) {
                setLocation("/login");
              }
            }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center">
                  <Globe className="w-5 h-5" />
                </div>
                <span className="font-semibold text-sm block">多语言设置</span>
              </div>
              <span className="text-sm text-muted-foreground">中文 (ZH)</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
