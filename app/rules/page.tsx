import Link from "next/link";
import { ChevronLeft, ShieldAlert, ShieldCheck, Siren, Swords, Trees } from "lucide-react";

const ruleGroups = [
  {
    title: "一、社区与交流",
    icon: ShieldCheck,
    rules: [
      "尊重其他玩家，禁止侮辱、骚扰、人身攻击、歧视性言论与持续挑衅。",
      "允许正常争论，不允许把聊天频道变成恶意输出和刷屏现场。",
      "请尽量保持基本礼貌，新玩家提问时不要恶意嘲讽或故意误导。",
    ],
  },
  {
    title: "二、世界与建筑",
    icon: Trees,
    rules: [
      "禁止偷窃、恶意破坏、纵火、TNT 炸图、随意挖空他人建筑或公共设施。",
      "不要在他人基地附近贴脸圈地、乱搭小黑屋、乱插火把或乱留箱子。",
      "公共区域、交通线路和基础设施属于集体成果，修改前请先征求意见。",
    ],
  },
  {
    title: "三、游戏公平性",
    icon: Swords,
    rules: [
      "严禁使用外挂、透视、飞行、自动脚本、恶意漏洞利用等影响公平性的手段。",
      "如需使用小地图、优化类模组，请以不破坏平衡、不干扰他人体验为前提。",
      "任何能显著绕过正常游玩过程、影响服务器公平性的行为，管理有权直接处理。",
    ],
  },
];

const punishments = [
  "轻微违规：口头提醒、私聊警告、要求限期整改。",
  "重复违规：临时封禁、清除违规建筑或回档相关区域。",
  "严重违规：长期封禁、永久封禁，并视情况同步清理关联破坏内容。",
  "若涉及大规模破坏、外挂、盗窃或恶意挑事，管理可跳过提醒直接处理。",
];

const suggestions = [
  "定居前先看一下周边是否已有玩家长期发展，尽量避免踩到别人规划中的区域。",
  "大型工程、公共项目或跨区交通建设，建议提前在群里说一声，方便协作。",
  "如果你发现 Bug、异常玩家或可疑行为，尽快联系管理，不要私下扩散和起哄。",
  "服规不是为了限制正常游玩，而是为了让这个世界能活得更久、大家都玩得舒服。",
];

export default function RulesPage() {
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
        <div className="max-w-4xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-yellow-300">
            <ShieldAlert className="h-4 w-4" /> Server Rules
          </div>
          <h1 className="text-4xl font-black text-white sm:text-5xl">XPLUS 玩家守则</h1>
          <p className="mt-5 text-base leading-8 text-slate-300">
            这不是一份为了“显得正规”而写得很吓人的规则文档，而是 XPLUS 能长期稳定运行的基本共识。
            只要你愿意尊重他人、尊重世界、尊重公平，大多数时候这里都不会给你添堵。
          </p>
        </div>
      </section>

      <section className="mt-8 grid gap-5">
        {ruleGroups.map(({ title, icon: Icon, rules }) => (
          <div key={title} className="glass-panel rounded-[30px] p-6 sm:p-8">
            <div className="mb-5 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/6">
                <Icon className="h-6 w-6 text-yellow-300" />
              </div>
              <h2 className="text-2xl font-black text-white">{title}</h2>
            </div>
            <div className="grid gap-4">
              {rules.map((rule) => (
                <div key={rule} className="rounded-2xl border border-white/8 bg-black/20 p-5 text-sm leading-7 text-slate-300">
                  {rule}
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="mt-8 grid gap-5 lg:grid-cols-2">
        <div className="glass-panel rounded-[30px] p-6 sm:p-8">
          <div className="mb-5 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-500/12">
              <Siren className="h-6 w-6 text-rose-300" />
            </div>
            <h2 className="text-2xl font-black text-white">处罚说明</h2>
          </div>
          <div className="space-y-4">
            {punishments.map((item) => (
              <div key={item} className="rounded-2xl border border-white/8 bg-black/20 p-5 text-sm leading-7 text-slate-300">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="glass-panel rounded-[30px] p-6 sm:p-8">
          <div className="mb-5 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/12">
              <ShieldCheck className="h-6 w-6 text-emerald-300" />
            </div>
            <h2 className="text-2xl font-black text-white">建议与补充</h2>
          </div>
          <div className="space-y-4">
            {suggestions.map((item) => (
              <div key={item} className="rounded-2xl border border-white/8 bg-black/20 p-5 text-sm leading-7 text-slate-300">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
