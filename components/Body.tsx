import React, { useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";

import { Table } from "./Table";
import { TransitionText } from "./TransitionText";

import { mockStatsData } from "../__tests__/mockStatsData";
import { mockBalanceData } from "../__tests__/mockBalanceData";

const statsUrl = "/api/stats";
const balanceUrl = "/api/balanceSheet";

// can i move to hooks folder and create a hook to use for useBalanceSheet as well?
function useStats(symbol: string) {
  return useQuery(
    "stats-" + symbol,
    async () => {
      const { data } = await axios.get(statsUrl, { params: { symbol } });
      return data;
    },
    { enabled: false, staleTime: 1000 * 60 * 60 }
  );
}

function useBalance(symbol: string) {
  return useQuery(
    "balance-sheet-" + symbol,
    async () => {
      const { data } = await axios.get(balanceUrl, { params: { symbol } });
      return data;
    },
    { enabled: false, staleTime: 1000 * 60 * 60 }
  );
}

function getMockStatsData() {
  return mockStatsData;
}
function getMockBalanceData() {
  return mockBalanceData;
}

export function Body() {
  const [ticker, setTicker] = useState("");

  const {
    isLoading: isStatsLoading,
    error: statsError,
    data: statsData,
    refetch: statsRefetch,
  } = useStats(ticker);
  const {
    isLoading: isBalanceLoading,
    error: balanceError,
    data: balanceData,
    refetch: balanceRefetch,
  } = useBalance(ticker);

  const handleChange = (e) => {
    setTicker(e.target.value);
  };

  const handleSubmit = (e) => {
    statsRefetch();
    balanceRefetch();
    e.preventDefault();
  };

  // const statsData = getMockStatsData();
  // const balanceData = getMockBalanceData();
  // console.log("statsData", statsData);
  // console.log("balanceSheetData", balanceData);

  if (isStatsLoading || isBalanceLoading)
    return <TransitionText text={"Loading"} />;
  if (statsError || balanceError) return <TransitionText text={"Error"} />;

  return (
    <div className="p-4 mb-0 text-center flex flex-col items-center">
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className="flex justify-between space-x-4 px-5 w-full max-w-xs h-10"
      >
        <input
          type="text"
          value={ticker}
          required
          onChange={(e) => {
            handleChange(e);
          }}
          className="rounded-md border border-gray-300 focus:ring-0 px-4 flex-auto min-w-0 sm:text-sm"
        />
        <button
          type="submit"
          className="bg-primary text-white border-primary hover:text-black hover:bg-white py-2 w-28 text-sm border-solid border rounded-md focus:outline-none transition-all ease-in-out duration-150"
        >
          Submit
        </button>
      </form>

      <Table />
    </div>
  );
}
