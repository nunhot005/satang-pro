import axios from "axios";
import { Ticker } from "../model/Ticker";

export const tickerFetch = async (symbol?: string) => {
  try {
    // await new Promise((r) => setTimeout(r, 2000));
    const response = await axios.get<Ticker>(
      "https://satangcorp.com/api/v3/ticker/24hr",
      {
        params: { symbol },
      }
    );
    const data = response.data;
    return data;
  } catch (e) {
    console.log(e);
  }
};
