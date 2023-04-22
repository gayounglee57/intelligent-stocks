import React from "react";
import { Card } from "./Card";
import { en } from "../en";
import {
  getMainStats,
  getLatestLongTermDebt,
  getLatestLiabilities,
  getEpsEvaluation,
  getLiabilitesEvaluation,
  getLongTermDebtEvaluation,
  getBookValueEvaluation,
  getPeRatioEvaluation,
} from "../utils/utils";

export const Table = ({ statsData, balanceData }) => {
  const defaultKeyStatistics =
    statsData?.quoteSummary?.result[0].defaultKeyStatistics;
  const timeSeries = balanceData?.timeSeries;
  const priceValue = balanceData?.price?.regularMarketPrice?.raw;
  const { sharesOutstanding, epsMostRecent, epsTtm, bookValue, totalAssets } =
    getMainStats(defaultKeyStatistics);
  const latestLongTermDebt: number = getLatestLongTermDebt(timeSeries);
  const totalDebt: number = getLatestLiabilities(timeSeries);
  const epsEvaluation = getEpsEvaluation(epsMostRecent, epsTtm);
  const bookValueEvaluation = getBookValueEvaluation(bookValue, priceValue);
  const liabilitiesEvaluation = getLiabilitesEvaluation(totalAssets, totalDebt);
  const peRatioEvaluation = getPeRatioEvaluation(
    epsMostRecent,
    epsTtm,
    priceValue
  );
  const longTermDebtEvaluation = getLongTermDebtEvaluation(
    bookValue,
    totalAssets,
    latestLongTermDebt,
    sharesOutstanding
  );

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 p-8 pt-10">
      <Card title={en.criteria.eps} emoji={epsEvaluation} />
      <Card title={en.criteria.bookValue} emoji={bookValueEvaluation} />
      <Card title={en.criteria.liabilities} emoji={liabilitiesEvaluation} />
      <Card title={en.criteria.pe} emoji={peRatioEvaluation} />
      <Card title={en.criteria.debt} emoji={longTermDebtEvaluation} />
    </div>
  );
};
