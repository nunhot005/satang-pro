import { Ticker } from "../../model/Ticker";
import {
  GET_TICKER_FETCH,
  GET_TICKER_SUCCESS,
  GET_TICKER_ERROR,
} from "./actionTypes";

type GetTickerApiParams = { symbol?: string };
export const getTickerFetch = (payload?: GetTickerApiParams) => ({
  type: GET_TICKER_FETCH,
  payload,
});

type GetTickerSuccessPayload = { ticker: Ticker };
export const getTickerFetchSuccess = (payload: GetTickerSuccessPayload) => ({
  type: GET_TICKER_SUCCESS,
  payload,
});

type GetTickerError = { error?: Error };
export const getTickerFetchError = (payload: GetTickerError) => ({
  type: GET_TICKER_ERROR,
  payload,
});
