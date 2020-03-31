import { createReducer, createActions } from 'reduxsauce'




export const  = Types
export default Creators


/* ------------- Reducers ------------- */
// Get Phone Code
export const getCodeRequest = (state, action) => {
        
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