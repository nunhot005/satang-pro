import axios from "axios";
import { Result, Ticker } from "../model/Ticker";

export const tickerFetch = async (symbol?: string): Promise<Result<Ticker>> => {
  try {
    // await new Promise((r) => setTimeout(r, 2000));
    const response = await axios.get<Ticker>(
      "https://satangcorp.com/api/v3/ticker/24hr",
      {
        params: { symbol },
      }
    );
    const data = response.data;
    // throw "ERROR";
    return { data, type: "success" };
  } catch (e) {
    console.log(e);
    return { type: "error", error: e as unknown as Error };
  }
};
