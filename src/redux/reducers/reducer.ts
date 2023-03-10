import { Exchange, State, Ticker, TickerAction } from "../../model/Ticker";
import {
  GET_TICKER_ERROR,
  GET_TICKER_FETCH,
  GET_TICKER_SUCCESS,
  SET_TICKER,
} from "../actions/actionTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: State = {
  selectedExchangeId: null,
  exchanges: [],
  ticker: {
    type: "loading",
  },
  // tickers: [],
};

// export const tickerSlice = createSlice({
//   name: "ticker",
//   initialState,
//   reducers: {
//     setSelectedExchangeId: (state, action: PayloadAction<string>) => {
//       state.selectedExchangeId = action.payload;
//     },
//     setExchanges: (state, action: PayloadAction<Exchange[]>) => {
//       state.exchanges = action.payload;
//     },
//     setTicker: (state, action: PayloadAction<Ticker>) => {
//       state.ticker = action.payload;
//     },
//   },
// });

// export const { setSelectedExchangeId, setExchanges, setTicker } =
//   tickerSlice.actions;

// export const tickerReducer = tickerSlice.reducer;

const myReducer = (state: State = initialState, action: any): State => {
  switch (action.type) {
    case GET_TICKER_FETCH:
      return { ...state, ticker: { type: "loading" } };
    case GET_TICKER_SUCCESS:
      return {
        ...state,
        ticker: { type: "success", data: action.payload.ticker },
      };
    case GET_TICKER_ERROR:
      return {
        ...state,
        ticker: { type: "error", error: action.payload.error },
      };
    default:
      return state;
  }
};

export default myReducer;
