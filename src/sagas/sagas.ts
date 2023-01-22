import { AxiosResponse } from "axios";
import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { Result, Ticker } from "../model/Ticker";
import {
  getTickerFetch,
  getTickerFetchError,
  getTickerFetchSuccess,
} from "../redux/actions/action";
import {
  GET_TICKER_FETCH,
  GET_TICKER_SUCCESS,
} from "../redux/actions/actionTypes";
import { tickerFetch } from "./api";

function* workGetTickerFetch(action: ReturnType<typeof getTickerFetch>) {
  const response: Result<Ticker> = yield call(
    tickerFetch,
    action.payload?.symbol
  );
  if (response.type == "success") {
    yield put(getTickerFetchSuccess({ ticker: response.data }));
  } else if (response.type == "error") {
    yield put(getTickerFetchError({ error: response.error }));
  }
}

function* mySaga() {
  yield all([takeLatest(GET_TICKER_FETCH, workGetTickerFetch)]);
}

export default mySaga;
