// components/PlayerList.tsx
"use client";

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

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const res = await fetch(`https://api.mcstatus.io/v2/status/java/${ip}`);
        const data = await res.json();
        if (data.online) {
            console.log("API返回的原始数据:", data.players); // <--- 加这一行
            setOnlineCount(data.players.online);
            setPlayers(data.players.list || []);
        }
        if (data.online) {
          setOnlineCount(data.players.online);
          setPlayers(data.players.list || []);
        }
      } catch (error) {
        console.error("获取失败", error);
      } finally {
        setLoading(false);
      }
    };
    fetchStatus();
    const timer = setInterval(fetchStatus, 30000);
    return () => clearInterval(timer);
  }, [ip]);

  if (loading) return <div className="text-slate-500 animate-pulse text-center">正在点名玩家...</div>;

  return (
    <div className="w-full max-w-5xl bg-[#0a0a0a] border border-white/5 rounded-3xl p-8 shadow-2xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-2xl font-black text-white flex items-center gap-3">
            在线玩家
            <span className="flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
          </h3>
          <p className="text-slate-500 text-sm mt-1">目前有 {onlineCount} 位冒险者在线</p>
        </div>
      </div>

      {players.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {players.map((player) => (
            <div 
              key={player.uuid} 
              title={player.name_clean} // 鼠标悬停显示全名
              className="flex items-center gap-3 p-3 bg-white/[0.03] border border-white/5 rounded-xl hover:bg-white/[0.08] hover:border-emerald-500/50 transition-all duration-300 group"
            >
              {/* 头像容器 */}
              <div className="relative flex-shrink-0">
                <img 
                  src={`https://minotar.net/helm/${player.name_clean}/64.png`} 
                  alt={player.name_clean}
                  className="w-10 h-10 rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* 名字容器 */}
              <div className="flex flex-col min-w-0">
                <span className="text-sm font-bold text-slate-200 truncate group-hover:text-emerald-400 transition-colors">
                  {player.name_clean}
                </span>
                <span className="text-[10px] text-slate-600 font-mono uppercase">Player</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="py-16 text-center border-2 border-dashed border-white/5 rounded-2xl">
          <p className="text-slate-500 font-medium">荒野中空无一人...</p>
          <p className="text-xs text-slate-600 mt-1">快上线成为第一个开拓者吧！</p>
        </div>
      )}
    </div>
  );
}