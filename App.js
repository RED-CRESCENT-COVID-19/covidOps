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
import { SQLite } from "expo-sqlite";
const db = SQLite.openDatabase("db.db");

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
    /* */
    db.transaction((tx) => {
      tx.executeSql(`create table if not exists house
      (id text primary key not null,token text, address text not null, lat float, lng float, is_contacted integer,createdAt);
      
      `);
      tx.executeSql(`create table if not exists user
      (id text primary key not null, token text, house_id, unique_id,cnic, gender, phone, age, temprature, unit, fever,
      cough, sputum, fatigue, sob, headache, congestion, meralgia, hemoptysis, conjuctivitis, notes,created_at, updated_at);`);
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
