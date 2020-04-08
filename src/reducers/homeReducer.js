import initialState from "./intitialState";
import {
  CREATE_HOUSE,
  CREATE_HOUSE_SUCCESS,
  CREATE_HOUSE_FAIL,
} from "../actions/index";

export default (homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_HOUSE:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case CREATE_HOUSE_SUCCESS:
      return {
        ...state,
        message: "success",
        loading: false,
        error: "",
        data: action.payload,
      };
    case CREATE_HOUSE_FAIL:
      return {
        ...state,
        message: "fail",
        loading: false,
        error: "House creation Failed",
      };

    default:
      return state;
  }
});
