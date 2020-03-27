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
  PrecautionsInit
} from "../screens/MainScreens";
const MainNavigation = (prop) => {
  return (
    <MainStack.Navigator initialRouteName="HealthScan">
      <MainStack.Screen  name="Advisory" options={{ headerShown: false }}>
        {props => <Advisory {...props} setAuth={prop.setAuth} />}
      </MainStack.Screen>
      
      <MainStack.Screen  name="HealthScan" options={{ headerShown: false }}>
        {props => <HealthScan {...props} setAuth={prop.setAuth} />}
      </MainStack.Screen>

      <MainStack.Screen  name="Home" options={{ headerShown: false }}>
        {props => <Home {...props} setAuth={prop.setAuth} />}
      </MainStack.Screen>

      <MainStack.Screen  name="HouseHoldDetails" options={{ headerShown: false }}>
        {props => <HouseHoldDetails {...props} setAuth={prop.setAuth} />}
      </MainStack.Screen>  

      <MainStack.Screen  name="HouseholdHistory" options={{ headerShown: false }}>
        {props => <HouseholdHistory {...props} setAuth={prop.setAuth} />}
      </MainStack.Screen>  

      <MainStack.Screen  name="HouseholdNumber" options={{ headerShown: false }}>
        {props => <HouseholdNumber {...props} setAuth={prop.setAuth} />}
      </MainStack.Screen>  
      <MainStack.Screen  name="LocationData" options={{ headerShown: false }}>
        {props => <LocationData {...props} setAuth={prop.setAuth} />}
      </MainStack.Screen>     


      <MainStack.Screen  name="Precautions" options={{ headerShown: false }}>
        {props => <Precautions {...props} setAuth={prop.setAuth} />}
      </MainStack.Screen>     

      <MainStack.Screen  name="PrecautionsInit" options={{ headerShown: false }}>
        {props => <PrecautionsInit {...props} setAuth={prop.setAuth} />}
      </MainStack.Screen>     

      <MainStack.Screen  name="Response" options={{ headerShown: false }}>
        {props => <Response {...props} setAuth={prop.setAuth} />}
      </MainStack.Screen>     

      <MainStack.Screen  name="Symptoms" options={{ headerShown: false }}>
        {props => <Symptoms {...props} setAuth={prop.setAuth} />}
      </MainStack.Screen>     

      <MainStack.Screen  name="OtherSymptoms" options={{ headerShown: false }}>
        {props => <OtherSymptoms {...props} setAuth={prop.setAuth} />}
      </MainStack.Screen>     
      
      <MainStack.Screen  name="Temperature" options={{ headerShown: false }}>
        {props => <Temperature {...props} setAuth={prop.setAuth} />}
      </MainStack.Screen>     

      <MainStack.Screen  name="MemberDetails" options={{ headerShown: false }}>
        {props => <MemberDetails {...props} setAuth={prop.setAuth} />}
      </MainStack.Screen>     

      <MainStack.Screen  name="Information" options={{ headerShown: false }}>
        {props => <Information {...props} setAuth={prop.setAuth} />}
      </MainStack.Screen>     

      <MainStack.Screen  name="SMSService" options={{ headerShown: false }}>
        {props => <SMSService {...props} setAuth={prop.setAuth} />}
      </MainStack.Screen>     

      <MainStack.Screen  name="ConfirmEntry" options={{ headerShown: false }}>
        {props => <ConfirmEntry {...props} setAuth={prop.setAuth} />}
      </MainStack.Screen>     

      <MainStack.Screen  name="HandWash" options={{ headerShown: false }}>
        {props => <HandWash {...props} setAuth={prop.setAuth} />}
      </MainStack.Screen>     
      {/* <MainStack.Screen
        name="HealthScan"
        component={HealthScan}
        options={{ headerShown: false }}
      /> */}
      {/* <MainStack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      /> */}
      {/* <MainStack.Screen
        name="HouseHoldDetails"
        component={HouseHoldDetails}
        options={{ headerShown: false }}
      /> */}
      {/* <MainStack.Screen
        name="HouseholdHistory"
        component={HouseholdHistory}
        options={{ headerShown: false }}
      /> */}
      {/* <MainStack.Screen
        name="HouseholdNumber"
        component={HouseholdNumber}
        options={{ headerShown: false }}
      />
      <MainStack.Screen
        name="LocationData"
        component={LocationData}
        options={{ headerShown: false }}
      /> */}
      {/* <MainStack.Screen
        name="Precautions"
        component={Precautions}
        options={{ headerShown: false }}
      /> */}
      {/* <MainStack.Screen
        name="PrecautionsInit"
        component={PrecautionsInit}
        options={{ headerShown: false }}
      /> */}
      {/* <MainStack.Screen
        name="Response"
        component={Response}
        options={{ headerShown: false }}
      /> */}
      {/* <MainStack.Screen
        name="Symptoms"
        component={Symptoms}
        options={{ headerShown: false }}
      /> */}
      {/* <MainStack.Screen
        name="OtherSymptoms"
        component={OtherSymptoms}
        options={{ headerShown: false }}
      /> */}
      {/* <MainStack.Screen
        name="Temperature"
        component={Temperature}
        options={{ headerShown: false }}
      /> */}
      {/* <MainStack.Screen
        name="MemberDetails"
        component={MemberDetails}
        options={{ headerShown: false }}
      /> */}
      {/* <MainStack.Screen
        name="Information"
        component={Information}
        options={{ headerShown: false }}
      /> */}
      {/* <MainStack.Screen
        name="SMSService"
        component={SMSService}
        options={{ headerShown: false }}
      />
      <MainStack.Screen
        name="ConfirmEntry"
        component={ConfirmEntry}
        options={{ headerShown: false }}
      /> */}
      {/* <MainStack.Screen
        name="HandWash"
        component={HandWash}
        options={{ headerShown: false }}
      /> */}
    </MainStack.Navigator>
  );
};

export default MainNavigation;
