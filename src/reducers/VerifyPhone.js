import { createReducer } from 'reduxsauce'
// export const  = Types
// export default Creators

export const getCodeRequest = (state, action) => {
        
    return state.merge({ loading: true, error: false, errorMessage: '', phone:action.phone })
}

export const getCodeSuccess = (state, action) => {
    return state.merge({ loading: false, error: false, errorMessage: '', getCodeSuccess: action.codeSuccess })
}

export const getCodeFailure = (state, action) => {
    return state.merge({ loading: false, error: true, errorMessage: action.error })
}

export const reducer = createReducer(INITIAL_STATE, {
    [Types.GET_CODE_REQUEST]: getCodeRequest,
    [Types.GET_CODE_SUCCESS]: getCodeSuccess,
    [Types.GET_CODE_FAILURE]: getCodeFailure
})