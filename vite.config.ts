import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'

function dsaStatsDevPlugin(): Plugin {
  return {
    name: 'dsa-stats-dev-server',
    configureServer(server) {
      server.middlewares.use('/api/dsa-stats', async (_req, res) => {
        res.setHeader('Content-Type', 'application/json; charset=utf-8')
        res.setHeader('Access-Control-Allow-Origin', '*')

        const fallback = {
          totalSolved: 370,
          leetcode: {
            username: 'sirwagya',
            totalSolved: 290,
            easySolved: 98,
            mediumSolved: 146,
            hardSolved: 46,
            ranking: 540022,
            rating: null,
            badge: '290+ Solved',
          },
          codechef: {
            username: 'sirwagya',
            rating: 1678,
            highestRating: 1678,
            stars: 3,
            division: 'Div 2',
            globalRank: 486,
            contests: 12,
            solved: 79,
            badge: '1678 · 3★ Coder',
          },
          codeforces: {
            username: 'sirwxgya',
            rating: null,
            rank: null,
            maxRating: null,
            solved: 1,
            badge: 'Active Contestant',
          },
          codolio: {
            username: 'sirwagya',
            badge: 'Verified · #8232',
          },
        }

        try {
          const [cfRes, ccRes, lcRes] = await Promise.allSettled([
            fetch('https://codeforces.com/api/user.info?handles=sirwxgya').then(r => r.json() as Promise<any>),
            fetch('https://codechef-api-gamma.vercel.app/handle/sirwagya').then(r => r.json() as Promise<any>),
            fetch('https://alfa-leetcode-api.onrender.com/userProfile/sirwagya').then(r => r.json() as Promise<any>),
          ])

          if (cfRes.status === 'fulfilled' && cfRes.value?.status === 'OK' && cfRes.value.result?.[0]) {
            const u = cfRes.value.result[0]
            fallback.codeforces.rating = u.rating || null
            fallback.codeforces.rank = u.rank || null
            fallback.codeforces.maxRating = u.maxRating || null
            if (u.rating) {
              const capRank = u.rank ? u.rank.charAt(0).toUpperCase() + u.rank.slice(1) : ''
              fallback.codeforces.badge = `${u.rating} · ${capRank}`
            }
          }

          if (ccRes.status === 'fulfilled' && ccRes.value?.currentRating) {
            fallback.codechef.rating = Number(ccRes.value.currentRating)
            fallback.codechef.highestRating = Number(ccRes.value.highestRating || ccRes.value.currentRating)
            if (ccRes.value.stars) {
              const num = parseInt(String(ccRes.value.stars), 10)
              if (!isNaN(num)) fallback.codechef.stars = num
            }
            if (Array.isArray(ccRes.value.ratingData) && ccRes.value.ratingData.length > 0) {
              fallback.codechef.contests = ccRes.value.ratingData.length
              const latest = ccRes.value.ratingData[ccRes.value.ratingData.length - 1]
              if (latest?.rank) fallback.codechef.globalRank = parseInt(latest.rank, 10)
            }
            fallback.codechef.badge = `${fallback.codechef.rating} · ${fallback.codechef.stars}★ Coder`
          }

          if (lcRes.status === 'fulfilled' && typeof lcRes.value?.totalSolved === 'number') {
            fallback.leetcode.totalSolved = lcRes.value.totalSolved
            if (lcRes.value.easySolved !== undefined) fallback.leetcode.easySolved = lcRes.value.easySolved
            if (lcRes.value.mediumSolved !== undefined) fallback.leetcode.mediumSolved = lcRes.value.mediumSolved
            if (lcRes.value.hardSolved !== undefined) fallback.leetcode.hardSolved = lcRes.value.hardSolved
            if (lcRes.value.ranking) fallback.leetcode.ranking = lcRes.value.ranking
            fallback.leetcode.badge = `${fallback.leetcode.totalSolved}+ Solved`
          }

          fallback.totalSolved = fallback.leetcode.totalSolved + fallback.codechef.solved + fallback.codeforces.solved
        } catch {
          // Serve baseline on error
        }

        res.end(JSON.stringify(fallback))
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), dsaStatsDevPlugin()],
  base: '/',
})
