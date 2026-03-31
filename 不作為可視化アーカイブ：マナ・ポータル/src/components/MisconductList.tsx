import React, { useState } from "react";
import { Search, Filter, ChevronRight, AlertTriangle, ShieldCheck, FileText, ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@/src/lib/utils";
import { useNavigate } from "react-router-dom";

interface ArchiveEntry {
  id: string;
  title: string;
  category: "行政不作為" | "公務員不祥事" | "考察・調査" | "行動ログ";
  status: "公開中" | "検証中" | "アーカイブ";
  date: string;
  summary: string;
  inactionScore: number; // 0-100, 不作為の数値化
  link?: string;
}

const MOCK_DATA: ArchiveEntry[] = [
  {
    id: "INA-2026-001",
    title: "京都市右京区生活福祉課による法治主義の放棄",
    category: "行政不作為",
    status: "公開中",
    date: "2026-02-09",
    summary: "係長による「法律で仕事をしていない」との自白。生存権侵害（ガス停止等）を伴う深刻な不作為の記録。",
    inactionScore: 98,
    link: "/case-file-001",
  },
  {
    id: "INA-2026-002",
    title: "〇〇市における生活保護申請の不適切な受理拒否（水際作戦）",
    category: "行政不作為",
    status: "公開中",
    date: "2026-03-15",
    summary: "申請者の困窮状態を無視し、窓口で追い返す「水際作戦」が常態化。行政の不作為により生存権が脅かされている。",
    inactionScore: 85,
  },
  {
    id: "MIS-2026-002",
    title: "〇〇県職員による公金横領および証拠隠滅の疑い",
    category: "公務員不祥事",
    status: "検証中",
    date: "2026-02-28",
    summary: "会計担当職員が数年にわたり公金を私的流用。内部監査の不備を突いた組織的な不祥事の可能性。",
    inactionScore: 70,
  },
  {
    id: "LOG-2026-003",
    title: "情報公開請求：環境局の廃棄物処理プロセスに関する回答拒否",
    category: "考察・調査",
    status: "公開中",
    date: "2026-01-10",
    summary: "法的に公開義務がある情報の隠蔽。行政の透明性を著しく損なう不作為の記録。",
    inactionScore: 65,
  },
  {
    id: "ACT-2026-004",
    title: "不作為是正を求める住民監査請求の提出",
    category: "行動ログ",
    status: "公開中",
    date: "2026-03-22",
    summary: "行政の怠慢による予算の浪費を指摘。法的な手段を用いた具体的な是正行動の記録。",
    inactionScore: 40,
  },
];

export function MisconductList() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<string>("すべて");
  const navigate = useNavigate();

  const filteredData = MOCK_DATA.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase()) || 
                         item.id.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "すべて" || item.category === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-zinc-900/50 p-4 border border-zinc-800 rounded-lg">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
          <input
            type="text"
            placeholder="ID、タイトル、不祥事内容で検索..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-zinc-950 border border-zinc-800 rounded-md py-2 pl-10 pr-4 text-sm text-zinc-300 focus:outline-none focus:border-orange-500/50 transition-colors"
          />
        </div>
        <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
          <Filter className="w-4 h-4 text-zinc-500 mr-2 shrink-0" />
          {["すべて", "行政不作為", "公務員不祥事", "考察・調査", "行動ログ"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "px-3 py-1 text-xs rounded-full border transition-all whitespace-nowrap",
                filter === cat 
                  ? "bg-orange-600/20 border-orange-600 text-orange-500" 
                  : "bg-zinc-800 border-zinc-700 text-zinc-400 hover:bg-zinc-700"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-4">
        {filteredData.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.05 }}
            onClick={() => item.link && navigate(item.link)}
            className={cn(
              "group bg-zinc-900 border border-zinc-800 hover:border-zinc-700 rounded-lg p-5 transition-all relative overflow-hidden",
              item.link ? "cursor-pointer" : "cursor-default"
            )}
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">{item.id}</span>
                  <div className="flex items-center gap-1 bg-zinc-950 px-2 py-0.5 rounded border border-zinc-800">
                    <span className="text-[9px] text-zinc-500 font-mono uppercase">不作為スコア:</span>
                    <span className={cn(
                      "text-[10px] font-bold font-mono",
                      item.inactionScore >= 80 ? "text-red-500" :
                      item.inactionScore >= 60 ? "text-orange-500" :
                      "text-zinc-400"
                    )}>
                      {item.inactionScore}
                    </span>
                  </div>
                  {item.link && <ExternalLink className="w-3 h-3 text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />}
                </div>
                <h3 className="text-lg font-medium text-zinc-100 group-hover:text-orange-500 transition-colors italic serif">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-400 line-clamp-2 max-w-2xl leading-relaxed">
                  {item.summary}
                </p>
              </div>

              <div className="flex flex-row md:flex-col items-center md:items-end justify-between gap-2 shrink-0">
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-500">
                  <FileText className="w-3 h-3" />
                  {item.date}
                </div>
                <div className={cn(
                  "flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded border",
                  item.status === "検証中" ? "text-yellow-500 border-yellow-500/30 bg-yellow-500/5" :
                  item.status === "公開中" ? "text-green-500 border-green-500/30 bg-green-500/5" :
                  "text-zinc-500 border-zinc-700 bg-zinc-800"
                )}>
                  {item.status === "検証中" ? <AlertTriangle className="w-3 h-3" /> : <ShieldCheck className="w-3 h-3" />}
                  {item.status}
                </div>
              </div>
            </div>
            
            <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
              <ChevronRight className="w-5 h-5 text-zinc-600" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
