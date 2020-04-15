import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//AuthScreens
import { PhoneVerification, SMSVerification } from "../screens/AuthStack";

const AuthStack = createStackNavigator();

const AuthNavigation = prop => {
  return (
    <AuthStack.Navigator initialRouteName="PhoneVerify">
      <AuthStack.Screen name="PhoneVerify" options={{ headerShown: false }}>
        {props => <PhoneVerification {...props} setAuth={prop.setAuth} />}
      </AuthStack.Screen>
      <AuthStack.Screen name="SMSVerify" options={{ headerShown: false }}>
        {props => <SMSVerification {...props} setAuth={prop.setAuth} />}
      </AuthStack.Screen>
    </AuthStack.Navigator>
  );
};

export default AuthNavigation;
