import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

import {OutlinedTextField} from 'react-native-material-textfield'
import {RaisedTextButton} from 'react-native-material-buttons'
//Custom Components
import Heading from '../../components/Heading'
import CardView from '../../components/CardView'
//Theme 
import {Strings, Styles,Colors} from '../../../theme'
export default class HealthScan extends Component {
    render() {
        return (
            <View style = {Styles.container}>
            <Heading headerText = {Strings.headings.HEALTHSCAN}/>
              <Text style = {Styles.topParagraph}>{Strings.Paragarphs.HEALTHSCAN}</Text>
              <CardView Styles={Styles.Spacer50}/> 
              <View style = {Styles.largebuttonsContainer}>
              <RaisedTextButton 
                   title= {Strings.ButtonTitles.ADDHOUSEHOLD} 
                   color = {Colors.primaryColor} 
                   titleColor = {Colors.buttonTextColor} 
                   shadeBorderRadius = {1.5} 
                   style={Styles.largeButton}/>  
                  </View>              
                  <View style = {Styles.largebuttonsContainer}>
                         <RaisedTextButton 
                   title= {Strings.ButtonTitles.HOUSEHOLDHISTORY} 
                   color = {Colors.secondaryColor} 
                   titleColor = {Colors.buttonTextColor} 
                   shadeBorderRadius = {1.5} 
                   style={Styles.largeButton}
                   onPress={this.handleDone} 
                   />  
                             </View>  
                     
            </View>
        )
    }
}

const styles = StyleSheet.create({})
