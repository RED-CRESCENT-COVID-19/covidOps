import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

import {OutlinedTextField} from 'react-native-material-textfield'
import {RaisedTextButton} from 'react-native-material-buttons'
//Custom Components
import Heading from '../../components/Heading'
import CardView from '../../components/CardView'
//Theme 
import {Strings, Styles,Colors} from '../../../theme'
export default class HouseholdHistory extends Component {
    render() {
        return (
            <View style = {Styles.container}>
            <Heading headerText = {Strings.headings.HOUSE}/>
              <Text style = {Styles.topParagraph}>{Strings.Paragarphs.HOME}</Text> 
            </View>
        )
    }
}

const styles = StyleSheet.create({})
