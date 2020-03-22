import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Line from './Line'

import {Styles} from '../../theme'
const Heading = (props) => {
    return (
        <View style = {Styles.containerHeader}>
            <Text style = {Styles.textHeader}>{props.headerText}</Text>
            <Line styles= {Styles.lineHeader}/>
        </View>
    )
}

export default Heading

