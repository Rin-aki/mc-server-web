// app/player/[name]/page.tsx
export default async function PlayerPage({ params }: { params: Promise<{ name: string }> }) {
  const { name } = await params;

  return (
    <main className="p-20 text-center">
      <h1 className="text-3xl">玩家档案</h1>
      <p className="mt-4 text-emerald-400 text-2xl font-mono">{name}</p>
      {/* 这里之后可以接入 API 渲染玩家的 3D 皮肤 */}
    </main>
  );
}