// lib/mc-server.ts
export async function getServerStatus(address: string) {
  // 我们使用公开的 mcsrvstat API，它非常稳定且免费
  const res = await fetch(`https://api.mcsrvstat.us/3/${address}`, {
    next: { revalidate: 60 }, // 核心：每 60 秒自动更新缓存，不频繁请求 API
  });

  if (!res.ok) throw new Error('Failed to fetch server status');
  return res.json();
}