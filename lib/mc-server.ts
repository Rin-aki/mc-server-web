// lib/mc-server.ts
export async function getServerStatus(address: string) {
  const res = await fetch(`https://api.mcstatus.io/v2/status/java/${address}`, {
    next: { revalidate: 30 },
  });

  if (!res.ok) throw new Error("Failed to fetch server status");
  return res.json();
}
