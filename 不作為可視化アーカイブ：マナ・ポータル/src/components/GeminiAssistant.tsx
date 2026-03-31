import React, { useState } from "react";
import { GoogleGenAI } from "@google/genai";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Send, Loader2, RefreshCcw } from "lucide-react";
import { cn } from "@/src/lib/utils";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export function GeminiAssistant() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAsk = async (prompt: string) => {
    if (!prompt.trim()) return;
    setIsLoading(true);
    setResponse(null);
    setError(null);

    try {
      const result = await ai.models.generateContent({
        model: "gemini-3-flash-latest",
        contents: prompt,
      });
      setResponse(result.text || "応答がありませんでした。");
    } catch (err) {
      console.error("Gemini Error:", err);
      setError("Geminiからの応答取得に失敗しました。もう一度お試しください。");
    } finally {
      setIsLoading(false);
    }
  };

  const handleExplainAI = () => {
    setInput("AIがどのように機能するか、数語で説明してください");
    handleAsk("AIがどのように機能するか、数語で説明してください");
  };

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 shadow-2xl">
      <div className="flex items-center gap-2 mb-6">
        <Sparkles className="w-5 h-5 text-orange-500" />
        <h2 className="text-xl font-semibold text-zinc-100 italic serif">Gemini AI アシスタント</h2>
      </div>

      <div className="space-y-4">
        <div className="flex flex-wrap gap-2 mb-4">
          <button
            onClick={handleExplainAI}
            className="text-xs px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 border border-zinc-700 rounded-full transition-colors flex items-center gap-1.5"
          >
            <RefreshCcw className="w-3 h-3" />
            AIの仕組みを説明
          </button>
        </div>

        <div className="relative">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="不正行為やAIについて何でも聞いてください..."
            className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-4 pr-12 text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-orange-500/50 transition-colors min-h-[100px] resize-none font-mono text-sm"
          />
          <button
            onClick={() => handleAsk(input)}
            disabled={isLoading || !input.trim()}
            className="absolute bottom-4 right-4 p-2 bg-orange-600 hover:bg-orange-500 disabled:bg-zinc-800 disabled:text-zinc-600 text-white rounded-lg transition-all"
          >
            {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
          </button>
        </div>

        <AnimatePresence mode="wait">
          {error && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="p-4 bg-red-900/20 border border-red-900/50 rounded-lg text-red-400 text-sm"
            >
              {error}
            </motion.div>
          )}

          {response && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="p-6 bg-zinc-950 border border-zinc-800 rounded-lg"
            >
              <div className="text-xs text-zinc-500 uppercase tracking-widest mb-3 font-mono">応答</div>
              <div className="text-zinc-300 leading-relaxed whitespace-pre-wrap text-sm">
                {response}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
