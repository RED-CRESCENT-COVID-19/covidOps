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
  MemberDetails,
  Information,
  OtherSymptoms,
  SMSService,
  HouseHoldDetails,
  ConfirmEntry,
  HandWash,
  PrecautionsInit,
  NewPrecautions
} from "../screens/MainScreens";
const MainNavigation = prop => {
  return (
    <MainStack.Navigator initialRouteName="HealthScan">
      {/* 1 screen */}
      <MainStack.Screen name="HealthScan" options={{ headerShown: false }}>
        {props => <HealthScan {...props} setAuth={prop.setAuth} />}
      </MainStack.Screen>

      {/* 2 screen */}
      <MainStack.Screen name="HouseholdNumber" options={{ headerShown: false }}>
        {props => <HouseholdNumber {...props} setAuth={prop.setAuth} />}
      </MainStack.Screen>

      {/* to view house hold history on health scan screen  */}
      {/* 1a screen */}
      <MainStack.Screen
        name="HouseholdHistory"
        options={{ headerShown: false }}
      >
        {props => <HouseholdHistory {...props} setAuth={prop.setAuth} />}
      </MainStack.Screen>

      {/* 3 screen */}
      <MainStack.Screen name="MemberDetails" options={{ headerShown: false }}>
        {props => <MemberDetails {...props} setAuth={prop.setAuth} />}
      </MainStack.Screen>

      {/* 4 screen */}
      <MainStack.Screen name="Symptoms" options={{ headerShown: false }}>
        {props => <Symptoms {...props} setAuth={prop.setAuth} />}
      </MainStack.Screen>

      {/* 5 screen */}
      <MainStack.Screen name="OtherSymptoms" options={{ headerShown: false }}>
        {props => <OtherSymptoms {...props} setAuth={prop.setAuth} />}
      </MainStack.Screen>

      {/* 6 screen */}
      <MainStack.Screen name="Temperature" options={{ headerShown: false }}>
        {props => <Temperature {...props} setAuth={prop.setAuth} />}
      </MainStack.Screen>

      {/* 7 screen */}
      <MainStack.Screen name="NewPrecautions" options={{ headerShown: false }}>
        {props => <NewPrecautions {...props} setAuth={prop.setAuth} />}
      </MainStack.Screen>

      {/* 8 screen on complete end less loop of Add memeber */}
      <MainStack.Screen
        name="HouseHoldDetails"
        options={{ headerShown: false }}
      >
        {props => <HouseHoldDetails {...props} setAuth={prop.setAuth} />}
      </MainStack.Screen>

      {/* 9 screen */}
      <MainStack.Screen name="PrecautionsInit" options={{ headerShown: false }}>
        {props => <PrecautionsInit {...props} setAuth={prop.setAuth} />}
      </MainStack.Screen>

      {/* 10 screen */}
      <MainStack.Screen name="Information" options={{ headerShown: false }}>
        {props => <Information {...props} setAuth={prop.setAuth} />}
      </MainStack.Screen>

      {/* 11 screen */}
      <MainStack.Screen name="Advisory" options={{ headerShown: false }}>
        {props => <Advisory {...props} setAuth={prop.setAuth} />}
      </MainStack.Screen>

      {/* 12 screen */}
      <MainStack.Screen name="HandWash" options={{ headerShown: false }}>
        {props => <HandWash {...props} setAuth={prop.setAuth} />}
      </MainStack.Screen>

      {/* 13, 2nd last screen */}
      <MainStack.Screen name="SMSService" options={{ headerShown: false }}>
        {props => <SMSService {...props} setAuth={prop.setAuth} />}
      </MainStack.Screen>

      {/* 14, Last screen */}
      <MainStack.Screen name="ConfirmEntry" options={{ headerShown: false }}>
        {props => <ConfirmEntry {...props} setAuth={prop.setAuth} />}
      </MainStack.Screen>

      {/* ================= Un Arrange order end Start */}
      {/* unused screens after chaning in the flow &  */}
      {/* 1 screen */}
      <MainStack.Screen name="Home" options={{ headerShown: false }}>
        {props => <Home {...props} setAuth={prop.setAuth} />}
      </MainStack.Screen>

      {/* 2 screen */}
      <MainStack.Screen name="LocationData" options={{ headerShown: false }}>
        {props => <LocationData {...props} setAuth={prop.setAuth} />}
      </MainStack.Screen>

      {/* 3 screen */}
      <MainStack.Screen name="Precautions" options={{ headerShown: false }}>
        {props => <Precautions {...props} setAuth={prop.setAuth} />}
      </MainStack.Screen>

      {/* 4 screen */}
      <MainStack.Screen name="Response" options={{ headerShown: false }}>
        {props => <Response {...props} setAuth={prop.setAuth} />}
      </MainStack.Screen>

      {/* ================= Un Arrange order end  */}
    </MainStack.Navigator>
  );
};

export default MainNavigation;
