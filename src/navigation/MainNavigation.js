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
        <MainStack.Navigator initialRouteName="Home">
            
            <MainStack.Screen name="Advisory" component={Advisory} options={{headerShown: false}}/>
            <MainStack.Screen name="HealthScan" component={HealthScan} options={{headerShown: false}}/>
            <MainStack.Screen name="Home" component={Home} options={{headerShown: false}}/>
            <MainStack.Screen name="HouseholdHistory" component={HouseholdHistory} options={{headerShown: false}}/>
            <MainStack.Screen name="HouseholdNumber" component={HouseholdNumber} options={{headerShown: false}}/>
            <MainStack.Screen name="LocationData" component={LocationData} options={{headerShown: false}}/>
            <MainStack.Screen name="Precautions" component={Precautions} options={{headerShown: false}}/>
            <MainStack.Screen name="Response" component={Response} options={{headerShown: false}}/>
            <MainStack.Screen name="Symptoms" component={Symptoms} options={{headerShown: false}}/>
            <MainStack.Screen name="Temperature" component={Temperature} options={{headerShown: false}}/>
        </MainStack.Navigator>
    )
}

export default MainNavigation
