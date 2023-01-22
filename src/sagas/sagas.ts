import { AxiosResponse } from "axios";
import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { Ticker } from "../model/Ticker";
import { getTickerFetch, getTickerFetchSuccess } from "../redux/actions/action";
import {
  GET_TICKER_FETCH,
  GET_TICKER_SUCCESS,
} from "../redux/actions/actionTypes";
import { tickerFetch } from "./api";

function* workGetTickerFetch(action: ReturnType<typeof getTickerFetch>) {
  const response: Ticker = yield call(tickerFetch, action.payload?.symbol);
  console.log("response", response);
  yield put(getTickerFetchSuccess({ ticker: response }));
}

function* mySaga() {
  yield all([takeLatest(GET_TICKER_FETCH, workGetTickerFetch)]);
}

export default mySaga;
