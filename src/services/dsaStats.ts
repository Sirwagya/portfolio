// DSA journey real-time statistics fetching and caching service

export interface PlatformStats {
  username: string;
  badge: string;
}

export interface LeetCodeStats extends PlatformStats {
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  ranking?: number;
  rating?: number | null;
}

export interface CodeChefStats extends PlatformStats {
  rating: number;
  highestRating: number;
  stars: number;
  division?: string;
  globalRank?: number | null;
  contests: number;
  solved: number;
}

export interface CodeforcesStats extends PlatformStats {
  rating: number | null;
  rank: string | null;
  maxRating: number | null;
  solved: number;
}

export interface CodolioStats extends PlatformStats {
  globalRank?: number | null;
}

export interface DsaStatsData {
  updatedAt?: string;
  totalSolved: number;
  leetcode: LeetCodeStats;
  codechef: CodeChefStats;
  codeforces: CodeforcesStats;
  codolio: CodolioStats;
}

export const INITIAL_DSA_STATS: DsaStatsData = {
  totalSolved: 370,
  leetcode: {
    username: "sirwagya",
    totalSolved: 290,
    easySolved: 98,
    mediumSolved: 146,
    hardSolved: 46,
    ranking: 540022,
    rating: null,
    badge: "290+ Solved",
  },
  codechef: {
    username: "sirwagya",
    rating: 1678,
    highestRating: 1678,
    stars: 3,
    division: "Div 2",
    globalRank: 486,
    contests: 12,
    solved: 79,
    badge: "1678 · 3★ Coder",
  },
  codeforces: {
    username: "sirwxgya",
    rating: null,
    rank: null,
    maxRating: null,
    solved: 1,
    badge: "Active Contestant",
  },
  codolio: {
    username: "sirwagya",
    badge: "Verified · #8232",
  },
};

const CACHE_KEY = "dsa_stats_cache_v2";
const CACHE_TTL_MS = 20 * 60 * 1000; // 20 minutes

interface CacheEnvelope {
  timestamp: number;
  data: DsaStatsData;
}

export function getCachedDsaStats(): DsaStatsData | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const parsed: CacheEnvelope = JSON.parse(raw);
    if (parsed && parsed.data && Date.now() - parsed.timestamp < CACHE_TTL_MS) {
      return parsed.data;
    }
  } catch {
    // Ignore localStorage parse errors
  }
  return null;
}

export function saveCachedDsaStats(data: DsaStatsData): void {
  if (typeof window === "undefined") return;
  try {
    const envelope: CacheEnvelope = {
      timestamp: Date.now(),
      data,
    };
    localStorage.setItem(CACHE_KEY, JSON.stringify(envelope));
  } catch {
    // Ignore storage quota errors
  }
}

/**
 * Direct client-side fetchers with CORS fallback
 */
