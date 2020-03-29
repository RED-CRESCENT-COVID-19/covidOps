import { combineReducers } from "redux";

// Import Reducers
import homeReducer from './homeReducer' 
import memeberReducer from './memeberReducer' 

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
      home:homeReducer,
     memeber:memeberReducer,
    ...injectedReducers
  });

  return rootReducer;
}
