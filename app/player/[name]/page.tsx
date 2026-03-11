import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Clock3, ShieldCheck, Timer } from "lucide-react";
import { formatLastSeen, formatPlaytime, getOrCreatePlayerRecord, touchPlayerLastSeen } from "@/lib/player-db";

const SERVER_IP = "mc.rinakii.com";

async function getLivePlayerStatus(name: string) {
  try {
    const res = await fetch(`https://api.mcstatus.io/v2/status/java/${SERVER_IP}`, {
      next: { revalidate: 30 },
    });

    if (!res.ok) {
      return {
        isOnline: false,
        currentStatusLabel: "状态接口暂时不可用",
      };
    }

    const data = await res.json();
    const players = data.players?.list ?? [];
    const normalizedName = decodeURIComponent(name).toLowerCase();
    const isOnline = players.some(
      (player: { name_clean?: string; name_raw?: string }) =>
        player.name_clean?.toLowerCase() === normalizedName || player.name_raw?.toLowerCase() === normalizedName,
    );

    return {
      isOnline,
      currentStatusLabel: isOnline ? "当前在线" : "当前离线",
    };
  } catch {
    return {
      isOnline: false,
      currentStatusLabel: "状态接口暂时不可用",
    };
  }
}

export default async function PlayerPage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  const username = decodeURIComponent(name);
  const liveStatus = await getLivePlayerStatus(name);
  const playerRecord = liveStatus.isOnline ? touchPlayerLastSeen(username) : getOrCreatePlayerRecord(username);

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

      <section className="glass-panel rounded-[36px] px-6 py-10 sm:px-10 sm:py-12">
        <div className="flex flex-col items-center text-center">
          <Image
            src={`https://minotar.net/armor/body/${encodeURIComponent(username)}/220.png`}
            alt={username}
            width={128}
            height={208}
            className="h-52 w-32 object-contain drop-shadow-[0_24px_40px_rgba(0,0,0,0.45)]"
          />
          <p className="mt-4 text-xs font-bold uppercase tracking-[0.3em] text-slate-400">Player Status</p>
          <h1 className="mt-2 text-4xl font-black text-white">{username}</h1>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <StatusCard
            icon={<ShieldCheck className={`h-5 w-5 ${liveStatus.isOnline ? "text-emerald-300" : "text-slate-300"}`} />}
            label="当前状态"
            value={liveStatus.currentStatusLabel}
          />
          <StatusCard
            icon={<Clock3 className="h-5 w-5 text-sky-300" />}
            label="最近在线"
            value={liveStatus.isOnline ? "刚刚在线" : formatLastSeen(playerRecord.lastSeenAt)}
          />
          <StatusCard
            icon={<Timer className="h-5 w-5 text-amber-300" />}
            label="累计游玩时长"
            value={formatPlaytime(playerRecord.playtimeMinutes)}
          />
        </div>
      </section>
    </main>
  );
}

function StatusCard({
  icon,
  label,
  value,
}: {
  icon: ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-[28px] border border-white/8 bg-black/20 p-5 text-left">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-white/8 bg-white/5">
        {icon}
      </div>
      <p className="text-sm text-slate-400">{label}</p>
      <p className="mt-2 text-lg font-semibold text-white">{value}</p>
    </div>
  );
}
