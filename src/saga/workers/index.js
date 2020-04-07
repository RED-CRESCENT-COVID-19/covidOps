import { put, call } from "redux-saga/effects";
import {
  createHouseSuccess,
  createHouseFail,
  createMemeberFail,
  createMemeberSuccess,
  startLoading,
  setHouses,
  setHouseHoldDetail,
  stopLoading,
  setStats,
} from "../../actions";
import {
  createHome,
  createMember,
  getAllHouses,
  getHouseHoldDetails,
  getStatsHelper,
} from "./helpers";

export function* getStatusWorker(action) {
  yield put(startLoading());
  const result = yield call(getStatsHelper, action);
  if (result.ok) {
    yield put(setStats(result));
    yield put(stopLoading());
  } else {
    yield put(stopLoading());
  }
}

export function* createHomeWorker(action) {
  yield put(startLoading());
  const result = yield call(createHome, action);
  if (result.ok) {
    yield put(createHouseSuccess(result));
    yield put(stopLoading());
  } else {
    yield put(createHouseFail(result));
    yield put(stopLoading());
  }
}

export function* getHousesWorkers(action) {
  yield put(startLoading());
  const result = yield call(getAllHouses, action);
  if (result.ok) {
    yield put(setHouses(result));
    yield put(stopLoading());
  } else {
    yield put(createHouseFail(result));
    yield put(stopLoading());
  }
}

export function* getHouseHoldDetailWorker(action) {
  yield put(startLoading());
  const result = yield call(getHouseHoldDetails, action);
  if (result.ok) {
    yield put(setHouseHoldDetail(result));
    yield put(stopLoading());
  } else {
    yield put(createHouseFail(result));
    yield put(stopLoading());
  }
}

export function* createMemberWorker(action) {
  yield put(startLoading());
  const result = yield call(createMember, action);
  if (result.ok) {
    yield put(createMemeberSuccess(result));
    yield put(stopLoading());
  } else {
    yield put(createMemeberFail(result));
    yield put(stopLoading());
  }
}
