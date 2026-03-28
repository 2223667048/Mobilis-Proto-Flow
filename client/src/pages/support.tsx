import { Header } from "@/components/layout/Header";
import { MessageSquareText, Phone, MapPin, FileQuestion, ChevronRight, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function Support() {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "如何查询我的 PUK 码？",
      a: "您可以在APP的'我的主页 -> 我的设备与 SIM -> 查看 PUK 码'中找到它。或者使用其他手机拨打客服热线并提供您的身份信息。"
    },
    {
      q: "套餐内的流量用完了怎么办？",
      a: "如果套餐流量用完，您可以直接在APP内购买叠加包或者升级到流量更多的套餐。超出套餐的流量将按照标准资费扣除话费余额。"
    },
    {
      q: "如何为他人代充值？",
      a: "在充值页面，您可以直接修改充值号码为需要代充值的手机号，然后选择相应的金额进行支付即可。"
    },
    {
      q: "国际漫游服务如何开通？",
      a: "您可以在'套餐'页面的漫游专区自助开通国际漫游服务。我们建议您在出国前至少一天开通并确认。"
    },
    {
      q: "eSIM 卡如何激活？",
      a: "前往营业厅或在APP的设备管理中申请eSIM二维码，使用支持eSIM的手机扫描该二维码即可完成配置与激活。"
    }
  ];

  const filteredFaqs = faqs.filter(faq => faq.q.includes(searchQuery));

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
            className="pl-12 h-14 bg-white rounded-2xl border-border shadow-sm text-base focus-visible:ring-primary"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-2 gap-4 mb-8">
          <button 
            className="bg-white p-4 rounded-3xl border border-border shadow-sm flex flex-col items-center justify-center gap-3 hover:border-primary hover:bg-primary/5 transition-colors group"
            onClick={() => alert("正在连接在线客服...")}
          >
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <MessageSquareText className="w-6 h-6" />
            </div>
            <div className="text-center">
              <span className="font-semibold block text-sm">在线客服</span>
              <span className="text-[10px] text-muted-foreground group-hover:text-primary/70">7x24小时</span>
            </div>
          </button>
          <button 
            className="bg-white p-4 rounded-3xl border border-border shadow-sm flex flex-col items-center justify-center gap-3 hover:border-blue-500 hover:bg-blue-50 transition-colors group"
            onClick={() => alert("将拨打客服热线: 666")}
          >
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <Phone className="w-6 h-6" />
            </div>
            <div className="text-center">
              <span className="font-semibold block text-sm">电话支持</span>
              <span className="text-[10px] text-muted-foreground group-hover:text-blue-500/70">拨打 666 或 888</span>
            </div>
          </button>
        </div>

        <div className="bg-white border border-border rounded-3xl overflow-hidden mb-8 shadow-sm">
          <div className="p-4 border-b border-border bg-muted/30 flex items-center gap-2">
            <FileQuestion className="w-5 h-5 text-primary" />
            <h3 className="font-bold">常见问题 (FAQ)</h3>
          </div>
          <div className="divide-y divide-border">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, i) => (
                <div key={i} className="w-full text-left">
                  <button 
                    className="w-full p-4 text-sm font-medium flex justify-between items-center hover:bg-muted/50 transition-colors"
                    onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  >
                    <span className="pr-4">{faq.q}</span>
                    <ChevronRight className={`w-4 h-4 text-muted-foreground shrink-0 transition-transform duration-300 ${expandedFaq === i ? 'rotate-90' : ''}`} />
                  </button>
                  {expandedFaq === i && (
                    <div className="p-4 pt-0 text-sm text-muted-foreground bg-muted/20 border-t border-border/50 animate-in slide-in-from-top-2 duration-200">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="p-8 text-center text-muted-foreground text-sm">
                未找到匹配的问题
              </div>
            )}
          </div>
          {!searchQuery && (
            <button className="w-full p-4 text-sm font-semibold text-primary text-center hover:bg-muted/30 transition-colors">
              查看更多问题
            </button>
          )}
        </div>

        <button 
          className="w-full bg-secondary text-white p-4 rounded-3xl flex items-center justify-between hover:bg-secondary/90 transition-colors group"
          onClick={() => alert("将打开地图应用查找附近的营业厅...")}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="text-left">
              <span className="font-bold block text-sm">查找附近的营业厅</span>
              <span className="text-xs text-white/70">查询网点位置与营业时间</span>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-white/70 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}