import React, { Component } from 'react'
import { StyleSheet,Text,View } from 'react-native'

import {OutlinedTextField} from 'react-native-material-textfield'
import {RaisedTextButton} from 'react-native-material-buttons'
//Custom Components
import Heading from '../../components/Heading'
import CardView from '../../components/CardView'
//Theme 
import {Strings, Styles,Colors} from '../../../theme'


export default class PhoneVerification extends Component {
    
    onSubmit = () => {
    
    };
    formatText = (text) => {
    return text.replace(/[^+\d]/g, '');
    };
    render() {       
        return (
            <View style = {Styles.container}>
               <Heading headerText = {Strings.headings.SMSVERIFICATION}/>
                 <Text style = {Styles.topParagraph}>{Strings.Paragarphs.PHONEVERIFICATION}</Text>
                <View style = {screenStyles.textInput}>
                <OutlinedTextField
                        label= {Strings.Labels.PHONENUMBER}
                        keyboardType='phone-pad'
                        tintColor = {Colors.primaryColor}
                        formatText={this.formatText}
                        onSubmitEditing={this.onSubmit}
                />
                </View>
                <CardView Styles ={Styles.Spacer300}/> 
                <View style = {Styles.rightButtonContainer}>
                        <RaisedTextButton 
                        title= {Strings.ButtonTitles.CONTINUE} 
                        color = {Colors.primaryColor} 
                        titleColor = {Colors.buttonTextColor} 
                        shadeBorderRadius = {1.5} 
                        style={Styles.smallButton}/>     
                    </View>     
            </View>
        )
    }
}

const screenStyles = StyleSheet.create({
    textInput:{
        paddingTop:20,
        paddingLeft:20,
        paddingRight:20
    }
})
