/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from "redux";

// Import Reducers
import adminReducer from "./admin/reducer";

// Import languages proivder here
// import languageProviderReducer from "./containers/LanguageProvider/reducer";

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    admin: adminReducer,
    // language: languageProviderReducer, // languageProviderReducer json
    // router: connectRouter(history),

    ...injectedReducers
  });

  return rootReducer;
}
