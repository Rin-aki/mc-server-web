export default async function PlayerPage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;

  return (
    <main className="section-shell px-1 py-10 sm:py-16">
      <div className="glass-panel rounded-[32px] px-6 py-10 text-center sm:px-10 sm:py-14">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-slate-400">Player Profile</p>
        <h1 className="text-4xl font-black text-white">玩家档案</h1>
        <div className="mx-auto mt-8 flex w-fit flex-col items-center rounded-[28px] border border-white/8 bg-black/20 px-8 py-6">
          <img
            src={`https://minotar.net/armor/body/${encodeURIComponent(name)}/180.png`}
            alt={name}
            className="h-40 w-24 object-contain"
          />
          <p className="mt-5 text-2xl font-bold text-emerald-300">{name}</p>
          <p className="mt-2 text-sm text-slate-400">这里可以作为后续扩展玩家档案、历史数据或皮肤展示的入口页。</p>
        </div>
      </div>
    </main>
  );
}
