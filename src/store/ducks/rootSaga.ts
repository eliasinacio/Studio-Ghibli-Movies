import { all, takeLatest } from "@redux-saga/core/effects";

import { FilmsTypes } from "./films/types";
import { load } from "./films/sagas";

export default function* rootSaga(): any{
  return yield all([
    takeLatest(FilmsTypes.LOAD_REQUEST, load),
  ])
}