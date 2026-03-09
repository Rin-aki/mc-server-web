import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link"; // 相当于 Vue 的 <router-link>

export const metadata: Metadata = {
  title: "Xplus Minecraft Server",
  description: "欢迎来到 Xplus 冒险世界",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body className="bg-black text-white antialiased">
        {/* 导航栏 */}
        <nav className="flex items-center justify-between px-8 py-6 border-b border-white/10">
          <div className="text-xl font-bold tracking-tighter">XPLUS</div>
          <div className="flex gap-6 text-sm font-medium text-slate-400">
            <Link href="/" className="hover:text-white transition-colors">首页</Link>
            <Link href="/rules" className="hover:text-white transition-colors">服规</Link>
            {/* <Link href="/map" className="hover:text-white transition-colors">动态地图</Link> */}
          </div>
        </nav>

        {/* 页面内容 (相当于 <router-view />) */}
        {children}
      </body>
    </html>
  );
}