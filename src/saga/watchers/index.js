import { takeLatest } from "redux-saga/effects";

//import house actions
import {
  CREATE_HOUSE,
  CREATE_MEMEBER,
  GET_ALL_HOUSES,
  GET_HOUSEHOLD_DETAIL,
  GET_STATS,
  SYNC_DATA,
  WIPE_DATABASE,
} from "../../actions";

//import saga workers
import {
  createHomeWorker,
  createMemberWorker,
  getHousesWorkers,
  getHouseHoldDetailWorker,
  getStatusWorker,
  syncDataWorker,
  wipeDataWorker,
} from "../workers";

export function* wipeDataWatcher() {
  yield takeLatest(WIPE_DATABASE, wipeDataWorker);
}

export function* syncDataWatcher() {
  yield takeLatest(SYNC_DATA, syncDataWorker);
}

export function* getStatsWatcher() {
  yield takeLatest(GET_STATS, getStatusWorker);
}

export function* createHomeWatcher() {
  yield takeLatest(CREATE_HOUSE, createHomeWorker);
}

export function* getHomesWatcher() {
  yield takeLatest(GET_ALL_HOUSES, getHousesWorkers);
}

export function* getHouseHoldDetailWatcher() {
  yield takeLatest(GET_HOUSEHOLD_DETAIL, getHouseHoldDetailWorker);
}

export function* createMemberWatcher() {
  yield takeLatest(CREATE_MEMEBER, createMemberWorker);
}
