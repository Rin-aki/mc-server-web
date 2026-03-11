import Link from "next/link";
import {
  ChevronLeft,
  Download,
  ExternalLink,
  Gamepad2,
  MessageCircle,
  Monitor,
  ShieldCheck,
  Sparkles,
  Wifi,
} from "lucide-react";
import CopyIP from "@/components/CopyIP";

const checklist = [
  "推荐使用 Minecraft Java 版 1.20.1 客户端。",
  "原版客户端即可进入，不强制安装 Mod。",
  "若想获得更好的帧数与地图体验，可下载推荐整合包。",
  "首次加入前建议先看一遍服规，避免因为不熟悉规则踩线。",
];

const starterSteps = [
  {
    title: "准备启动器或客户端",
    description:
      "如果你已经有 Java 版客户端，直接使用即可。如果还没有，推荐使用 PCL2 作为启动器，界面直观、下载方便，适合新手。",
    icon: Monitor,
    action: {
      href: "https://pcl2.aoe.top/",
      label: "下载 PCL2 启动器",
      external: true,
    },
  },
  {
    title: "选择原版或整合包进入",
    description:
      "你可以直接用原版客户端加入；如果更看重帧数优化、小地图和基础体验增强，也可以使用我们准备的推荐整合包。",
    icon: Gamepad2,
    action: {
      href: "/download/XPlus1.21.11.mrpack",
      label: "下载推荐整合包",
      external: false,
    },
  },
  {
    title: "添加服务器并开始游玩",
    description:
      "进入多人游戏后点击“添加服务器”，名称随意填写，地址直接粘贴下方 IP。第一次进服后，建议先熟悉出生点与基础规则。",
    icon: Wifi,
    action: null,
  },
];

