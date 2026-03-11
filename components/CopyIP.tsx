"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export default function CopyIP({ ip }: { ip: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(ip);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch (error) {
      console.error("复制失败", error);
    }
  };

  return (
    <div className="relative w-full max-w-md">
      <button
        onClick={handleCopy}
        className="group glass-panel flex w-full items-center justify-between rounded-2xl px-5 py-4 text-left transition duration-300 hover:border-emerald-400/35 hover:bg-white/8"
      >
        <div className="min-w-0">
          <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.28em] text-slate-400">
            Server IP
          </p>
          <code className="block truncate text-lg font-semibold text-emerald-300 sm:text-xl">
            {ip}
          </code>
          <p className="mt-1 text-xs text-slate-400">点击即可复制，直接粘贴到多人游戏服务器地址。</p>
        </div>

        <span className="ml-4 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-black/35 transition group-hover:border-emerald-400/30 group-hover:bg-emerald-500/10">
          {copied ? (
            <Check className="h-5 w-5 text-emerald-300" />
          ) : (
            <Copy className="h-5 w-5 text-slate-300" />
          )}
        </span>
      </button>

      {copied ? (
        <div className="absolute -top-11 left-1/2 -translate-x-1/2 rounded-full border border-emerald-400/30 bg-emerald-500 px-3 py-1 text-xs font-semibold text-white shadow-lg shadow-emerald-500/20">
          已复制到剪贴板
        </div>
      ) : null}
    </div>
  );
}
