import { call, put } from 'redux-saga/effects'
import VerifyPhoneActions from '../reducers/verifyReducer'

export function* verifyPhoneNumber(api, action) {
    try {
        const response = yield call(api.verifyPhone(number))
        console.log("response", response)
        if (response.ok) {          
            yield put(VerifyPhoneActions.getCodeSuccess({codeSuccess:'200'}))
        } else {
            yield put(VerifyPhoneActions.getCodeFailure('Connection problems :('))
        }
    } catch (error) {
        yield put(VerifyPhoneActions.getCodeFailure(error.message))
    }
}