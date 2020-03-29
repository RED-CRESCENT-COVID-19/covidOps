import initialState from './intitialState'
import {
    CREATE_MEMEBER 
} from '../actions/types'
export default (state = initialState, action) => {
    switch (action.type) {
        case CREATE_MEMEBER:
            return {...state};
            // return { ...state, memeber: action.payload };        
        default:
            return state;
    }
}