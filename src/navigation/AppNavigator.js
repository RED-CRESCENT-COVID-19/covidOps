import React,{Component} from "react";
import {AsyncStorage}   from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
//Navigators
import AuthNavigation from "./AuthNavigation";
import MainNavigation from "./MainNavigation";
class AppNavigator extends Component {
  constructor(props) {
    super(props);
    this.state = { isAuthenticated: false};
  }
  navigationRender = async () => {
    const token = await AsyncStorage.getItem('AuthToken') 
    console.log(token)
    if(token){
      this.setState({isAuthenticated:true})
    }
  }
  componentDidMount(){
    this.navigationRender()
  }
  render() {
    return (
      <NavigationContainer>
      {this.state.isAuthenticated ? <MainNavigation />:<AuthNavigation />}
    </NavigationContainer>
    )
  }
}
export default AppNavigator;