import React from "react";
import { Provider } from "react-redux";

import configureStore from "./src/store";
import AppNavigator from "./src/navigation/AppNavigator";

const initialState = {};
const store = configureStore(
  initialState
  //history
);

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
