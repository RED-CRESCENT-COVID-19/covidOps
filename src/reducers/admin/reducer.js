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

const verificationCodeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FIRST_CODE:
      console.log("payload of ADD_FIRST_CODE is: ", payload);
      return { ...state, codeFirstPart: payload };

    case ADD_SECOND_CODE:
      console.log("payload of ADD_SECOND_CODE is: ", payload);
      return { ...state, codeSecondPart: payload };

    case VERIFY_CODE:
      console.log("payload of VERIFY_CODE is: ", payload);
      return { ...state, isCodeValid: payload };

    case IS_LOADING:
      console.log("payload of IS_LOADING is: ", payload);
      return { ...state, isLoading: payload };

    case HANDLE_ERROR:
      console.log("payload of HANDLE_ERROR is: ", payload);
      return {
        ...state,
        errorMessage: payload.errorMessage,
        error: payload.error
      };

    default:
      return state;
  }
};

export default verificationCodeReducer;
