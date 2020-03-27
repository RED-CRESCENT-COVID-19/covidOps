import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
    getCodeRequest: null,
    getCodeSuccess: ['codeSuccess'],
    getCodeFailure: ['error']
})


/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
  fetching: true,
  errorMessage: '',
  error: false,
  getCodeSuccess:''
})


export const VerifyPhoneTypes = Types
export default Creators


/* ------------- Reducers ------------- */
// Get Phone Code
export const getCodeRequest = (state, action) => {
        
    const phoneval  = '03132111334'
    return state.merge({ fetching: true, error: false, errorMessage: '', phone:phoneval })
}

export const getCodeSuccess = (state, action) => {
    return state.merge({ fetching: false, error: false, errorMessage: '', getCodeSuccess: action.codeSuccess })
}

export const getCodeFailure = (state, action) => {
    return state.merge({ fetching: false, error: true, errorMessage: action.error })
}
// Verify Code 
/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
    [Types.GET_CODE_REQUEST]: getCodeRequest,
    [Types.GET_CODE_SUCCESS]: getCodeSuccess,
    [Types.GET_CODE_FAILURE]: getCodeFailure
})