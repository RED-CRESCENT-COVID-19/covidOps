import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import * as Font from "expo-font";
import I18n from "./src/plugins/I18n";
import * as Localization from "expo-localization";
import { Text, View, AsyncStorage } from "react-native";
import AppNavigator from "./src/navigation/AppNavigator";
import rootReducer from "./src/reducers/index";
import NetInfo from "@react-native-community/netinfo";
import configureStore from "./src/store";
export const LocalizationContext = React.createContext();

const { store } = configureStore();
if (__DEV__) {
  import("./ReactronConfig").then(() => console.log("Reactotron Configured"));
}

export default function App() {
  const [locale, setLocale] = React.useState(Localization.locale);
  const [internetConnected, setInernetConnection] = React.useState(true);
  const localizationContext = React.useMemo(
    () => ({
      t: (scope, options) => i18n.t(scope, { locale, ...options }),
      locale,
      setLocale,
    }),
    [locale]
  );

  NetInfo.addEventListener(async ({ isConnected }) => {
    await AsyncStorage.setItem("InternetStatus", isConnected ? "1" : "0");
    console.log("Is connected?", isConnected);
  });

  useEffect(() => {
    Font.loadAsync({
      "noto-nastaliq": require("./assets/fonts/NotoNastaliqUrdu-Regular.ttf"),
    });
  }, []);
  return (
    <Provider store={store}>
      <LocalizationContext.Provider value={localizationContext}>
        <AppNavigator />
        {!internetConnected && (
          <View
            style={{
              backgroundColor: "#FFCC00",
              alignItems: "center",
              position: "absolute",
              width: "100%",
              bottom: 0,
            }}
            opacity={0.5}
          >
            <Text>App is in offline mode</Text>
          </View>
        )}
      </LocalizationContext.Provider>
    </Provider>
  );
}
