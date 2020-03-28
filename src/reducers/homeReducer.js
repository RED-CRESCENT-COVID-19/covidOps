import initialState from './intitialState'
export default (state = initialState, action) => {
    switch (action.type) {
        case CREATE_HOUSE:
            return { ...state, house: action.payload };        
        default:
            return state;
    }
}