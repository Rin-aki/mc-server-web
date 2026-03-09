"use client";

import Link from "next/link";
import { 
  Download, 
  ChevronLeft, 
  Monitor, 
  Map as MapIcon, 
  Zap, 
  Gamepad2,
  ExternalLink,
  PlusCircle
} from "lucide-react";
import CopyIP from "@/components/CopyIP";

export default function StartPage() {
  const SERVER_IP = "mc.rinakii.com";
  const PCL2_URL = "https://pcl2.aoe.top/"; // PCL2 官方爱发电下载页

  return (
    <main className="min-h-screen bg-[#050505] text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* 返回首页 */}
        <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-white mb-12 transition-colors group font-medium">
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          返回主站
        </Link>

        {/* 顶部介绍 */}
        <div className="mb-16">
          <h1 className="text-5xl font-black mb-6 bg-gradient-to-r from-white to-slate-500 bg-clip-text text-transparent">
            加入 XPLUS 冒险
          </h1>
          <div className="flex flex-wrap gap-4">
            <span className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-bold flex items-center gap-2">
              <Zap className="w-4 h-4" /> 纯净生存体验
            </span>
            <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-bold flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" /> 原版 MC 即可进入
            </span>
          </div>
        </div>

        <div className="space-y-10">
          {/* 步骤 1：启动器 */}
          <div className="relative pl-12">
          <div className="absolute left-0 top-0 w-8 h-8 bg-white text-black rounded-lg flex items-center justify-center font-black">1</div>
          <h2 className="text-2xl font-bold mb-4">下载启动器</h2>
          <p className="text-slate-400 mb-6 leading-relaxed">
            如果你还没有 Minecraft 启动器，我们强烈推荐使用 <span className="text-white font-bold">PCL2</span>。它界面简洁、下载速度快且完全免费。
          </p>
          <a 
            href={PCL2_URL}
            target="_blank"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-100 text-black rounded-xl font-bold hover:bg-white transition-all active:scale-95 shadow-lg shadow-white/5"
          >
            <ExternalLink className="w-4 h-4" /> 下载 PCL2 启动器
          </a>
          </div>

          {/* 步骤 2：游戏版本 */}
          <div className="relative pl-12 border-l-2 border-white/5 pb-4">
            <div className="absolute left-[-17px] top-0 w-8 h-8 bg-blue-500 text-white rounded-lg flex items-center justify-center font-black shadow-[0_0_15px_rgba(59,130,246,0.5)]">2</div>
            <h2 className="text-2xl font-bold mb-4">准备游戏环境</h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              {/* 原版说明 */}
              <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
                <h3 className="font-bold mb-2 flex items-center gap-2 text-slate-200">
                  <Gamepad2 className="w-4 h-4" /> 原版进入
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  本服务器基于原版核心，你可以使用任何 1.20.1 版本的原版客户端直接连接。
                </p>
              </div>

              {/* 整合包说明 */}
              <div className="p-6 bg-blue-500/5 border border-blue-500/20 rounded-2xl ring-1 ring-blue-500/20">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-bold flex items-center gap-2 text-blue-400">
                    <Monitor className="w-4 h-4" /> 推荐整合包
                  </h3>
                  <span className="text-[10px] bg-blue-500 text-white px-2 py-0.5 rounded">推荐</span>
                </div>
                <ul className="text-xs text-slate-400 space-y-2 mb-6">
                  <li className="flex items-center gap-2">✓ 内置物理优化、大幅提升 FPS</li>
                  <li className="flex items-center gap-2">✓ 包含 Xaero 小地图 & 皮肤显示</li>
                  <li className="flex items-center gap-2">✓ 预设精美光影，画质更佳</li>
                </ul>
                <a 
                  href="/download/modpack.zip"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-blue-600 hover:bg-blue-500 rounded-xl text-sm font-bold transition-all"
                  download
                >
                  <Download className="w-4 h-4" /> 下载 XPLUS 整合包
                </a>
              </div>
            </div>
          </div>

          {/* 步骤 3：添加服务器 */}
          <div className="relative pl-12">
            <div className="absolute left-0 top-0 w-8 h-8 bg-emerald-500 text-black rounded-lg flex items-center justify-center font-black shadow-[0_0_15px_rgba(16,185,129,0.5)]">3</div>
            <h2 className="text-2xl font-bold mb-4">连接服务器</h2>
            <div className="bg-white/[0.03] border border-white/5 p-6 rounded-3xl">
              <ol className="text-slate-400 text-sm space-y-4 mb-8">
                <li className="flex gap-3">
                  <span className="text-emerald-500 font-mono">01.</span>
                  启动游戏，点击菜单中的 <strong className="text-white">“多人游戏”</strong>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-500 font-mono">02.</span>
                  点击下方按钮 <strong className="text-white">“添加服务器”</strong>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-500 font-mono">03.</span>
                  名称可随意，地址请填入下方的服务器 IP
                </li>
              </ol>
              <CopyIP ip={SERVER_IP} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

// 补充一个简单的图标组件以防缺失
function ShieldCheck({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>
  );
}