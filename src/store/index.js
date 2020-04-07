import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import reducer from "../reducers";
import mySaga from "../saga";
import logger from "redux-logger";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
export default () => {
  let store = createStore(reducer, applyMiddleware(sagaMiddleware, logger));
  sagaMiddleware.run(mySaga);
  return { store };
};
