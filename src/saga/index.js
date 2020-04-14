import { fork } from "redux-saga/effects";

//import watchers
import {
  createHomeWatcher,
  deleteHomeWatcher,
  createMemberWatcher,
  getHomesWatcher,
  getHouseHoldDetailWatcher,
  getStatsWatcher,
  syncDataWatcher,
  wipeDataWatcher
} from "./watchers";

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield fork(wipeDataWatcher);
  yield fork(syncDataWatcher);
  yield fork(getStatsWatcher);
  yield fork(createHomeWatcher);
  yield fork(deleteHomeWatcher);
  yield fork(getHomesWatcher);
  yield fork(getHouseHoldDetailWatcher);
  yield fork(createMemberWatcher);
}
