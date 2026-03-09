import { getServerStatus } from "@/lib/mc-server";
import { Users, Wifi, Globe } from "lucide-react";

export default async function ServerStatus({ ip }: { ip: string }) {
  const data = await getServerStatus(ip);
  const isOnline = data.online;

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl shadow-xl max-w-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-white flex items-center gap-2">
          <Globe className="w-5 h-5 text-blue-400" />
          服务器状态
        </h3>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
          isOnline ? "bg-green-500/10 text-green-400" : "bg-red-500/10 text-red-400"
        }`}>
          {isOnline ? "在线" : "离线"}
        </span>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Users className="w-5 h-5 text-slate-400" />
          <div>
            <p className="text-sm text-slate-500 leading-none">当前人数</p>
            <p className="text-lg font-semibold text-slate-200">
              {isOnline ? `${data.players.online} / ${data.players.max}` : "--"}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Wifi className="w-5 h-5 text-slate-400" />
          <div>
            <p className="text-sm text-slate-500 leading-none">服务器版本</p>
            <p className="text-slate-200">{isOnline ? data.version : "N/A"}</p>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-slate-800">
        <p className="text-xs text-slate-500 mb-2 font-mono">SERVER IP</p>
        <code className="block p-2 bg-black rounded text-emerald-400 font-mono text-center cursor-pointer hover:bg-slate-800 transition-colors">
          {ip}
        </code>
      </div>
    </div>
  );
}