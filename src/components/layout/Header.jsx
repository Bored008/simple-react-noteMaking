import { useState, useEffect } from "react";
import { useUser } from "../../contexts/UserContext";

export default function Header() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [date, setDate] = useState(new Date().toLocaleDateString());
  const { username, resetUser } = useUser();

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
      setDate(new Date().toLocaleDateString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="sticky top-0 z-50 glass mb-6 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <span className="text-white font-bold text-xl">
                {username?.charAt(0).toUpperCase() || "N"}
              </span>
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 leading-tight">
                {username}
              </h1>
              <span className="text-[10px] uppercase tracking-widest text-indigo-400 font-bold">Productivity Suite</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <div className="px-4 py-2 bg-indigo-500/10 rounded-full border border-indigo-500/20">
              <span className="text-indigo-400 font-medium text-sm">
                {date} • <span className="text-white">{time}</span>
              </span>
            </div>
            <button
              onClick={resetUser}
              className="text-[10px] uppercase tracking-tighter text-gray-500 hover:text-red-400 font-bold transition-colors"
              title="Change Username"
            >
              Reset
            </button>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-gray-400 font-medium">System Active</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
