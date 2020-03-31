import { call, put } from 'redux-saga/effects'
import VerifyPhoneActions from '../actions'

export function* verifyPhoneNumber(verifyPhoneApi, action) {
    try {
        const response = yield call(verifyPhoneApi.verifyPhone(number))
        console.log("response", response)
        if (response.ok) {          
            yield put(VerifyPhoneActions.getCodeSuccess({codeSuccess:'204'}))
        } else {
            yield put(VerifyPhoneActions.getCodeFailure('Connection problems :('))
        }
    } catch (error) {
        yield put(VerifyPhoneActions.getCodeFailure(error.message))
    }
}