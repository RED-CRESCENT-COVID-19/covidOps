import React from 'react'
import { StyleSheet, Image, View } from 'react-native'

import { RaisedTextButton } from "react-native-material-buttons";
const ExtendedButton = (props) => {
    const {title,color,titleColor,shadeBorderRadius,style,onPress,IconSource} = props
    return (
        <View style = {screenStyles.buttonContainer}>
            <RaisedTextButton
            title={title}
            color={color}
            titleColor={titleColor}
            shadeBorderRadius={shadeBorderRadius}
            style={style}
            onPress={onPress}
            />
            <Image source = {IconSource} style = {screenStyles.iconStyle} />    
        </View>
    )
}

export default ExtendedButton
const screenStyles = StyleSheet.create({
    buttonContainer:{
        flexDirection: 'row',
        alignItems: 'stretch',
        alignSelf: 'stretch'
    },
    iconStyle:{
        height:20,
        width:20,
        position:'absolute',
        marginLeft:50,
        marginTop:12,
        resizeMode:'contain'
    }
});


