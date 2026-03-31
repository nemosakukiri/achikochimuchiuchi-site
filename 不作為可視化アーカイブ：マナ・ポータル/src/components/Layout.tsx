import React from "react";
import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, Database, ShieldAlert, Settings, Menu, X, Github, ExternalLink, FileText } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/src/lib/utils";

export function Layout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);
  const location = useLocation();

  const navItems = [
    { icon: LayoutDashboard, label: "ダッシュボード", path: "/" },
    { icon: Database, label: "不作為・不祥事DB", path: "/archive" },
    { icon: FileText, label: "マニフェスト", path: "/manifesto" },
    { icon: ShieldAlert, label: "セキュリティログ", path: "/security" },
    { icon: Settings, label: "設定", path: "/settings" },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-orange-500/30 selection:text-orange-200">
      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{ width: isSidebarOpen ? 260 : 80 }}
        className="fixed left-0 top-0 h-full bg-zinc-900 border-r border-zinc-800 z-50 flex flex-col transition-all duration-300 ease-in-out"
      >
        <div className="p-6 flex items-center justify-between">
          <AnimatePresence mode="wait">
            {isSidebarOpen && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="flex items-center gap-2"
              >
                <div className="w-8 h-8 bg-orange-600 rounded flex items-center justify-center font-bold text-white shadow-lg shadow-orange-600/20">M</div>
                <span className="font-bold text-lg tracking-tighter uppercase italic serif">Mana Portal</span>
              </motion.div>
            )}
          </AnimatePresence>
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 hover:bg-zinc-800 rounded-lg transition-colors text-zinc-500 hover:text-zinc-200"
          >
            {isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        <nav className="flex-1 px-4 space-y-2 mt-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center gap-4 p-3 rounded-lg transition-all group relative",
                location.pathname === item.path 
                  ? "bg-orange-600/10 text-orange-500 border border-orange-600/20" 
                  : "text-zinc-500 hover:text-zinc-200 hover:bg-zinc-800/50"
              )}
            >
              <item.icon className={cn("w-5 h-5 shrink-0", location.pathname === item.path ? "text-orange-500" : "group-hover:text-zinc-200")} />
              <AnimatePresence>
                {isSidebarOpen && (
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="font-medium text-sm whitespace-nowrap"
                  >
                    {item.label}
                  </motion.span>
                )}
              </AnimatePresence>
              {!isSidebarOpen && (
                <div className="absolute left-14 bg-zinc-800 text-zinc-100 px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50 border border-zinc-700 shadow-xl">
                  {item.label}
                </div>
              )}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-zinc-800 space-y-4">
          <div className="flex items-center gap-3 px-2">
            <div className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center overflow-hidden">
              <img src="https://picsum.photos/seed/user/100/100" alt="User" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            {isSidebarOpen && (
              <div className="flex flex-col min-w-0">
                <span className="text-xs font-bold truncate">Admin User</span>
                <span className="text-[10px] text-zinc-500 truncate font-mono">fuuraidoumail@gmail.com</span>
              </div>
            )}
          </div>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main
        className={cn(
          "transition-all duration-300 ease-in-out min-h-screen",
          isSidebarOpen ? "pl-[260px]" : "pl-[80px]"
        )}
      >
        <header className="h-16 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md sticky top-0 z-40 flex items-center justify-between px-8">
          <div className="flex items-center gap-4">
            <h1 className="text-sm font-bold text-zinc-400 uppercase tracking-widest font-mono">
              {location.pathname === "/" ? "全体概要" : 
               location.pathname === "/archive" ? "考察・行動アーカイブ" : 
               location.pathname === "/security" ? "セキュリティログ" : "設定"}
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1 bg-green-900/20 border border-green-900/50 rounded-full">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
              <span className="text-[10px] font-bold text-green-500 uppercase tracking-tighter">システム正常稼働中</span>
            </div>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-zinc-800 rounded-lg transition-colors text-zinc-500 hover:text-zinc-200">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </header>

        <div className="p-8 max-w-7xl mx-auto">
          {children}
        </div>

        <footer className="p-8 border-t border-zinc-900 mt-12 text-center">
          <p className="text-xs text-zinc-600 font-mono uppercase tracking-widest">
            Project Mana © 2026 • Secure Misconduct Portal • v2.4.0-release
          </p>
        </footer>
      </main>
    </div>
  );
}
