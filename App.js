import React from "react";
import { Provider } from "react-redux";
import I18n from "./src/plugins/I18n";

import configureStore from "./src/store";
import AppNavigator from "./src/navigation/AppNavigator";

const initialState = {};
const store = configureStore(
  initialState
  //history
);

const deviceLocale = I18n.locale;

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
