import initialState from '../initialState'
export default (state = initialState, action) => {
    switch (action.type) {
        case CREATE_MEMEBER:
            return { ...state, memeber: action.payload };        
        default:
            return state;
    }
}