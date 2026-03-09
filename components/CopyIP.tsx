"use client"; // 声明这是客户端组件

import { useState } from "react";
import { Copy, Check } from "lucide-react";

export default function CopyIP({ ip }: { ip: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(ip);
      setCopied(true);
      // 2秒后恢复图标状态
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("无法复制到剪贴板", err);
    }
  };

  return (
    <div className="relative group w-full max-w-xs">
      <button
        onClick={handleCopy}
        className="flex items-center justify-between w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl hover:border-emerald-500 hover:bg-slate-800 transition-all duration-300"
      >
        <div className="flex flex-col items-start">
          <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">点击加入</span>
          <code className="text-emerald-400 font-mono font-medium">{ip}</code>
        </div>
        
        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/50 transition-colors">
          {copied ? (
            <Check className="w-4 h-4 text-emerald-500" />
          ) : (
            <Copy className="w-4 h-4 text-slate-400 group-hover:text-white" />
          )}
        </div>
      </button>

      {/* 飘出的“已复制”小气泡 */}
      {copied && (
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-emerald-500 text-white text-xs font-bold rounded shadow-lg animate-in fade-in zoom-in slide-in-from-bottom-2 duration-200">
          已成功复制 IP!
        </div>
      )}
    </div>
  );
}