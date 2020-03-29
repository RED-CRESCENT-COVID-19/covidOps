
// Service
import Http from "../services/HttpService";
import { NavigationActions } from 'react-navigation';
// HOUSE TYPES
export const CREATE_HOUSE = 'CREATE_HOUSE';
export const CREATE_HOUSE_SUCCESS = 'CREATE_HOUSE_SUCCESS';
export const CREATE_HOUSE_FAIL ='CREATE_HOUSE_FAIL';


// MEMEBER TYPES
export const CREATE_MEMEBER = 'CREATE_MEMEBER';
export const CREATE_MEMEBER_SUCCESS = 'CREATE_MEMEBER_SUCCESS';
export const CREATE_MEMEBER_FAIL ='CREATE_MEMEBER_FAIL';

const createHouseSuccess = (dispatch,response) =>{
    console.log(response)
    dispatch({type:CREATE_HOUSE_SUCCESS, payload: response })
    dispatch(NavigationActions.navigate({ routeName: 'HouseHoldDetails' }))
}
const createHouseFail = (dispatch,err) =>{
    console.log(err)
    dispatch({type:CREATE_HOUSE_FAIL, error:err })
    console.log(NavigationActions)
    // .then(dispatch(NavigationActions.navigate({ routeName: 'HouseHoldDetails' })))
   
}

export const createHome = ({params,token}) => {
    console.log(params,token)
    return function (dispatch){
        dispatch({type:CREATE_HOUSE})
        Http.post("house/", params ,{ headers: { 'access-token': token }})
        .then(response=>createHouseSuccess(dispatch,response))
        .catch(err=>createHouseFail(dispatch,err))
    }
}

const createMemeberSuccess = (dispatch,response) =>{
    console.log(response)
    dispatch({type:CREATE_MEMEBER_SUCCESS, payload: response });
}
const createMemeberFail = (dispatch,err) =>{
    console.log(err)
    dispatch({type:CREATE_MEMEBER_FAIL, error:err });
}
export const createMemeber = (params,token) => {
    console.log(params,token)
    return function (dispatch){
        dispatch({type:CREATE_MEMEBER})
        Http.post("person", params ,{ headers: { 'access-token': token }})
        .then(response=>createMemeberSuccess(dispatch,response))
            .catch(err=>createMemeberFail(dispatch,err))
    }
}
   
      

