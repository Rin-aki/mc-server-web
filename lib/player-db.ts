import "server-only";
import Database from "better-sqlite3";
import fs from "node:fs";
import path from "node:path";

export interface PlayerRecord {
  username: string;
  playtimeMinutes: number;
  lastSeenAt: string | null;
  createdAt: string;
  updatedAt: string;
}

const dataDir = path.join(process.cwd(), "data");
const dbPath = path.join(dataDir, "players.sqlite");

declare global {
  var __playerDb: Database.Database | undefined;
}

function getDb() {
  if (!global.__playerDb) {
    fs.mkdirSync(dataDir, { recursive: true });
    global.__playerDb = new Database(dbPath);
    global.__playerDb.pragma("journal_mode = WAL");
    global.__playerDb.exec(`
      CREATE TABLE IF NOT EXISTS players (
        username TEXT PRIMARY KEY,
        playtime_minutes INTEGER NOT NULL DEFAULT 0,
        last_seen_at TEXT,
        created_at TEXT NOT NULL,
        updated_at TEXT NOT NULL
      );
    `);
  }

  return global.__playerDb;
}

function normalizeUsername(name: string) {
  return decodeURIComponent(name).trim();
}

function rowToRecord(row: {
  username: string;
  playtime_minutes: number;
  last_seen_at: string | null;
  created_at: string;
  updated_at: string;
}): PlayerRecord {
  return {
    username: row.username,
    playtimeMinutes: row.playtime_minutes,
    lastSeenAt: row.last_seen_at,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

export function getOrCreatePlayerRecord(name: string) {
  const db = getDb();
  const username = normalizeUsername(name);
  const now = new Date().toISOString();

  db.prepare(
    `
      INSERT INTO players (username, playtime_minutes, last_seen_at, created_at, updated_at)
      VALUES (@username, 0, NULL, @now, @now)
      ON CONFLICT(username) DO NOTHING
    `,
  ).run({ username, now });

  const row = db
    .prepare(
      `
        SELECT username, playtime_minutes, last_seen_at, created_at, updated_at
        FROM players
        WHERE username = ?
      `,
    )
    .get(username) as
    | {
        username: string;
        playtime_minutes: number;
        last_seen_at: string | null;
        created_at: string;
        updated_at: string;
      }
    | undefined;

  if (!row) {
    throw new Error(`Failed to load player record for ${username}`);
  }

  return rowToRecord(row);
}

export function touchPlayerLastSeen(name: string, seenAt = new Date().toISOString()) {
  const db = getDb();
  const username = normalizeUsername(name);

  db.prepare(
    `
      INSERT INTO players (username, playtime_minutes, last_seen_at, created_at, updated_at)
      VALUES (@username, 0, @seenAt, @seenAt, @seenAt)
      ON CONFLICT(username) DO UPDATE SET
        last_seen_at = excluded.last_seen_at,
        updated_at = excluded.updated_at
    `,
  ).run({ username, seenAt });

  return getOrCreatePlayerRecord(username);
}

export function formatPlaytime(minutes: number) {
  if (minutes <= 0) {
    return "0 小时";
  }

  const hours = Math.floor(minutes / 60);
  const remainMinutes = minutes % 60;

  if (hours <= 0) {
    return `${remainMinutes} 分钟`;
  }

  if (remainMinutes === 0) {
    return `${hours} 小时`;
  }

  return `${hours} 小时 ${remainMinutes} 分钟`;
}

export function formatLastSeen(lastSeenAt: string | null) {
  if (!lastSeenAt) {
    return "新用户，暂未记录";
  }

  const target = new Date(lastSeenAt).getTime();

  if (Number.isNaN(target)) {
    return "记录格式异常";
  }

  const diffMs = Date.now() - target;
  const diffMinutes = Math.floor(diffMs / 60000);

  if (diffMinutes < 1) {
    return "刚刚在线";
  }

  if (diffMinutes < 60) {
    return `${diffMinutes} 分钟前`;
  }

  const diffHours = Math.floor(diffMinutes / 60);

  if (diffHours < 24) {
    return `${diffHours} 小时前`;
  }

  const diffDays = Math.floor(diffHours / 24);

  if (diffDays < 30) {
    return `${diffDays} 天前`;
  }

  return new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(lastSeenAt));
}
