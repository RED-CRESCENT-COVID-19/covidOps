import React from 'react'
import { View } from 'react-native'
import {Color} from '../../theme'

const Line = () => {
    return (
        <View style={{
            height: 2,
            backgroundColor: Color.primaryColor,
            alignSelf: 'stretch'
        }} />
    )
}

export default Line
