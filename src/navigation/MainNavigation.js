import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

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
    Temperature
} from '../screens/MainScreens'
const MainNavigation = () => {
    return (
        <MainStack.Navigator>
            <MainStack.Screen name="Advisory" component={Advisory}/>
            <MainStack.Screen name="HealthScan" component={HealthScan}/>
            <MainStack.Screen name="Home" component={Home}/>
            <MainStack.Screen name="HouseholdHistory" component={HouseholdHistory}/>
            <MainStack.Screen name="HouseholdNumber" component={HouseholdNumber}/>
            <MainStack.Screen name="LocationData" component={LocationData}/>
            <MainStack.Screen name="Precautions" component={Precautions}/>
            <MainStack.Screen name="Response" component={Response}/>
            <MainStack.Screen name="Symptoms" component={Symptoms}/>
            <MainStack.Screen name="Temperature" component={Temperature}/>
        </MainStack.Navigator>
    )
}

export default MainNavigation
