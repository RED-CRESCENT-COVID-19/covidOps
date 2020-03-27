import { takeLatest } from 'redux-saga/effects'
import authenticationApi from '../services/authenticationApi'

/* ------------- Types ------------- */
import { VerifyPhoneTypes } from '../reducers/verifyReducer'

/* ------------- Sagas ------------- */
import { verifyPhoneNumber } from './phoneVerifySaga'

/* ------------- API ------------- */
const verifyPhoneApi = authenticationApi.verifyPhone()

/* ------------- Connect Types To Sagas ------------- */
export default function* root() {
    yield [
        takeLatest(VerifyPhoneTypes.GET_CODE_REQUEST, verifyPhoneNumber, verifyPhoneApi),
    ]
}