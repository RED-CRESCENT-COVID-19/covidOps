import React from "react";
import { Provider } from "react-redux";
import * as Font from "expo-font";

import configureStore from "./src/store";
import AppNavigator from "./src/navigation/AppNavigator";

const initialState = {};
const store = configureStore(
  initialState
  //history
);

class App extends React.Component {
  componentDidMount() {
    Font.loadAsync({
      "noto-nastaliq": require("./assets/fonts/NotoNastaliqUrdu-Regular.ttf")
    });
  }
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}

export default App;
