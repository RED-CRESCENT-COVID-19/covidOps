import { combineReducers } from "redux";

// Import Reducers
import homeReducer from "./homeReducer";
import memeberReducer from "./memeberReducer";
import dashboardReducer from "./dashboardReducer";

export default combineReducers({
  home: homeReducer,
  member: memeberReducer,
  dashboard: dashboardReducer,
});
