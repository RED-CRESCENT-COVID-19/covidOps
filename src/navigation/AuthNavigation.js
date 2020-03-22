import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

//AuthScreens
import {PhoneVerification,SMSVerification} from '../screens/AuthStack'

const AuthStack = createStackNavigator();

const AuthNavigation = () => {
    return (
        <AuthStack.Navigator initialRouteName="SMSVerify">
        <AuthStack.Screen name="PhoneVerify" component={PhoneVerification} options={{headerShown: false}} />
        <AuthStack.Screen name="SMSVerify" component={SMSVerification} options={{headerShown: false}}/>
        </AuthStack.Navigator>
    )
}

export default AuthNavigation


