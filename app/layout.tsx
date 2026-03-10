import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "XPLUS 生存服务器",
  description:
    "XPLUS Minecraft 生存服务器官网：查看服务器状态、入服指南、玩家守则与社区入口。",
};

const navItems = [
  { href: "/", label: "首页" },
  { href: "/start", label: "新手指南" },
  { href: "/rules", label: "服规" },
];

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body className="text-white antialiased">
        <div className="fixed inset-0 -z-20 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.12),_transparent_35%),radial-gradient(circle_at_80%_0%,_rgba(59,130,246,0.12),_transparent_22%)]" />
        <div className="fixed inset-0 -z-10 grid-overlay opacity-40" />

        <header className="sticky top-0 z-50 border-b border-white/8 bg-black/45 backdrop-blur-xl">
          <div className="section-shell flex items-center justify-between px-1 py-4 sm:py-5">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-emerald-400/30 bg-emerald-500/10 text-sm font-black text-emerald-300 shadow-[0_0_30px_rgba(16,185,129,0.18)]">
                XP
              </div>
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-300/85">
                  XPLUS
                </div>
                <p className="text-xs text-slate-400">Minecraft 生存服务器</p>
              </div>
            </Link>

            <nav className="flex items-center gap-2 sm:gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/6 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="https://qm.qq.com/q/XRU6o6bOE4"
                target="_blank"
                rel="noreferrer"
                className="hidden rounded-full border border-emerald-400/25 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-300 transition hover:bg-emerald-500/18 sm:inline-flex"
              >
                加入群聊
              </a>
            </nav>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}
