import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components/Layout";
import { MisconductList } from "./components/MisconductList";
import { GeminiAssistant } from "./components/GeminiAssistant";
import { Manifesto } from "./components/Manifesto";
import { CaseFile001 } from "./components/CaseFile001";
import { motion } from "motion/react";
import { Activity, Shield, Users, Database, ArrowUpRight } from "lucide-react";

function Overview() {
  const stats = [
    { label: "不作為・不祥事案件", value: "1,284", icon: Database, color: "text-orange-500" },
    { label: "平均不作為スコア", value: "68.5", icon: Shield, color: "text-red-500" },
    { label: "不祥事ニュース", value: "452", icon: Users, color: "text-blue-500" },
    { label: "データ整合性", value: "100%", icon: Activity, color: "text-green-500" },
  ];

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl hover:border-zinc-700 transition-all shadow-lg"
          >
            <div className="flex items-center justify-between mb-4">
              <stat.icon className={`w-6 h-6 ${stat.color}`} />
              <ArrowUpRight className="w-4 h-4 text-zinc-600" />
            </div>
            <div className="text-3xl font-bold text-zinc-100 mb-1">{stat.value}</div>
            <div className="text-xs text-zinc-500 uppercase tracking-widest font-mono">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-orange-600/10 border border-orange-600/30 p-8 rounded-xl mb-8"
          >
            <h2 className="text-xl font-bold text-orange-500 mb-4 italic serif">一人の声、一つの前例</h2>
            <p className="text-zinc-300 leading-relaxed italic">
              「一人でもできることはある。一人の声も大事なんだ。」<br /><br />
              このアーカイブは、その信念を証明するために存在します。
              巨大な組織の不作為に対し、私たちが記録し、声を上げ続けることで、
              「一人の声が社会を動かす」という確かな前例を作り上げます。
            </p>
          </motion.div>
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold italic serif">最近の不作為・不祥事記録</h2>
            <button className="text-xs text-orange-500 hover:underline font-mono uppercase tracking-widest">すべて表示</button>
          </div>
          <MisconductList />
        </div>
        <div className="space-y-6">
          <h2 className="text-xl font-bold italic serif">AI インサイト</h2>
          <GeminiAssistant />
          <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl">
            <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-widest font-mono mb-4">アーカイブ・ステータ</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs">
                <span className="text-zinc-500">データベース整合性</span>
                <span className="text-green-500 font-bold">正常</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-zinc-500">AI解析エンジン</span>
                <span className="text-zinc-300 font-bold">待機中</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-zinc-500">最終同期</span>
                <span className="text-orange-500 font-bold">1分前</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/archive" element={<MisconductList />} />
          <Route path="/case-file-001" element={<CaseFile001 />} />
          <Route path="/manifesto" element={<Manifesto />} />
          <Route path="/security" element={<div className="p-12 text-center text-zinc-500 font-mono italic">セキュリティログは管理者のみ閲覧可能です。</div>} />
          <Route path="/settings" element={<div className="p-12 text-center text-zinc-500 font-mono italic">設定は現在ロックされています。</div>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
}
