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
  DELETE_HOUSE_FAIL,
} from "../actions/index";

export default (homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_LOADING:
      return {
        ...state,
        loading: true,
        response: false,
      };
    case STOP_LOADING:
      return {
        ...state,
        loading: false,
      };
    case TOGGLE_RESPONSE:
      return {
        ...state,
        response: false,
      };
    case SET_HOUSES:
      return {
        ...state,
        error: false,
        response: true,
        data: action.payload.data.reverse(),
      };
    case SET_HOUSEHOLD_DETAIL:
      return {
        ...state,
        error: false,
        response: true,
        data: action.payload.data.reverse(),
      };
    case CREATE_HOUSE_SUCCESS:
      return {
        ...state,
        error: false,
        response: true,
        data: action.payload,
      };
    case CREATE_HOUSE_FAIL:
      // given below is the response error object of understanding

      //       {type: "CREATE_HOUSE_FAIL", error: {…}, @@redux-saga/SAGA_ACTION: true}
      // error:
      // config: {url: "house", method: "post", data: "{"address":"Gjxkgxkyf","id":"sadasdads","lat":33.7266066,"lng":73.0863117,"is_contacted":1}", headers: {…}, baseURL: "http://muhafizapi-env.eba-svzyqh3n.us-east-1.elasticbeanstalk.com/v1/", …}
      // data: {message: "Something went wrong. Try again", details: Array(1)}
      // duration: 290
      // headers: {cache-control: "public, max-age=0", etag: "W/"4c-SYpg0JwHyc/37lvZ/FC2jW0ZJiA"", access-control-expose-headers: "X-Total-Count, Content-Range, Content-Disposition,…ey, content-length, x-decompressed-content-length", access-control-allow-headers: "Origin, X-Requested-With, Content-Type, Accept, Authorization", access-control-allow-methods: "GET,HEAD,OPTIONS,POST,PUT,DELETE", …}
      // ok: false
      // originalError: Error: Request failed with status code 500 at createError (http://192.168.1.4:19001/node_modules/expo/AppEntry.bundle?platform=android&dev=true&minify=false&hot=false:161247:17) at settle (http://192.168.1.4:19001/node_modules/expo/AppEntry.bundle?platform=android&dev=true&minify=false&hot=false:161237:14) at EventTarget.handleLoad (http://192.168.1.4:19001/node_modules/expo/AppEntry.bundle?platform=android&dev=true&minify=false&hot=false:161135:9) at EventTarget.dispatchEvent (http://192.168.1.4:19001/node_modules/expo/AppEntry.bundle?platform=android&dev=true&minify=false&hot=false:32411:27) at EventTarget.setReadyState (http://192.168.1.4:19001/node_modules/expo/AppEntry.bundle?platform=android&dev=true&minify=false&hot=false:31480:14) at EventTarget.__didCompleteResponse (http://192.168.1.4:19001/node_modules/expo/AppEntry.bundle?platform=android&dev=true&minify=false&hot=false:31322:16) at http://192.168.1.4:19001/node_modules/expo/AppEntry.bundle?platform=android&dev=true&minify=false&hot=false:31432:47 at RCTDeviceEventEmitter.emit (http://192.168.1.4:19001/node_modules/expo/AppEntry.bundle?platform=android&dev=true&minify=false&hot=false:3443:37) at MessageQueue.__callFunction (http://192.168.1.4:19001/node_modules/expo/AppEntry.bundle?platform=android&dev=true&minify=false&hot=false:2771:44) at http://192.168.1.4:19001/node_modules/expo/AppEntry.bundle?platform=android&dev=true&minify=false&hot=false:2484:17
      // problem: "SERVER_ERROR"
      // status: 500
      // __proto__: Object
      // type: "CREATE_HOUSE_FAIL"
      console.log("action.error.data.message;", action);
      return {
        ...state,
        // message: action.error.data.message,
        message: "failed to create house",
        error: true,
        response: true,
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
        data: state.data,
      };
    case DELETE_HOUSE_FAIL:
      return {
        ...state,
        message: "failed to delete house",
        error: true,
        response: true,
      };

    default:
      return state;
  }
});
