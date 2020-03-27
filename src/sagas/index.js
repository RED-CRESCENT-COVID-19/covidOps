import { takeEvery } from 'redux-saga/effects'
import authenticationApi from '../services/authenticationApi'

/* ------------- Types ------------- */
import { VerifyPhoneTypes } from '../reducers/verifyReducer'

/* ------------- Sagas ------------- */
import { verifyPhoneNumber } from './phoneVerifySaga'

/* ------------- API ------------- */
const verifyPhoneApi = authenticationApi.verifyPhone()
const verifyCodeApi = authenticationApi.verifyCode()

/* ------------- Connect Types To Sagas ------------- */
export default function* root() {
    console.log('Taking every')
    yield [
        takeEvery(VerifyPhoneTypes.GET_CODE_REQUEST, verifyPhoneNumber, verifyPhoneApi),
    ]
}