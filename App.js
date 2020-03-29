import React, { useEffect } from "react";
import { Provider } from "react-redux";
import {createStore,applyMiddleware} from 'redux'
import thunkMiddleware from "redux-thunk";
import * as Font from "expo-font";
import I18n from "./src/plugins/I18n";
import * as Localization from "expo-localization";

import AppNavigator from "./src/navigation/AppNavigator";
import rootReducer from './src/reducers/index'

const store = createStore(
  rootReducer,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
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
    Font.loadAsync({
      "noto-nastaliq": require("./assets/fonts/NotoNastaliqUrdu-Regular.ttf")
    });
  });
  return (
    <Provider store={store}>
    <LocalizationContext.Provider value={localizationContext}>
        <AppNavigator />
    </LocalizationContext.Provider>
     </Provider>
  );
}
