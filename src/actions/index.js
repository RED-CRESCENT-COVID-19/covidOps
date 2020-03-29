
// Service
import Http from "../services/HttpService";
import { CREATE_HOUSE,CREATE_HOUSE_SUCCESS,
    CREATE_HOUSE_FAIL } from './types';



export const createHome = (params,token) => {
    return function (dispatch){
        dispatch({type:CREATE_HOUSE})
        Http.post("house", params ,{ headers: { 'access-token': token }})
        .then(response=>{
                dispatch({type:CREATE_HOUSE_SUCCESS,payload:response})
        })
            .catch(err=>{
                dispatch({type:CREATE_HOUSE_FAIL})
            })
    }
}
      

// export const createMemeber = (params,token) => {
  
//     return (dispatch) => {
//         Http.post("house/", params,{ headers: { 'access-token': token }})
//             .then(response => {
//                 if (response.status == 'ok') {
//                     console.log(response)
//                     // dispatch({ type: CREATE_MEMEBER, response });
//                 } else {
//                     var message = "";
//                     if (response.status == 401) {
//                        console.log(response)
//                     } else {
                       
//                     }  
//                 }
//             })
//             .catch(err => {
                
//             });
//     }
// }
