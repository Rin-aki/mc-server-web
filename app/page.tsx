import Link from "next/link";
import {
  ArrowRight,
  Compass,
  Crown,
  Pickaxe,
  Shield,
  Sparkles,
  Swords,
  Trees,
} from "lucide-react";
import CopyIP from "@/components/CopyIP";
import PlayerList from "@/components/PlayerList";
import ServerStatus from "@/components/ServerStatus";

const serverHighlights = [
  {
    title: "长期稳定开服",
    description: "以长期生存为目标维护世界，不做一波流快餐服，建筑和存档都有持续积累价值。",
    icon: Shield,
  },
  {
    title: "原版体验为主",
    description: "保留 Minecraft 核心乐趣，不强塞复杂玩法，适合喜欢探索、建造、养老与轻度冒险的玩家。",
    icon: Trees,
  },
  {
    title: "社区氛围友好",
    description: "欢迎单人玩家、小团体和建筑党，鼓励合作发展，不鼓励恶意内卷与破坏他人体验。",
    icon: Crown,
  },
  {
    title: "轻松入服",
    description: "原版客户端即可连接，也提供推荐整合包与新手指引，降低入服门槛。",
    icon: Compass,
  },
];

const featureCards = [
  {
    title: "纯净生存节奏",
    description: "从第一晚火把、第一块矿石，到大型基地与铁路网络，成长过程是这个服务器最值得体验的部分。",
    icon: Pickaxe,
  },
  {
    title: "适合建造与定居",
    description: "比起打卡式上线，更希望你能把这里当成能慢慢经营的世界，留下真正想保留的作品。",
    icon: Sparkles,
  },
  {
    title: "多人协作更有趣",
    description: "无论是一起下矿、打 Boss、修公共设施，还是互相串门参观基地，都比单机更有生命力。",
    icon: Swords,
  },
];

const joinSteps = [
  "确认你拥有 Minecraft Java 版客户端，推荐使用 1.20.1 进入。",
  "复制服务器地址，在游戏中进入“多人游戏”并添加服务器。",
  "首次进入后先阅读基础规则，再决定定居地点与发展方向。",
];

export default function Home() {
  const SERVER_IP = "mc.rinakii.com";

  return (
    <main className="pb-24">
      <section className="mx-auto max-w-[1440px] px-4 pt-6 sm:px-8 sm:pt-10">
        <div className="glass-panel overflow-hidden rounded-[36px] px-6 py-8 sm:px-10 sm:py-12 lg:px-14 lg:py-16">
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              {/* 顶部标签 */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-300 sm:text-xs">
                <Sparkles className="h-3.5 w-3.5" /> XPLUS Survival Server
              </div>

              {/* 优化后的标题排版 */}
              <h1 className="text-balance text-[2.4rem] font-black !leading-[1.1] tracking-[-0.04em] text-white sm:text-[3.8rem] lg:text-[4.5rem] xl:text-[5rem]">
                <span>一个适合长期游玩的 </span>
                <br className="hidden sm:block" />
                {/* 移除背景裁剪，改用实体色 + 柔和的文字阴影 */}
                <span className="text-emerald-400 drop-shadow-[0_0_15px_rgba(52,211,153,0.3)]">
                  Minecraft 生存世界
                </span>
              </h1>

              {/* 描述文本优化 */}
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg sm:leading-8">
                XPLUS 想做的不是“花里胡哨三天就腻”的展示服，而是一个你愿意反复上线、慢慢建家、认识人、留下作品的服务器。
                如果你喜欢纯净生存、稳定社区和舒服的开荒节奏，这里会挺适合你。
              </p>

              {/* 按钮组 */}
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <CopyIP ip={SERVER_IP} />
                {/* 给这个 div 增加 flex-1 和 w-full 确保铺满 */}
                <div className="flex w-full flex-wrap gap-3 sm:w-auto">
                  <Link
                    href="/start"
                    className="flex-1 sm:flex-none sm:min-w-[160px] inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-500 px-6 py-4 text-sm font-black text-slate-950 transition hover:bg-emerald-400 hover:scale-[1.02] active:scale-95 shadow-md shadow-emerald-500/20"
                  >
                    查看入服指南 <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a
                    href="https://qm.qq.com/q/XRU6o6bOE4"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 sm:flex-none sm:min-w-[160px] inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-bold text-white transition hover:bg-white/10 hover:scale-[1.02] active:scale-95"
                  >
                    加入官方群聊
                  </a>
                </div>
              </div>
            </div>

            {/* 右侧卡片部分保持原样或微调间距 */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {serverHighlights.map(({ title, description, icon: Icon }) => (
                <div key={title} className="rounded-[28px] border border-white/8 bg-black/20 p-5 transition hover:border-white/20">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-500/10">
                    <Icon className="h-6 w-6 text-emerald-300" />
                  </div>
                  <h2 className="text-lg font-bold text-white">{title}</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-4 pt-6 sm:px-8 sm:pt-10">
        <div className="grid gap-5 lg:grid-cols-3">
          {featureCards.map(({ title, description, icon: Icon }) => (
            <div key={title} className="glass-panel rounded-[28px] p-6 sm:p-7">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/8 bg-white/6">
                <Icon className="h-6 w-6 text-sky-300" />
              </div>
              <h3 className="text-xl font-bold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] mt-18 grid gap-8 px-4 sm:mt-24 lg:grid-cols-[1.2fr_0.8fr] sm:px-8">
        <div className="glass-panel rounded-[32px] p-5 sm:p-6">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-slate-400">How to Join</p>
          <h2 className="text-3xl font-black text-white">三步快速加入</h2>
          <div className="mt-6 space-y-3">
            {joinSteps.map((step, index) => (
              <div key={step} className="flex gap-3 rounded-2xl border border-white/8 bg-black/20 p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500 text-sm font-black text-black">
                  {index + 1}
                </div>
                <p className="text-sm leading-6 text-slate-300">{step}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/start"
              className="inline-flex items-center gap-2 rounded-2xl border border-emerald-400/25 bg-emerald-500/10 px-5 py-3 text-sm font-semibold text-emerald-300 transition hover:bg-emerald-500/18"
            >
              查看完整新手指南 <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/rules"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-black/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/6"
            >
              先读服规
            </Link>
          </div>
        </div>

        <ServerStatus />
      </section>

      <section className="mx-auto max-w-[1440px] px-4 pt-6 sm:px-8 sm:pt-10">
        <PlayerList ip={SERVER_IP} />
      </section>

      <section className="mx-auto max-w-[1440px] px-4 pt-6 sm:px-8 sm:pt-10">
        <div className="glass-panel rounded-[36px] px-6 py-10 text-center sm:px-10 sm:py-14">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-emerald-300">Ready to Play</p>
          <h2 className="text-3xl font-black text-white sm:text-4xl">准备好在 XPLUS 开始你的新存档了吗？</h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            如果你喜欢稳定的世界、舒服的玩家氛围和能慢慢经营的服务器，现在就复制 IP 上线，或者先加入群聊看看大家最近在造什么。
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <CopyIP ip={SERVER_IP} />
            <a
              href="https://qm.qq.com/q/XRU6o6bOE4"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-2xl bg-emerald-500 px-8 py-4 text-sm font-black text-slate-950 transition hover:bg-emerald-400 hover:scale-[1.02] active:scale-95 shadow-lg shadow-emerald-500/20"
            >
              进入社区群聊
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
