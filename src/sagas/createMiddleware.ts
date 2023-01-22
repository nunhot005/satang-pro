import { applyMiddleware, createStore, combineReducers } from "redux";
import mySaga from "./sagas";
import createSagaMiddleware from "@redux-saga/core";
import myFirstReducer from "../redux/reducers/reducer";

const sagaMiddleWare = createSagaMiddleware();
const rootReducer = combineReducers({ myFirstReducer });
export const myStore = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleWare)
);
sagaMiddleWare.run(mySaga);

export type RootState = ReturnType<typeof myStore.getState>;
export type AppDispatch = typeof myStore.dispatch;
