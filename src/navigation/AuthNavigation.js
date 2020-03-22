import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

//AuthScreens
import {PhoneVerification,SMSVerification} from '../screens/AuthStack'

const AuthStack = createStackNavigator();

const AuthNavigation = () => {
    return (
        <AuthStack.Navigator initialRouteName="PhoneVerify">
        <AuthStack.Screen name="PhoneVerify" component={PhoneVerification}  />
        <AuthStack.Screen name="SMSVerify" component={SMSVerification} />
        </AuthStack.Navigator>
    )
}

export default AuthNavigation


