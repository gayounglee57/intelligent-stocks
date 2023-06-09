interface IRawFormatted {
  raw: number;
  fmt: string;
  longFmt?: string;
}

interface IDefaultKeyStatistics {
  sharesOutstanding: IRawFormatted;
  netIncomeToCommon: IRawFormatted;
  trailingEps: IRawFormatted;
  bookValue: IRawFormatted;
}

interface IMainStats {
  sharesOutstanding: number;
  epsTtm: number;
  bookValue: number;
  epsMostRecent: number;
  totalAssets: number;
}

interface IAnnualLongTermDebt {
  dataId: number;
  asOfDate: string;
  periodType: string;
  currencyCode: string;
  reportedValue: IRawFormatted;
}

export function getMainStats(
  defaultKeyStatistics: IDefaultKeyStatistics
): IMainStats {
  const sharesOutstanding: number = defaultKeyStatistics?.sharesOutstanding.raw;
  const netIncome: IRawFormatted = defaultKeyStatistics?.netIncomeToCommon;
  const epsTtm: number = defaultKeyStatistics?.trailingEps.raw;
  const bookValue: number = defaultKeyStatistics?.bookValue.raw;
  const epsMostRecent: number = netIncome?.raw / sharesOutstanding;
  const totalAssets: number = bookValue * sharesOutstanding;

  return {
    sharesOutstanding,
    epsTtm,
    bookValue,
    epsMostRecent,
    totalAssets,
  };
}

export function getBooleanEmoji(evaluation: boolean): string {
  return evaluation ? "✨" : "👎🏽";
}

export function getLatestLongTermDebt(timeSeries): number {
  const annualLongTermDebts: [IAnnualLongTermDebt] =
    timeSeries?.annualLongTermDebt;
  const latestLongTermDebtReport: IAnnualLongTermDebt =
    annualLongTermDebts[annualLongTermDebts?.length - 1];
  return latestLongTermDebtReport?.reportedValue?.raw;
}

export function getLatestLiabilities(timeSeries): number {
  const annualTotalLiabilities: [IAnnualLongTermDebt] =
    timeSeries?.annualTotalLiabilitiesNetMinorityInterest;
  const latestLiabilitiesReport: IAnnualLongTermDebt =
    annualTotalLiabilities[annualTotalLiabilities.length - 1];
  return latestLiabilitiesReport?.reportedValue?.raw;
}

export function getEpsEvaluation(epsMostRecent: number, epsTtm: number) {
  const epsBoolean = epsMostRecent > 0 && epsTtm > 0;
  return getBooleanEmoji(epsBoolean);
}

export function getLiabilitesEvaluation(
  totalAssets: number,
  totalDebt: number
) {
  const liabilitiesEvaluation = totalDebt * 2 < totalAssets;
  return getBooleanEmoji(liabilitiesEvaluation);
}

export function getLongTermDebtEvaluation(
  bookValue: number,
  totalAssets: number,
  latestLongTermDebt: number,
  sharesOutstanding: number
) {
  const financed = (totalAssets + latestLongTermDebt) / sharesOutstanding;
  const longTermDebtBoolean = bookValue / financed > 0.5;
  return getBooleanEmoji(longTermDebtBoolean);
}

export function getBookValueEvaluation(bookValue: number, priceValue: number) {
  const bookValueBoolean = priceValue < bookValue * 2;
  return getBooleanEmoji(bookValueBoolean);
}

export function getPeRatioEvaluation(
  epsMostRecent: number,
  epsTtm: number,
  priceValue: number
) {
  const peRatioMostRecent = priceValue / epsMostRecent;
  const peRatioTtm = priceValue / epsTtm;
  if (peRatioMostRecent < 0 || peRatioTtm < 0) {
    return getBooleanEmoji(false);
  }
  const peRatioBoolean = peRatioMostRecent <= 25 && peRatioTtm <= 25;
  return getBooleanEmoji(peRatioBoolean);
}
