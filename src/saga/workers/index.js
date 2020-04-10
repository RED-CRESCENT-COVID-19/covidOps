import { put, call } from 'redux-saga/effects';
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
	wipeData,
	getStats,
} from '../../actions';

import { getStatsHelper } from './helpers/getStats';
import { getHouseHoldDetails } from './helpers/getHouseHoldDetails';
import { getAllHouses } from './helpers/getAllHouses';
import { createMember } from './helpers/createMember';
import { createHome } from './helpers/createHome';
import { syncData } from './helpers/syncData';
import { wipeDatabase, initializeDatabase } from './helpers/dbQueries';
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

export function* syncDataWorker() {
	yield put(startLoading());
	yield call(syncData);
	yield put(wipeData());
}

export function* wipeDataWorker() {
	yield call(wipeDatabase);
	yield call(initializeDatabase);
	yield put(getStats());
}
