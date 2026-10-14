import { useState, useEffect, useCallback } from "react";
import {
  type DsaStatsData,
  INITIAL_DSA_STATS,
  getCachedDsaStats,
  fetchDsaStats,
} from "../services/dsaStats";

export function useDsaStats() {
  const [stats, setStats] = useState<DsaStatsData>(() => {
    return getCachedDsaStats() || INITIAL_DSA_STATS;
  });
  const [isLoading, setIsLoading] = useState<boolean>(() => !getCachedDsaStats());
  const [isLive, setIsLive] = useState<boolean>(() => !!getCachedDsaStats());

  useEffect(() => {
    let mounted = true;
    fetchDsaStats()
      .then((data) => {
        if (mounted) {
          setStats(data);
          setIsLive(true);
          setIsLoading(false);
        }
      })
      .catch(() => {
        if (mounted) {
          setIsLoading(false);
        }
      });

    return () => {
      mounted = false;
    };
  }, []);

  const refresh = useCallback(async () => {
    setIsLoading(true);
    try {
      const data = await fetchDsaStats(true);
      setStats(data);
      setIsLive(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    stats,
    isLoading,
    isLive,
    refresh,
  };
}
