import Link from "next/link"; // 引入 Link
import CopyIP from "@/components/CopyIP";
import ServerStatus from "@/components/ServerStatus";
import PlayerList from "@/components/PlayerList";

export default function Home() {
  const SERVER_IP = "mc.rinakii.com";

  return (
    <main className="relative min-h-screen flex flex-col items-center bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-900/20 via-black to-black -z-10" />

      <section className="pt-32 pb-20 px-6 text-center">
        <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-6">
          探索 <span className="text-emerald-500">XPLUS</span>
        </h1>
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          纯净、硬核、充满可能的生存体验。
        </p>

        <div className="flex flex-col items-center gap-6">
          <CopyIP ip={SERVER_IP} />
          
          <div className="flex gap-4">
            {/* 改为 Link 跳转到 /start */}
            <Link 
              href="/start" 
              className="px-8 py-3 bg-white text-black font-bold rounded-xl hover:bg-emerald-500 hover:text-white transition-all duration-300"
            >
              立即开始
            </Link>
            
            <a 
              href="https://qm.qq.com/q/XRU6o6bOE4" 
              target="_blank"
              className="px-8 py-3 bg-slate-800 text-white font-bold rounded-xl hover:bg-slate-700 transition-colors border border-slate-700"
            >
              官方群聊
            </a>
          </div>
        </div>
      </section>

      <section className="pb-32 px-6">
         <ServerStatus ip={SERVER_IP} /> 
      </section>
      
      <section className="mt-20 w-full flex justify-center pb-32">
        <PlayerList ip={SERVER_IP} />
      </section>
    </main>
  );
}