export default function StartPage() {
  const SERVER_IP = "mc.rinakii.com";

  return (
    <main className="section-shell px-1 py-10 sm:py-16">
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/6 hover:text-white"
        >
          <ChevronLeft className="h-4 w-4" /> 返回首页
        </Link>
      </div>

      <section className="glass-panel rounded-[36px] px-6 py-10 sm:px-10 sm:py-14">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-sky-300">
              <Sparkles className="h-4 w-4" /> Quick Start
            </div>
            <h1 className="text-4xl font-black text-white sm:text-5xl">新玩家入服指南</h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300">
              这页是给第一次接触 XPLUS 的玩家准备的。如果你只是想尽快上服，按下面的步骤来就够了；如果你想获得更稳定的游玩体验，也可以顺手把推荐整合包和社区入口一起配好。
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {checklist.map((item) => (
                <div key={item} className="rounded-2xl border border-white/8 bg-black/20 p-4 text-sm leading-7 text-slate-300">
                  <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-500/12 text-emerald-300">
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-emerald-400/20 bg-emerald-500/10 p-6">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-emerald-300">Join Now</p>
            <h2 className="mt-3 text-2xl font-black text-white">先把地址收好</h2>
            <p className="mt-3 text-sm leading-7 text-slate-200/90">
              加入服务器最关键的信息就这一条。点击复制后，去 Minecraft 的“多人游戏”里粘贴即可。
            </p>
            <div className="mt-6">
              <CopyIP ip={SERVER_IP} />
            </div>
            <div className="mt-6 flex flex-col gap-3">
              <a
                href="https://qm.qq.com/q/XRU6o6bOE4"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-500 px-6 py-4 text-sm font-black text-slate-950 transition hover:bg-emerald-400 hover:scale-[1.02] active:scale-95 shadow-md shadow-emerald-500/20"
              >
                <MessageCircle className="h-4 w-4" /> 加入官方群聊
              </a>
              <Link
                href="/rules"
                className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-black/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/6"
              >
                查看服规与注意事项
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-8 space-y-5">
        <div className="glass-panel rounded-[30px] p-6 sm:p-7">
          <div className="mb-5 flex items-center justify-between">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/6 text-white">
              <Monitor className="h-6 w-6 text-sky-300" />
            </div>
            <span className="text-sm font-black text-slate-500">01</span>
          </div>
          <h2 className="text-xl font-bold text-white">准备启动器或客户端</h2>
          <p className="mt-3 text-sm leading-7 text-slate-400">
            如果你已经有 Java 版客户端，直接使用即可。如果还没有，推荐使用 PCL2 作为启动器，界面直观、下载方便，适合新手。
          </p>
          <a
            href="https://pcl2.aoe.top/"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/6"
          >
            <ExternalLink className="h-4 w-4" /> 下载 PCL2 启动器
          </a>
        </div>

        <div className="glass-panel rounded-[30px] p-6 sm:p-7">
          <div className="mb-5 flex items-center justify-between">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/6 text-white">
              <Gamepad2 className="h-6 w-6 text-sky-300" />
            </div>
            <span className="text-sm font-black text-slate-500">02</span>
          </div>
          <h2 className="text-xl font-bold text-white">准备游戏环境</h2>

          <div className="mt-5 grid md:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-white/8 bg-black/20 p-6">
              <h3 className="mb-2 flex items-center gap-2 font-bold text-slate-200">
                <Wifi className="h-4 w-4 text-emerald-300" /> 原版进入
              </h3>
              <p className="text-sm leading-7 text-slate-400">
                你可以直接用原版客户端加入；如果更看重帧数优化、小地图和基础体验增强，也可以使用我们准备的推荐整合包。
              </p>
            </div>

            <div className="rounded-2xl border border-sky-400/20 bg-sky-500/8 p-6 ring-1 ring-sky-400/15">
              <div className="mb-3 flex items-start justify-between">
                <h3 className="flex items-center gap-2 font-bold text-sky-300">
                  <Gamepad2 className="h-4 w-4" /> 推荐整合包
                </h3>
                <span className="rounded bg-sky-500 px-2 py-0.5 text-[10px] text-white">推荐</span>
              </div>
              <ul className="mb-6 space-y-2 text-sm text-slate-300">
                <li>✓ 内置优化组件，整体帧数表现更稳</li>
                <li>✓ 包含小地图等常用增强内容</li>
                <li>✓ 更适合想省事直接开玩的玩家</li>
              </ul>
              <a
                href="/download/XPlus1.21.11.mrpack"
                download
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-sky-600 px-4 py-3 text-sm font-bold text-white transition hover:bg-sky-500"
              >
                <Download className="h-4 w-4" /> 下载 XPLUS 整合包
              </a>
            </div>
          </div>
        </div>

        <div className="glass-panel rounded-[30px] p-6 sm:p-7">
          <div className="mb-5 flex items-center justify-between">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/6 text-white">
              <Wifi className="h-6 w-6 text-sky-300" />
            </div>
            <span className="text-sm font-black text-slate-500">03</span>
          </div>
          <h2 className="text-xl font-bold text-white">添加服务器并开始游玩</h2>
          <p className="mt-3 text-sm leading-7 text-slate-400">
            进入多人游戏后点击“添加服务器”，名称随意填写，地址直接粘贴下方 IP。第一次进服后，建议先熟悉出生点与基础规则。
          </p>
          <div className="mt-6">
            <CopyIP ip={SERVER_IP} />
          </div>
        </div>
      </section>

      <section className="mt-8 glass-panel rounded-[34px] p-6 sm:p-8">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-slate-400">Tips for New Players</p>
        <h2 className="text-3xl font-black text-white">第一次进服建议这样做</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/8 bg-black/20 p-5">
            <h3 className="text-lg font-bold text-white">先看出生点与公告</h3>
            <p className="mt-2 text-sm leading-7 text-slate-400">
              不要急着冲出去跑图。先确认出生点附近是否有公共设施、玩家留言或基础规则说明，能帮你少走很多弯路。
            </p>
          </div>
          <div className="rounded-2xl border border-white/8 bg-black/20 p-5">
            <h3 className="text-lg font-bold text-white">尽量避开他人基地起家</h3>
            <p className="mt-2 text-sm leading-7 text-slate-400">
              新人落脚时建议先和老玩家保持一点距离，避免资源、建筑边界和公共区域发生误会，后面合作会更顺畅。
            </p>
          </div>
          <div className="rounded-2xl border border-white/8 bg-black/20 p-5">
            <h3 className="text-lg font-bold text-white">需要帮助就进群</h3>
            <p className="mt-2 text-sm leading-7 text-slate-400">
              如果遇到版本、连不上、不会装整合包、找不到公共点位等问题，群聊通常比你自己摸索更快解决。
            </p>
          </div>
          <div className="rounded-2xl border border-white/8 bg-black/20 p-5">
            <h3 className="text-lg font-bold text-white">尊重规则也尊重别人的时间</h3>
            <p className="mt-2 text-sm leading-7 text-slate-400">
              不偷不炸不乱改公共设施，是生存服能长期稳定的底线。把这个底线守住，体验通常都会很好。
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
