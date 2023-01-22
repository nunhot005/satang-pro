export interface Ticker {
  readonly askPrice: string;
  readonly bidPrice: string;
  readonly closeTime: number;
  readonly count: number;
  readonly firstId: number;
  readonly highPrice: string;
  readonly lastId: number;
  readonly lastPrice: string;
  readonly lastQty: string;
  readonly lowPrice: string;
  readonly openPrice: string;
  readonly openTime: number;
  readonly prevClosePrice: string;
  readonly priceChange: string;
  readonly priceChangePercent: string;
  readonly quoteVolume: string;
  readonly symbol: string;
  readonly volume: string;
  readonly weightedAvgPrice: string;
}

export interface Exchange {
  id: string;
  name: string;
}

export type Result<T> =
  | {
      type: "loading";
    }
  | { type: "error"; error?: Error }
  | { type: "success"; data: T };

export type State = {
  selectedExchangeId: string | null;
  exchanges: Exchange[];
  ticker: Result<Ticker | null>;
  // tickers: Ticker[];
};

export type TickerAction = {
  type: string;
  ticker: Ticker;
};

export type DispatchType = (args: TickerAction) => TickerAction;
