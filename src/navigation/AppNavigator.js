import React,{Component} from "react";
import {AsyncStorage}   from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
//Navigators
import AuthNavigation from "./AuthNavigation";
import MainNavigation from "./MainNavigation";

import MyContext from '../context/MyContext'
class AppNavigator extends Component {
  constructor(props) {
    super(props);
    this.state = { isAuthenticated: false};
  }
  navigationRender = async () => {
    const token = await AsyncStorage.setItem('AuthToken') 
    // const token = await AsyncStorage.removeItem('AuthToken') 
    if(token){
      this.setState({isAuthenticated:true})
    }
  }
  componentDidMount(){
    this.navigationRender()
  }
  setAuth(param){
    this.setState({isAuthenticated:param})
  }
  render() {
    return (
      <MyContext.Provider value = {{setAuth:this.setAuth}}>
      <NavigationContainer>
      {this.state.isAuthenticated ? <MainNavigation />:<AuthNavigation/>}
      </NavigationContainer>
       </MyContext.Provider>
     
    )
  }
}
export default AppNavigator;