import React, { useState } from "react";
import { Table } from "./Table";
import axios from "axios";
import { useQuery } from "react-query";

const statsUrl = "/api/stats";

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

export function Body() {
  const [ticker, setTicker] = useState("");

  const {
    isLoading: isStatsLoading,
    error: statsError,
    data: statsData,
    refetch: statsRefetch,
  } = useStats(ticker);

  const handleChange = (e) => {
    setTicker(e.target.value);
  };

  const handleSubmit = (e) => {
    statsRefetch();
    e.preventDefault();
  };

  console.log("statsData", statsData);

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
