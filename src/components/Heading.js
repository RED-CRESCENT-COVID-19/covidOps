import React from "react";
import { Image, Text, View } from "react-native";
import Line from "./Line";

import { Styles } from "../../theme";
const Heading = props => {
  const logo = require('../../assets/images/logo.png')
  return (
    <View style={Styles.containerHeader}>
      <Image source={logo} style= {{height:32,width:32,resizeMode:'contain',alignSelf:'center'}}/>
      <Text style={Styles.textHeader}>{props.headerText}</Text>
      <Line styles={Styles.lineHeader} />
    </View>
  );
};

export default Heading;
