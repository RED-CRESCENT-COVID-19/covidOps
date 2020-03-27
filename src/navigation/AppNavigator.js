import React from "react";
import { NavigationContainer } from "@react-navigation/native";
//Navigators
import AuthNavigation from "./AuthNavigation";
import MainNavigation from "./MainNavigation";

const AppNavigator = () => {
  return (
    <NavigationContainer>
      {true ? <AuthNavigation /> : <MainNavigation />}
    </NavigationContainer>
  );
};

export default AppNavigator;
