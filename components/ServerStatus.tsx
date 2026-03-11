import type { ReactNode } from "react";
import { getServerStatus } from "@/lib/mc-server";
import { Globe, Signal, Users } from "lucide-react";

const SERVER_IP = "mc.rinakii.com";

export default async function ServerStatus() {
  const data = await getServerStatus(SERVER_IP);
  const isOnline = Boolean(data.online);
  const playerLabel = isOnline ? `${data.players?.online ?? 0} / ${data.players?.max ?? 0}` : "--";
  const versionLabel = isOnline
    ? typeof data.version === "string"
      ? data.version
      : data.version?.name_clean || data.version?.name_raw || "未知版本"
    : "当前不可用";
  const motd = Array.isArray(data.motd?.clean)
    ? data.motd.clean.join(" ")
    : data.motd?.clean || data.motd?.raw || data.hostname || "欢迎来到 XPLUS";

  return (
    <div className="glass-panel rounded-[28px] p-6 sm:p-8">
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-slate-400">Live Status</p>
          <h3 className="flex items-center gap-3 text-2xl font-black text-white">
            <Globe className="h-6 w-6 text-emerald-300" />
            服务器实时状态
          </h3>
          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400">{motd}</p>
        </div>

        <span
          className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold ${
            isOnline
              ? "border-emerald-400/30 bg-emerald-500/12 text-emerald-300"
              : "border-rose-400/30 bg-rose-500/12 text-rose-300"
          }`}
        >
          <span
            className={`h-2.5 w-2.5 rounded-full ${isOnline ? "bg-emerald-300" : "bg-rose-300"}`}
          />
          {isOnline ? "在线" : "离线"}
        </span>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <StatusCard icon={<Users className="h-5 w-5 text-emerald-300" />} label="在线人数" value={playerLabel} />
        <StatusCard icon={<Signal className="h-5 w-5 text-sky-300" />} label="服务版本" value={versionLabel} />
      </div>
    </div>
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
    <div className="rounded-2xl border border-white/8 bg-black/20 p-5">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-white/8 bg-white/5">
        {icon}
      </div>
      <p className="text-sm text-slate-400">{label}</p>
      <p className="mt-2 break-all text-lg font-semibold text-white">{value}</p>
    </div>
  );
}
