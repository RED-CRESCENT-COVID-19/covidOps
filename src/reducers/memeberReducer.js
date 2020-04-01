import initialState from './intitialState'
import {
    CREATE_MEMEBER,
    CREATE_MEMEBER_SUCCESS,
    CREATE_MEMEBER_FAIL 
} from '../actions/index'

export default memeberReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case CREATE_MEMEBER:
            return { 
                ...state,
                loading:true,
                error:'' 
            };
        case CREATE_MEMEBER_SUCCESS:
            return { 
                ...state,
                message:'success',
                loading:false,
                error:'',
                data:action.payload
         };
        case  CREATE_MEMEBER_FAIL:
            return {
                ...state,
                message:'fail',
                loading:false,
                error:'House creation Failed'
        }
        
        default:
            return state;
    }
}