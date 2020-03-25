import React from "react";
import { NavigationContainer } from "@react-navigation/native";
//Navigators
import AuthNavigation from "./AuthNavigation";
import MainNavigation from "./MainNavigation";

const AppNavigator = () => {
  return (
    <NavigationContainer>
      {!false ? <AuthNavigation /> : <MainNavigation />}
    </NavigationContainer>
  );
};

export default AppNavigator;
