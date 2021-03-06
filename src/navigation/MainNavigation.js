import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const MainStack = createStackNavigator();

//Main Auth Screens
import {
  Advisory,
  HealthScan,
  Home,
  HouseholdHistory,
  HouseholdNumber,
  LocationData,
  Precautions,
  Response,
  Symptoms,
  Temperature,
  MemeberDetails,
  Information,
  OtherSymptoms,
  SMSService,
  HouseHoldDetails,
  ConfirmEntry,
  HandWash
} from "../screens/MainScreens";
const MainNavigation = () => {
  return (
    <MainStack.Navigator initialRouteName="HealthScan">
      <MainStack.Screen
        name="Advisory"
        component={Advisory}
        options={{ headerShown: false }}
      />
      <MainStack.Screen
        name="HealthScan"
        component={HealthScan}
        options={{ headerShown: false }}
      />
      <MainStack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <MainStack.Screen
        name="HouseHoldDetails"
        component={HouseHoldDetails}
        options={{ headerShown: false }}
      />
      <MainStack.Screen
        name="HouseholdHistory"
        component={HouseholdHistory}
        options={{ headerShown: false }}
      />
      <MainStack.Screen
        name="HouseholdNumber"
        component={HouseholdNumber}
        options={{ headerShown: false }}
      />
      <MainStack.Screen
        name="LocationData"
        component={LocationData}
        options={{ headerShown: false }}
      />
      <MainStack.Screen
        name="Precautions"
        component={Precautions}
        options={{ headerShown: false }}
      />
      <MainStack.Screen
        name="Response"
        component={Response}
        options={{ headerShown: false }}
      />
      <MainStack.Screen
        name="Symptoms"
        component={Symptoms}
        options={{ headerShown: false }}
      />
      <MainStack.Screen
        name="OtherSymptoms"
        component={OtherSymptoms}
        options={{ headerShown: false }}
      />
      <MainStack.Screen
        name="Temperature"
        component={Temperature}
        options={{ headerShown: false }}
      />
      <MainStack.Screen
        name="MemberDetails"
        component={MemeberDetails}
        options={{ headerShown: false }}
      />
      <MainStack.Screen
        name="Information"
        component={Information}
        options={{ headerShown: false }}
      />
      <MainStack.Screen
        name="SMSService"
        component={SMSService}
        options={{ headerShown: false }}
      />
      <MainStack.Screen
        name="ConfirmEntry"
        component={ConfirmEntry}
        options={{ headerShown: false }}
      />
      <MainStack.Screen
        name="HandWash"
        component={HandWash}
        options={{ headerShown: false }}
      />
    </MainStack.Navigator>
  );
};

export default MainNavigation;
