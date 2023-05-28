import { useQuery } from "react-query";
import axios from "axios";

const balanceUrl = "/api/balanceSheet";

export function useBalance(symbol: string) {
  return useQuery(
    "balance-sheet-" + symbol,
    async () => {
      const { data } = await axios.get(balanceUrl, { params: { symbol } });
      return data;
    },
    { enabled: false, staleTime: 1000 * 60 * 60 }
  );
}
