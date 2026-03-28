import { Header } from "@/components/layout/Header";
import { Download, ChevronRight, FileText, Calendar } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export default function Bills() {
  const { t } = useI18n();
  
  const mockBills = [
    { month: "2026年 3月", amount: "2,450", status: "已结清", date: "03-01" },
    { month: "2026年 2月", amount: "3,100", status: "已结清", date: "02-01" },
    { month: "2026年 1月", amount: "1,850", status: "已结清", date: "01-01" }
  ];

  return (
    <div className="min-h-[100dvh] bg-background pb-8 flex flex-col">
      <Header title={t.billsInvoices} />
      
      <div className="px-4 mt-2">
        {/* Current Month Overview */}
        <div className="bg-primary text-white rounded-3xl p-6 shadow-lg mb-8 relative overflow-hidden">
           <div className="absolute right-0 bottom-0 w-32 h-32 bg-white/10 rounded-full blur-xl translate-x-1/4 translate-y-1/4"></div>
           <div className="relative z-10">
             <p className="text-white/80 text-sm mb-1">本月累计消费 (DZD)</p>
             <h2 className="text-4xl font-black font-heading mb-4">1,250</h2>
             
             <div className="flex gap-4 pt-4 border-t border-white/20">
                <div>
                  <p className="text-xs text-white/70">套餐扣费</p>
                  <p className="font-semibold">1,000</p>
                </div>
                <div>
                  <p className="text-xs text-white/70">额外业务</p>
                  <p className="font-semibold">250</p>
                </div>
             </div>
           </div>
        </div>

        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">历史账单</h2>
          <button className="text-sm font-semibold text-primary flex items-center gap-1">
            <Calendar className="w-4 h-4" /> 选择年份
          </button>
        </div>

        <div className="space-y-4">
          {mockBills.map((bill, i) => (
            <div key={i} className="bg-white rounded-2xl p-4 border border-border shadow-sm">
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center">
                    <FileText className="w-4 h-4" />
                  </div>
                  <span className="font-bold">{bill.month}</span>
                </div>
                <span className="font-bold text-lg font-heading">{bill.amount} <span className="text-xs text-muted-foreground font-sans">DZD</span></span>
              </div>
              <div className="flex justify-between items-center text-sm pt-3 border-t border-border">
                <span className="text-muted-foreground">出账日期: {bill.date}</span>
                <div className="flex gap-3">
                  <button className="text-primary font-semibold flex items-center gap-1 hover:underline">
                    <Download className="w-4 h-4" /> 下载 PDF
                  </button>
                  <button className="text-muted-foreground hover:text-foreground">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
