/*
 * Admin Actions
 *
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import HS from "../../services/HttpService";

import { ADD_FIRST_CODE } from "./constants";

export function addFirstCode(payload) {
  return {
    type: ADD_FIRST_CODE,
    payload
  };
}

export function verificationCode(code) {
  console.log("verifyCode is calling with code is: ", code);
  return function(dispatch) {
    dispatch(handleIsLoading(true));
    return HS.post("/verificationCode", { code: code })
      .then(res => {
        console.log("verifyCode is response is: ", res);

        dispatch(handleIsLoading(false));
        dispatch(verifyCode(true));
      })
      .catch(e => {
        console.log("verificationCode error is: ", e.response.data.message);
        dispatch(handleIsLoading(false));
        dispatch(
          handleError({ errorMessage: e.response.data.message, error: true })
        );
      });
  };
}
