import React, { Component } from "react";
import { AsyncStorage } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

//Navigators
import AuthNavigation from "./AuthNavigation";
import MainNavigation from "./MainNavigation";

class AppNavigator extends Component {
  constructor(props) {
    super(props);
    this.state = { isAuthenticated: false };

    this.setAuth = this.setAuth.bind(this);
  }
  navigationRender = async () => {
    const token = await AsyncStorage.getItem("AuthToken");
    if (token) {
      this.setState({ isAuthenticated: true });
    }
  };
  componentDidMount() {
    this.navigationRender();
  }
  setAuth(param) {
    this.setState({ isAuthenticated: param });
  }
  render() {
    return (
      <NavigationContainer>
        {this.state.isAuthenticated ? (
          <MainNavigation setAuth={this.setAuth} />
        ) : (
          <AuthNavigation setAuth={this.setAuth} />
        )}
      </NavigationContainer>
    );
  }
}
export default AppNavigator;
