import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

import {OutlinedTextField} from 'react-native-material-textfield'
import {RaisedTextButton} from 'react-native-material-buttons'
//Custom Components
import Heading from '../../components/Heading'
import CardView from '../../components/CardView'
//Theme 
import {Strings, Styles,Colors} from '../../../theme'

export default class Home extends Component {
    render() {
        return (
            <View style = {Styles.container}>
            <Heading headerText = {Strings.headings.HOME}/>
              <Text style = {Styles.topParagraph}>{Strings.Paragarphs.HOME}</Text> 
              <CardView Styles={Styles.Spacer300}/>
              <CardView Styles={Styles.Spacer100}/>
               
                    <View style = {Styles.buttonsContainer}>                      
                        <RaisedTextButton 
                        title= {Strings.ButtonTitles.CANCEL} 
                        color = {Colors.secondaryColor} 
                        titleColor = {Colors.buttonTextColor} 
                        shadeBorderRadius = {1.5} 
                        style={Styles.smallButton}/>     
                        <RaisedTextButton 
                        title= {Strings.ButtonTitles.DONE} 
                        color = {Colors.primaryColor} 
                        titleColor = {Colors.buttonTextColor} 
                        shadeBorderRadius = {1.5} 
                        style={Styles.smallButton}/>      
                        
                    </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({})

