import React, { useEffect } from "react";
import { Provider } from "react-redux";
import {createStore,applyMiddleware} from 'redux'
import thunkMiddleware from "redux-thunk";
import logger from 'redux-logger';
import * as Font from "expo-font";
import I18n from "./src/plugins/I18n";
import * as Localization from "expo-localization";

import AppNavigator from "./src/navigation/AppNavigator";
import thunk from "redux-thunk";
import rootReducer from './src/reducers'

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware)
);
export const LocalizationContext = React.createContext();

export default function App() {
  const [locale, setLocale] = React.useState(Localization.locale);
  const localizationContext = React.useMemo(
    () => ({
      t: (scope, options) => i18n.t(scope, { locale, ...options }),
      locale,
      setLocale
    }),
    [locale]
  );

  useEffect(() => {
    console.log("useEffect lang: is: ", I18n.locale);
    Font.loadAsync({
      "noto-nastaliq": require("./assets/fonts/NotoNastaliqUrdu-Regular.ttf")
    });
  });
  return (
    <LocalizationContext.Provider value={localizationContext}>
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    </LocalizationContext.Provider>
  );
}
