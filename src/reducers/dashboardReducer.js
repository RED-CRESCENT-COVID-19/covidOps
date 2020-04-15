import {
  START_LOADING,
  STOP_LOADING,
  SET_STATS,
  TOGGLE_RESPONSE
} from "../actions/index";

const initialState = {
  loading: false,
  response: false,
  error: false,
  message: false,
  houseScanned: 0,
  personScanned: 0
};
export default (dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_LOADING:
      return {
        ...state,
        loading: true,
        response: false
      };
    case STOP_LOADING:
      return {
        ...state,
        loading: false
      };
    case SET_STATS:
      return {
        ...state,
        error: false,
        response: true,
        houseScanned: action.payload.data.house_count,
        personScanned: action.payload.data.person_count
      };
    case TOGGLE_RESPONSE:
      return {
        ...state,
        response: false
      };
    default:
      return state;
  }
});
