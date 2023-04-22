import React, { useState } from "react";
import { Table } from "./Table";
import { TransitionText } from "./TransitionText";

import { mockStatsData } from "../__tests__/mockStatsData";
import { mockBalanceData } from "../__tests__/mockBalanceData";
import { MockTable } from "./MockTable";
import { useStats } from "../hooks/useStats";
import { useBalance } from "../hooks/useBalance";

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

  console.log("statsData", statsData);
  console.log("balanceData", balanceData);

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

      {statsData && balanceData ? (
        <Table statsData={statsData} balanceData={balanceData} />
      ) : (
        <MockTable />
      )}
    </div>
  );
}
