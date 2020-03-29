import { combineReducers } from "redux";

// Import Reducers
import homeReducer from './homeReducer' 
import memeberReducer from './memeberReducer' 

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
      homeReducer,
     memeberReducer,
    ...injectedReducers
  });

  return rootReducer;
}
