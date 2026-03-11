"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Player {
  name_raw: string;
  name_clean: string;
  uuid: string;
}

export default function PlayerList({ ip }: { ip: string }) {
  const [players, setPlayers] = useState<Player[]>([]);
  const [onlineCount, setOnlineCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const hasVisiblePlayers = players.length > 0;
  const hasHiddenPlayers = !loading && onlineCount > 0 && players.length === 0;

  useEffect(() => {
    let ignore = false;

    const fetchStatus = async () => {
      try {
        const response = await fetch(`https://api.mcstatus.io/v2/status/java/${ip}`);
        const data = await response.json();

        if (ignore) return;

        if (data.online) {
          setOnlineCount(data.players?.online ?? 0);
          setPlayers(data.players?.list ?? []);
        } else {
          setOnlineCount(0);
          setPlayers([]);
        }
      } catch (error) {
        console.error("获取玩家列表失败", error);
        if (!ignore) {
          setOnlineCount(0);
          setPlayers([]);
        }
      } finally {
        if (!ignore) setLoading(false);
      }
    };

    fetchStatus();
    const timer = setInterval(fetchStatus, 30000);

    return () => {
      ignore = true;
      clearInterval(timer);
    };
  }, [ip]);

  return (
    <div className="glass-panel rounded-[28px] p-6 sm:p-8">
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-slate-400">Players Online</p>
          <h3 className="text-2xl font-black text-white">在线玩家一览</h3>
          <p className="mt-2 text-sm text-slate-400">
            {loading ? "正在同步服务器状态..." : `当前共有 ${onlineCount} 位冒险者在线。`}
          </p>
        </div>
        <p className="text-xs text-slate-500">列表每 30 秒自动刷新一次</p>
      </div>

      {loading ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="h-20 animate-pulse rounded-2xl border border-white/6 bg-white/4" />
          ))}
        </div>
      ) : hasVisiblePlayers ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {players.map((player) => (
            <Link
              key={player.uuid}
              href={`/player/${encodeURIComponent(player.name_clean)}`}
              className="group flex items-center gap-4 rounded-2xl border border-white/8 bg-black/20 p-4 transition duration-300 hover:border-emerald-400/35 hover:bg-white/6"
            >
              <Image
                src={`https://minotar.net/helm/${player.name_clean}/64.png`}
                alt={player.name_clean}
                width={56}
                height={56}
                className="h-14 w-14 rounded-xl border border-white/10 shadow-lg transition duration-300 group-hover:scale-105"
              />
              <div className="min-w-0">
                <p className="truncate text-base font-semibold text-white group-hover:text-emerald-300">
                  {player.name_clean}
                </p>
                <p className="mt-1 text-xs font-mono text-slate-500">UUID: {player.uuid.slice(0, 8)}...</p>
              </div>
            </Link>
          ))}
        </div>
      ) : hasHiddenPlayers ? (
        <div className="rounded-[24px] border border-dashed border-white/10 bg-black/15 px-6 py-14 text-center">
          <p className="text-lg font-semibold text-white">当前有人在线，但暂时拿不到玩家名单</p>
          <p className="mt-2 text-sm leading-6 text-slate-400">
            状态接口已确认服务器内有 {onlineCount} 位玩家，不过这次没有返回具体昵称列表，稍后刷新可能会恢复显示。
          </p>
        </div>
      ) : (
        <div className="rounded-[24px] border border-dashed border-white/10 bg-black/15 px-6 py-14 text-center">
          <p className="text-lg font-semibold text-white">现在服务器里还没人</p>
          <p className="mt-2 text-sm leading-6 text-slate-400">
            这正适合你上线抢第一块领地，或者先去群里喊人一起开荒。
          </p>
        </div>
      )}
    </div>
  );
}
