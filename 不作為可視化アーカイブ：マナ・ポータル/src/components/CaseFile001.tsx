import React from "react";
import { motion } from "motion/react";

export function CaseFile001() {
  return (
    <div className="bg-[#fdf9f4] text-[#1c1c19] font-sans min-h-screen p-6 md:p-12 rounded-2xl border border-zinc-200">
      <header className="max-w-4xl mx-auto mb-16 border-l-8 border-[#b02d21] pl-8">
        <p className="text-xs font-bold text-[#b02d21] tracking-[0.4em] uppercase mb-4">Urgent Indictment Log #001</p>
        <h1 className="text-4xl md:text-5xl font-serif font-black leading-tight mb-6 text-[#00000b]">
          京都市右京区生活福祉課・係長による<br/>「法治主義の放棄」と生存権侵害の記録
        </h1>
        <div className="flex gap-4">
          <span className="bg-[#b02d21] text-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest">法務局報告済み</span>
          <span className="bg-[#00000b] text-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest">証拠自白あり</span>
        </div>
      </header>
      
      <main className="max-w-4xl mx-auto space-y-20">
        <section>
          <h2 className="text-sm font-bold text-[#b02d21] tracking-widest uppercase mb-8 border-b border-[#00000b]/10 pb-2">
            【事実経過】係長による自白の記録（2026.02.09）
          </h2>
          <div className="space-y-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-12 gap-6"
            >
              <div className="md:col-span-7 bg-white p-8 border-0 shadow-sm">
                <p className="text-xs text-[#b02d21] font-bold mb-2">係長の発言内容</p>
                <p className="text-xl font-serif font-bold leading-relaxed text-[#00000b]">「法律で仕事をしていない」</p>
              </div>
              <div className="md:col-span-5 flex flex-col justify-center">
                <p className="text-xs font-bold uppercase tracking-widest mb-2 opacity-50">法的評価</p>
                <p className="text-sm leading-relaxed">憲法99条および地方公務員法32条に違反。法に基づかない恣意的な運用の自白。</p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-12 gap-6"
            >
              <div className="md:col-span-7 bg-[#00000b] text-white p-8 border-0 shadow-lg">
                <p className="text-xs text-[#b02d21] font-bold mb-2">外部機関への通報に対する回答</p>
                <p className="text-xl font-serif font-bold leading-relaxed">「はいはい、どこにでも行ってください」</p>
              </div>
              <div className="md:col-span-5 flex flex-col justify-center">
                <p className="text-xs font-bold uppercase tracking-widest mb-2 opacity-50">法的評価</p>
                <p className="text-sm leading-relaxed">説明責任の放棄。外部機関への通報について行政側が自ら承認した事実を記録。</p>
              </div>
            </motion.div>
          </div>
        </section>
        
        <section className="bg-white p-10 border-0 shadow-sm">
          <h2 className="text-sm font-bold text-[#b02d21] tracking-widest uppercase mb-6">現在進行中の権利侵害と実害</h2>
          <ul className="space-y-4 text-sm leading-loose">
            <li className="flex gap-4"><span className="text-[#b02d21] font-bold">●</span><span>ガス供給停止による生存権の侵害</span></li>
            <li className="flex gap-4"><span className="text-[#b02d21] font-bold">●</span><span>管理ミスによる通信遮断の危機（iPhone一括請求問題）</span></li>
          </ul>
        </section>
      </main>
      
      <footer className="mt-20 py-10 text-center opacity-40 text-[10px] tracking-widest uppercase">
        © 2026 PROJECT MANA | ALL RIGHTS RESERVED.
      </footer>
    </div>
  );
}
