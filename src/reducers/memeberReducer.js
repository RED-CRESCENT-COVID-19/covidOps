import initialState from "./intitialState";
import {
  START_LOADING,
  CREATE_MEMEBER_SUCCESS,
  CREATE_MEMEBER_FAIL,
  TOGGLE_RESPONSE,
  STOP_LOADING
} from "../actions/index";

export default (memeberReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_LOADING:
      return {
        ...state,
        loading: true,
        response: false
      };
    case STOP_LOADING:
      return {
        ...state,
        loading: false
      };
    case TOGGLE_RESPONSE:
      return {
        ...state,
        response: false
      };
    case CREATE_MEMEBER_SUCCESS:
      return {
        ...state,
        error: false,
        response: true
      };
    case CREATE_MEMEBER_FAIL:
      return {
        ...state,
        message: "fail",
        error: true,
        response: true
      };

    default:
      return state;
  }
});
