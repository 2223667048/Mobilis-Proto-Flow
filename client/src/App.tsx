import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import Splash from "@/pages/splash";
import Login from "@/pages/login";
import OTP from "@/pages/otp";
import Dashboard from "@/pages/dashboard";
import Recharge from "@/pages/recharge";
import Plans from "@/pages/plans";
import Support from "@/pages/support";
import Profile from "@/pages/profile";
import Signature from "@/pages/signature";
import StoreLocator from "@/pages/store-locator";
import Chatbot from "@/pages/chatbot";
import Notifications from "@/pages/notifications";
import ProfileEdit from "@/pages/profile-edit";

// 新增的二级页面组件
import DeviceSim from "@/pages/device-sim";
import Bills from "@/pages/bills";
import PointsMall from "@/pages/points-mall";
import Settings from "@/pages/settings";

// 补充的新交互页面
import PukCode from "@/pages/puk-code";
import TransferBalance from "@/pages/transfer-balance";
import DataAddons from "@/pages/data-addons";

import { BottomNav } from "@/components/layout/BottomNav";

function Router() {
  return (
    <div className="app-shell">
      <div className="flex-1 overflow-y-auto no-scrollbar relative">
        <Switch>
          <Route path="/" component={Splash} />
          <Route path="/login" component={Login} />
          <Route path="/otp" component={OTP} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/recharge" component={Recharge} />
          <Route path="/plans" component={Plans} />
          <Route path="/support" component={Support} />
          <Route path="/profile" component={Profile} />
          
          <Route path="/signature" component={Signature} />
          <Route path="/store-locator" component={StoreLocator} />
          <Route path="/chatbot" component={Chatbot} />
          <Route path="/notifications" component={Notifications} />
          <Route path="/profile/edit" component={ProfileEdit} />
          
          <Route path="/device-sim" component={DeviceSim} />
          <Route path="/bills" component={Bills} />
          <Route path="/points-mall" component={PointsMall} />
          <Route path="/settings" component={Settings} />
          
          <Route path="/puk-code" component={PukCode} />
          <Route path="/transfer-balance" component={TransferBalance} />
          <Route path="/data-addons" component={DataAddons} />
          
          <Route component={NotFound} />
        </Switch>
      </div>
      <BottomNav />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-[100dvh] bg-neutral-900 flex items-center justify-center sm:p-4">
          <Router />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;