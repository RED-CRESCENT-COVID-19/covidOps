import { combineReducers } from "redux";

// Import Reducers
import homeReducer from './homeReducer' 

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    home: homeReducer,
    // language: languageProviderReducer, // languageProviderReducer json
    // router: connectRouter(history),

    ...injectedReducers
  });

  return rootReducer;
}
