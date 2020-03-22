import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

import {OutlinedTextField} from 'react-native-material-textfield'
import {RaisedTextButton} from 'react-native-material-buttons'
//Custom Components
import Heading from '../../components/Heading'
import CardView from '../../components/CardView'
//Theme 
import {Strings, Styles,Colors} from '../../../theme'

export default class Advisory extends Component {
    render() {
        return (
            <View style = {Styles.container}>
            <Heading headerText = {Strings.headings.ADVISORY}/>
              <Text style = {Styles.topParagraph}>{Strings.Paragarphs.ADVISORY}</Text> 
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
