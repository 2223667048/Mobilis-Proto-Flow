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
        <div className="min-h-screen bg-neutral-900 flex items-center justify-center p-4 sm:p-0 transition-all duration-300">
          <Router />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;