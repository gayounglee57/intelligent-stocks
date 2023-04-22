import { useQuery } from "react-query";
import axios from "axios";

const statsUrl = "/api/stats";

export function useStats(symbol: string) {
  return useQuery(
    "stats-" + symbol,
    async () => {
      const { data } = await axios.get(statsUrl, { params: { symbol } });
      return data;
    },
    { enabled: false, staleTime: 1000 * 60 * 60 }
  );
}
