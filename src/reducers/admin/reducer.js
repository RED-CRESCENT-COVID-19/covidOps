/*
 * Admin Reducer
 */

import {
  ADD_FIRST_CODE,
  ADD_SECOND_CODE,
  VERIFY_CODE,
  HANDLE_ERROR,
  IS_LOADING
} from "./constants";

const initialState = {
  codeFirstPart: "",
  codeSecondPart: "",
  isCodeValid: false,
  isLoading: false,
  error: false,
  errorMessage: ""
};

const adminReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FIRST_CODE:
      return { ...state, codeFirstPart: payload };

    case ADD_SECOND_CODE:
      return { ...state, codeSecondPart: payload };

    case VERIFY_CODE:
      return { ...state, isCodeValid: payload };

    case IS_LOADING:
      return { ...state, isLoading: payload };

    case HANDLE_ERROR:
      return {
        ...state,
        errorMessage: payload.errorMessage,
        error: payload.error
      };

    default:
      return state;
  }
};

export default adminReducer;
