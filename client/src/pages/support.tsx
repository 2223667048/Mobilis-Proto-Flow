import { Header } from "@/components/layout/Header";
import { MessageSquareText, Phone, MapPin, FileQuestion, ChevronRight, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function Support() {
  const faqs = [
    "如何查询我的 PUK 码？",
    "套餐内的流量用完了怎么办？",
    "如何为他人代充值？",
    "国际漫游服务如何开通？",
    "eSIM 卡如何激活？"
  ];

  return (
    <div className="min-h-[100dvh] bg-background pb-28">
      <Header title="帮助与客服" />
      
      <div className="px-4 mt-2">
        <h1 className="text-2xl font-bold mb-2">您好，需要什么帮助？</h1>
        <p className="text-muted-foreground text-sm mb-6">我们随时为您提供支持</p>
        
        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input 
            placeholder="搜索问题或关键词..." 
            className="pl-12 h-14 bg-white rounded-2xl border-border shadow-sm text-base"
          />
        </div>

        <div className="grid grid-cols-2 gap-4 mb-8">
          <button className="bg-white p-4 rounded-3xl border border-border shadow-sm flex flex-col items-center justify-center gap-3 hover:border-primary transition-colors">
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center">
              <MessageSquareText className="w-6 h-6" />
            </div>
            <div className="text-center">
              <span className="font-semibold block text-sm">在线客服</span>
              <span className="text-[10px] text-muted-foreground">7x24小时</span>
            </div>
          </button>
          <button className="bg-white p-4 rounded-3xl border border-border shadow-sm flex flex-col items-center justify-center gap-3 hover:border-primary transition-colors">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center">
              <Phone className="w-6 h-6" />
            </div>
            <div className="text-center">
              <span className="font-semibold block text-sm">电话支持</span>
              <span className="text-[10px] text-muted-foreground">拨打 666 或 888</span>
            </div>
          </button>
        </div>

        <div className="bg-white border border-border rounded-3xl overflow-hidden mb-8 shadow-sm">
          <div className="p-4 border-b border-border bg-muted/30 flex items-center gap-2">
            <FileQuestion className="w-5 h-5 text-primary" />
            <h3 className="font-bold">常见问题 (FAQ)</h3>
          </div>
          <div className="divide-y divide-border">
            {faqs.map((faq, i) => (
              <button key={i} className="w-full text-left p-4 text-sm font-medium flex justify-between items-center hover:bg-muted/50 transition-colors">
                {faq}
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
              </button>
            ))}
          </div>
          <button className="w-full p-4 text-sm font-semibold text-primary text-center hover:bg-muted/30 transition-colors">
            查看更多问题
          </button>
        </div>

        <button className="w-full bg-secondary text-white p-4 rounded-3xl flex items-center justify-between hover:bg-secondary/90 transition-colors">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="text-left">
              <span className="font-bold block text-sm">查找附近的营业厅</span>
              <span className="text-xs text-white/70">查询网点位置与营业时间</span>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-white/70" />
        </button>
      </div>
    </div>
  );
}