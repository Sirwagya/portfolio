// Cloudflare Pages Function: /api/dsa-stats
// Dynamically fetches and merges live ratings and stats from Codeforces, CodeChef, and LeetCode

const DEFAULT_STATS = {
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

function fetchWithTimeout(url, options = {}, timeoutMs = 4000) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);
  return fetch(url, { ...options, signal: controller.signal }).finally(() =>
    clearTimeout(timeoutId)
  );
}

export async function onRequest(context) {
  const { request } = context;

  // Handle CORS preflight
  if (request.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  }

  const result = JSON.parse(JSON.stringify(DEFAULT_STATS));
  result.updatedAt = new Date().toISOString();

  // Run all platform queries in parallel
  await Promise.allSettled([
    // 1. Codeforces (@sirwxgya)
    (async () => {
      try {
        const [infoRes, statusRes] = await Promise.allSettled([
          fetchWithTimeout(
            "https://codeforces.com/api/user.info?handles=sirwxgya",
            { headers: { "User-Agent": "PortfolioEdge/1.0" } }
          ),
          fetchWithTimeout(
            "https://codeforces.com/api/user.status?handle=sirwxgya&from=1&count=50",
            { headers: { "User-Agent": "PortfolioEdge/1.0" } }
          ),
        ]);

        if (infoRes.status === "fulfilled" && infoRes.value.ok) {
          const infoData = await infoRes.value.json();
          if (infoData.status === "OK" && infoData.result?.[0]) {
            const u = infoData.result[0];
            result.codeforces.rating = u.rating || null;
            result.codeforces.rank = u.rank || null;
            result.codeforces.maxRating = u.maxRating || null;
            if (u.rating) {
              const capRank = u.rank
                ? u.rank.charAt(0).toUpperCase() + u.rank.slice(1)
                : "";
              result.codeforces.badge = `${u.rating} · ${capRank}`;
            }
          }
        }

        if (statusRes.status === "fulfilled" && statusRes.value.ok) {
          const statusData = await statusRes.value.json();
          if (statusData.status === "OK" && Array.isArray(statusData.result)) {
            const solvedSet = new Set();
            statusData.result.forEach((sub) => {
              if (sub.verdict === "OK" && sub.problem) {
                solvedSet.add(`${sub.problem.contestId}-${sub.problem.index}`);
              }
            });
            result.codeforces.solved = Math.max(solvedSet.size, 1);
            if (!result.codeforces.rating) {
              result.codeforces.badge = "Active Contestant";
            }
          }
        }
      } catch {
        // Fallback already populated
      }
    })(),

    // 2. CodeChef (@sirwagya)
    (async () => {
      // First try JSON API proxy
      try {
        const proxyRes = await fetchWithTimeout(
          "https://codechef-api-gamma.vercel.app/handle/sirwagya",
          { headers: { "User-Agent": "PortfolioEdge/1.0" } },
          3500
        );
        if (proxyRes.ok) {
          const data = await proxyRes.json();
          if (data && data.success !== false && data.currentRating) {
            result.codechef.rating = Number(data.currentRating);
            result.codechef.highestRating = Number(
              data.highestRating || data.currentRating
            );
            if (data.stars) {
              const starsNum = parseInt(String(data.stars), 10);
              if (!isNaN(starsNum)) result.codechef.stars = starsNum;
            }
            if (Array.isArray(data.ratingData) && data.ratingData.length > 0) {
              result.codechef.contests = data.ratingData.length;
              const latest = data.ratingData[data.ratingData.length - 1];
              if (latest && latest.rank) {
                result.codechef.globalRank = parseInt(latest.rank, 10);
              }
            } else if (data.globalRank) {
              result.codechef.globalRank = parseInt(data.globalRank, 10);
            }
            result.codechef.badge = `${result.codechef.rating} · ${result.codechef.stars}★ Coder`;
            return;
          }
        }
      } catch {
        // Fall back to direct HTML scraping
      }

      // Direct scrape fallback
      try {
        const htmlRes = await fetchWithTimeout(
          "https://www.codechef.com/users/sirwagya",
          {
            headers: {
              "User-Agent":
                "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
              Accept:
                "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
            },
          },
          3500
        );
        if (htmlRes.ok) {
          const html = await htmlRes.text();
          const ratingMatch = html.match(
            /class=["']rating-number["'][^>]*>\s*([0-9]+)\s*</
          );
          if (ratingMatch) {
            result.codechef.rating = parseInt(ratingMatch[1], 10);
          }
          const starsMatch = html.match(
            /class=["']rating-star["'][^>]*>([\s\S]*?)<\/div>/
          );
          if (starsMatch) {
            const count = (starsMatch[1].match(/&#9733;|\u2605/g) || []).length;
            if (count > 0) result.codechef.stars = count;
          }
          const highestMatch = html.match(/Highest Rating\s*([0-9]+)/i);
          if (highestMatch) {
            result.codechef.highestRating = parseInt(highestMatch[1], 10);
          }
          const rankMatch = html.match(
            /class=["']global-rank["'][^>]*>\s*([0-9]+)\s*</
          );
          if (rankMatch) {
            result.codechef.globalRank = parseInt(rankMatch[1], 10);
          }
          const contestsMatch = html.match(/Contests\s*\(([0-9]+)\)/i);
          if (contestsMatch) {
            result.codechef.contests = parseInt(contestsMatch[1], 10);
          }
          const solvedMatch = html.match(/Total Problems Solved:\s*([0-9]+)/i);
          if (solvedMatch) {
            result.codechef.solved = parseInt(solvedMatch[1], 10);
          }
          result.codechef.badge = `${result.codechef.rating} · ${result.codechef.stars}★ Coder`;
        }
      } catch {
        // Retain default
      }
    })(),

    // 3. LeetCode (@sirwagya)
    (async () => {
      // First try GraphQL directly
      try {
        const lcRes = await fetchWithTimeout(
          "https://leetcode.com/graphql",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Referer: "https://leetcode.com",
              "User-Agent": "Mozilla/5.0",
            },
            body: JSON.stringify({
              query: `query getUserProfile($username: String!) {
                matchedUser(username: $username) {
                  submitStats: submitStatsGlobal {
                    acSubmissionNum { difficulty count }
                  }
                  profile { ranking }
                }
                userContestRanking(username: $username) {
                  rating
                }
              }`,
              variables: { username: "sirwagya" },
            }),
          },
          3500
        );

        if (lcRes.ok) {
          const lcData = await lcRes.json();
          if (lcData?.data?.matchedUser) {
            const stats =
              lcData.data.matchedUser.submitStats?.acSubmissionNum || [];
            stats.forEach((item) => {
              if (item.difficulty === "All")
                result.leetcode.totalSolved = item.count;
              if (item.difficulty === "Easy")
                result.leetcode.easySolved = item.count;
              if (item.difficulty === "Medium")
                result.leetcode.mediumSolved = item.count;
              if (item.difficulty === "Hard")
                result.leetcode.hardSolved = item.count;
            });
            if (lcData.data.matchedUser.profile?.ranking) {
              result.leetcode.ranking = lcData.data.matchedUser.profile.ranking;
            }
            if (lcData.data.userContestRanking?.rating) {
              result.leetcode.rating = Math.round(
                lcData.data.userContestRanking.rating
              );
              result.leetcode.badge = `${result.leetcode.rating} Rating`;
            } else {
              result.leetcode.badge = `${result.leetcode.totalSolved}+ Solved`;
            }
            return;
          }
        }
      } catch {
        // Fall back to alfa-leetcode-api
      }

      // REST fallback
      try {
        const fallbackRes = await fetchWithTimeout(
          "https://alfa-leetcode-api.onrender.com/userProfile/sirwagya",
          { headers: { "User-Agent": "PortfolioEdge/1.0" } },
          3500
        );
        if (fallbackRes.ok) {
          const data = await fallbackRes.json();
          if (data && typeof data.totalSolved === "number") {
            result.leetcode.totalSolved = data.totalSolved;
            result.leetcode.easySolved = data.easySolved ?? result.leetcode.easySolved;
            result.leetcode.mediumSolved =
              data.mediumSolved ?? result.leetcode.mediumSolved;
            result.leetcode.hardSolved =
              data.hardSolved ?? result.leetcode.hardSolved;
            if (data.ranking) result.leetcode.ranking = data.ranking;
            result.leetcode.badge = `${result.leetcode.totalSolved}+ Solved`;
          }
        }
      } catch {
        // Retain default
      }
    })(),
  ]);

  // Total solved cross-platform sum
  result.totalSolved =
    result.leetcode.totalSolved +
    result.codechef.solved +
    result.codeforces.solved;

  return new Response(JSON.stringify(result), {
    status: 200,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control":
        "public, max-age=1800, s-maxage=3600, stale-while-revalidate=86400",
      "Access-Control-Allow-Origin": "*",
    },
  });
}
