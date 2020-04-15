import initialState from "./intitialState";
import {
  CREATE_HOUSE_SUCCESS,
  CREATE_HOUSE_FAIL,
  START_LOADING,
  TOGGLE_RESPONSE,
  SET_HOUSES,
  SET_HOUSEHOLD_DETAIL,
  STOP_LOADING,
  DELETE_HOUSE,
  DELETE_HOUSE_SUCCESS,
  DELETE_HOUSE_FAIL
} from "../actions/index";

export default (homeReducer = (state = initialState, action) => {
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
    case SET_HOUSES:
      return {
        ...state,
        error: false,
        response: true,
        data: action.payload.data.reverse()
      };
    case SET_HOUSEHOLD_DETAIL:
      return {
        ...state,
        error: false,
        response: true,
        data: action.payload.data.reverse()
      };
    case CREATE_HOUSE_SUCCESS:
      return {
        ...state,
        error: false,
        response: true,
        data: action.payload
      };
    case CREATE_HOUSE_FAIL:
      return {
        ...state,
        message: "fail",
        error: true,
        response: true
      };
    case DELETE_HOUSE_SUCCESS:
      const index = state.data
        .map(function(item) {
          return item.id;
        })
        .indexOf(action.payload);

      if (index > -1) {
        state.data.splice(index, 1);
      }

      return {
        ...state,
        error: false,
        response: true,
        data: state.data
      };
    case DELETE_HOUSE_FAIL:
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
