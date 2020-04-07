import { fork } from "redux-saga/effects";

//import watchers
import {
  createHomeWatcher,
  createMemberWatcher,
  getHomesWatcher,
  getHouseHoldDetailWatcher,
  getStatsWatcher,
} from "./watchers";

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield fork(getStatsWatcher);
  yield fork(createHomeWatcher);
  yield fork(getHomesWatcher);
  yield fork(getHouseHoldDetailWatcher);
  yield fork(createMemberWatcher);
}
