import React from "react";
import { motion } from "motion/react";
import { Shield, Eye, Scale, Heart, Zap, Globe } from "lucide-react";

export function Manifesto() {
  const principles = [
    {
      icon: Eye,
      title: "不作為の数値化",
      description: "行政の怠慢や放置を単なる批判に留めず、客観的な「不作為スコア」として算出。データに基づいた可視化により、責任の所在を明確にします。",
    },
    {
      icon: Scale,
      title: "不祥事の網羅的記録",
      description: "組織的な不正から公務員個人の不祥事まで、散逸しがちなニュースをデータベース化。過去の事例を風化させず、再発防止の鏡とします。",
    },
    {
      icon: Shield,
      title: "個人の考察と行動の統合",
      description: "これは一人の人間による、社会への問いかけの記録です。市民運動や報道の素材として活用可能な、実効性のあるアーカイブを目指します。",
    },
    {
      icon: Globe,
      title: "透明性による抑止力",
      description: "「見られている」という事実こそが、最大の抑止力となる。私たちは情報の非対称性を解消し、権力の健全な行使を促します。",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-16 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-6"
      >
        <h1 className="text-5xl font-bold italic serif tracking-tight text-zinc-100">
          不作為可視化マニフェスト
        </h1>
        <p className="text-xl text-zinc-400 font-serif italic max-w-2xl mx-auto leading-relaxed">
          「沈黙と停滞は、時に積極的な不正よりも深く社会を蝕む。私たちは『なされるべきことがなされない』という不作為を数値化し、白日の下に晒す。」
        </p>
        <div className="w-24 h-1 bg-orange-600 mx-auto rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {principles.map((p, idx) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl hover:border-orange-500/30 transition-all group"
          >
            <div className="w-12 h-12 bg-orange-600/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <p.icon className="w-6 h-6 text-orange-500" />
            </div>
            <h3 className="text-xl font-bold text-zinc-100 mb-3 italic serif">{p.title}</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              {p.description}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="bg-orange-600/5 border border-orange-600/20 p-12 rounded-3xl text-center space-y-6"
      >
        <h2 className="text-2xl font-bold italic serif text-orange-500">私たちの信念と前例</h2>
        <p className="text-zinc-300 leading-loose max-w-3xl mx-auto italic font-serif">
          「一人でもできることはある。一人の声も大事なんだ。」<br /><br />
          このポータルは、その信念を証明するための実験場であり、告発の記録です。
          巨大な行政機構の不作為を前に、個人は無力ではありません。
          私たちが一歩を踏み出し、事実を記録し、声を上げ続けることで、
          「一人の声が社会を動かす」という確かな前例を作り上げます。
        </p>
        <div className="pt-8 flex flex-col items-center gap-2">
          <div className="text-sm font-mono text-zinc-500 uppercase tracking-widest">署名</div>
          <div className="text-2xl font-serif italic text-zinc-200">Mana Archive Portal</div>
          <div className="text-[10px] text-zinc-600 font-mono">HASH: 8f2c3a9e1b7d5f4c6a0b2e8d9f1a7c3b</div>
        </div>
      </motion.div>
    </div>
  );
}
