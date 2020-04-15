// HOUSE TYPES
export const CREATE_HOUSE = "CREATE_HOUSE";
export const CREATE_HOUSE_SUCCESS = "CREATE_HOUSE_SUCCESS";
export const CREATE_HOUSE_FAIL = "CREATE_HOUSE_FAIL";

export const DELETE_HOUSE = "DELETE_HOUSE";
export const DELETE_HOUSE_SUCCESS = "DELETE_HOUSE_SUCCESS";
export const DELETE_HOUSE_FAIL = "DELETE_HOUSE_FAIL";

export const GET_ALL_HOUSES = "GET_ALL_HOUSES";
export const SET_HOUSES = "SET_HOUSES";
export const GET_HOUSEHOLD_DETAIL = "GET_HOUSEHOLD_DETAIL";
export const SET_HOUSEHOLD_DETAIL = "SET_HOUSEHOLD_DETAIL";

// MEMEBER TYPES
export const CREATE_MEMEBER = "CREATE_MEMEBER";
export const CREATE_MEMEBER_SUCCESS = "CREATE_MEMEBER_SUCCESS";
export const CREATE_MEMEBER_FAIL = "CREATE_MEMEBER_FAIL";
export const STOP_LOADING = "STOP_LOADING";
export const START_LOADING = "START_LOADING";

//DashBoard Types
export const GET_STATS = "GET_STATS";
export const SET_STATS = "SET_STATS";
export const SYNC_DATA = "SYNC_DATA";
export const WIPE_DATABASE = "WIPE_DATABASE";

export const TOGGLE_RESPONSE = "TOGGLE_RESPONSE";

export const wipeData = () => ({
  type: "WIPE_DATABASE"
});

export const syncData = () => ({
  type: SYNC_DATA
});

export const startLoading = () => ({
  type: START_LOADING
});

export const stopLoading = () => ({
  type: STOP_LOADING
});

export const getStats = token => ({
  type: GET_STATS,
  token
});

export const setStats = payload => ({
  type: SET_STATS,
  payload
});

export const setResponse = () => ({
  type: TOGGLE_RESPONSE
});

export const createHome = (params, token) => ({
  type: CREATE_HOUSE,
  params,
  token
});

export const deleteHome = (params, token) => ({
  type: DELETE_HOUSE,
  params,
  token
});

export const getAllHouses = token => ({
  type: GET_ALL_HOUSES,
  token
});

export const setHouses = response => ({
  type: SET_HOUSES,
  payload: response
});

export const getHouseHoldDetail = (token, houseId) => ({
  type: GET_HOUSEHOLD_DETAIL,
  token,
  houseId
});

export const setHouseHoldDetail = response => ({
  type: SET_HOUSEHOLD_DETAIL,
  payload: response
});

export const createMemeber = (params, token) => ({
  type: CREATE_MEMEBER,
  params,
  token
});

export const createMemeberSuccess = response => {
  return { type: CREATE_MEMEBER_SUCCESS, payload: response };
};

export const createMemeberFail = err => {
  return { type: CREATE_MEMEBER_FAIL, error: err };
};

export const createHouseSuccess = response => {
  return { type: CREATE_HOUSE_SUCCESS, payload: response };
  // dispatch(NavigationActions.navigate({ routeName: 'HouseHoldDetails' }))
};

export const deleteHouseSuccess = response => {
  return { type: DELETE_HOUSE_SUCCESS, payload: response };
  // dispatch(NavigationActions.navigate({ routeName: 'HouseHoldDetails' }))
};

export const createHouseFail = err => {
  return { type: CREATE_HOUSE_FAIL, error: err };
  // .then(dispatch(NavigationActions.navigate({ routeName: 'HouseHoldDetails' })))
};

export const deleteHouseFail = err => {
  return { type: DELETE_HOUSE_FAIL, error: err };
  // .then(dispatch(NavigationActions.navigate({ routeName: 'HouseHoldDetails' })))
};
