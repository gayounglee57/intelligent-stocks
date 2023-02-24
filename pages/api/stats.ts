import axios, { AxiosRequestConfig } from "axios";

const statsUrl = "https://yh-finance.p.rapidapi.com/stock/v4/get-statistics";

function getOptions(symbol: string, url: string): AxiosRequestConfig<any> {
  return {
    method: "GET",
    url,
    params: { symbol },
    headers: {
      "x-rapidapi-host": "yh-finance.p.rapidapi.com",
      "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
    },
  };
}

async function stats(req, res) {
  console.log("req", req.query);
  const { query } = req;
  const options = getOptions(query.symbol, statsUrl);
  const { data } = await axios.get(statsUrl, options);
  res.json(data);
}

export default stats;
