/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

// import history from "utils/history";
import globalReducer from "./containers/App/reducer";

// Import languages proivder here
// import languageProviderReducer from "./containers/LanguageProvider/reducer";

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    global: globalReducer,
    // language: languageProviderReducer, // languageProviderReducer json
    // router: connectRouter(history),

    ...injectedReducers
  });

  return rootReducer;
}