async function fetchDirectClientStats(): Promise<DsaStatsData> {
  const merged: DsaStatsData = JSON.parse(JSON.stringify(INITIAL_DSA_STATS));

  // 1. Codeforces (@sirwxgya) via official CORS-enabled API
  try {
    const cfPromise = fetch(
      "https://codeforces.com/api/user.info?handles=sirwxgya",
      { headers: { Accept: "application/json" } }
    ).then(async (res) => {
      if (res.ok) {
        const json = await res.json();
        if (json.status === "OK" && json.result?.[0]) {
          const u = json.result[0];
          merged.codeforces.rating = u.rating || null;
          merged.codeforces.rank = u.rank || null;
          merged.codeforces.maxRating = u.maxRating || null;
          if (u.rating) {
            const capRank = u.rank
              ? u.rank.charAt(0).toUpperCase() + u.rank.slice(1)
              : "";
            merged.codeforces.badge = `${u.rating} · ${capRank}`;
          }
        }
      }
    });

    const cfStatusPromise = fetch(
      "https://codeforces.com/api/user.status?handle=sirwxgya&from=1&count=30",
      { headers: { Accept: "application/json" } }
    ).then(async (res) => {
      if (res.ok) {
        const json = await res.json();
        if (json.status === "OK" && Array.isArray(json.result)) {
          const solvedSet = new Set<string>();
          json.result.forEach((sub: { verdict?: string; problem?: { contestId?: number; index?: string } }) => {
            if (sub.verdict === "OK" && sub.problem?.contestId && sub.problem?.index) {
              solvedSet.add(`${sub.problem.contestId}-${sub.problem.index}`);
            }
          });
          merged.codeforces.solved = Math.max(solvedSet.size, 1);
        }
      }
    });

    // 2. CodeChef (@sirwagya) via CORS-enabled proxy
    const ccPromise = fetch(
      "https://codechef-api-gamma.vercel.app/handle/sirwagya",
      { headers: { Accept: "application/json" } }
    ).then(async (res) => {
      if (res.ok) {
        const json = await res.json();
        if (json && json.currentRating) {
          merged.codechef.rating = Number(json.currentRating);
          merged.codechef.highestRating = Number(
            json.highestRating || json.currentRating
          );
          if (json.stars) {
            const numStars = parseInt(String(json.stars), 10);
            if (!isNaN(numStars)) merged.codechef.stars = numStars;
          }
          if (Array.isArray(json.ratingData) && json.ratingData.length > 0) {
            merged.codechef.contests = json.ratingData.length;
            const latest = json.ratingData[json.ratingData.length - 1];
            if (latest?.rank) {
              merged.codechef.globalRank = parseInt(latest.rank, 10);
            }
          }
          merged.codechef.badge = `${merged.codechef.rating} · ${merged.codechef.stars}★ Coder`;
        }
      }
    });

    // 3. LeetCode (@sirwagya) via CORS-enabled proxy
    const lcPromise = fetch(
      "https://alfa-leetcode-api.onrender.com/userProfile/sirwagya",
      { headers: { Accept: "application/json" } }
    ).then(async (res) => {
      if (res.ok) {
        const json = await res.json();
        if (json && typeof json.totalSolved === "number") {
          merged.leetcode.totalSolved = json.totalSolved;
          if (json.easySolved !== undefined) merged.leetcode.easySolved = json.easySolved;
          if (json.mediumSolved !== undefined) merged.leetcode.mediumSolved = json.mediumSolved;
          if (json.hardSolved !== undefined) merged.leetcode.hardSolved = json.hardSolved;
          if (json.ranking) merged.leetcode.ranking = json.ranking;
          merged.leetcode.badge = `${merged.leetcode.totalSolved}+ Solved`;
        }
      }
    });

    await Promise.allSettled([cfPromise, cfStatusPromise, ccPromise, lcPromise]);
  } catch {
    // Return baseline if network fails completely
  }

  merged.totalSolved =
    merged.leetcode.totalSolved +
    merged.codechef.solved +
    merged.codeforces.solved;
  merged.updatedAt = new Date().toISOString();

  return merged;
}

/**
 * Main fetch function:
 * 1. Checks memory / localStorage cache first
 * 2. Tries `/api/dsa-stats` serverless endpoint
 * 3. Falls back to direct browser queries
 */
export async function fetchDsaStats(forceRefresh = false): Promise<DsaStatsData> {
  if (!forceRefresh) {
    const cached = getCachedDsaStats();
    if (cached) return cached;
  }

  try {
    const res = await fetch("/api/dsa-stats", {
      headers: { Accept: "application/json" },
    });
    if (res.ok) {
      const data: DsaStatsData = await res.json();
      if (data && data.codeforces && data.codechef && data.leetcode) {
        saveCachedDsaStats(data);
        return data;
      }
    }
  } catch {
    // /api/dsa-stats unavailable or failed, fallback to direct client requests
  }

  const directData = await fetchDirectClientStats();
  saveCachedDsaStats(directData);
  return directData;
}
