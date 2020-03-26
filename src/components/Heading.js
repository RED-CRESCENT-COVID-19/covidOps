import React from "react";
import { Image, Text, View } from "react-native";

import Line from "./Line";

// plugins
import I18n from "../plugins/I18n";

import { Styles } from "../../theme";

const WRITING_STYLE = I18n.locale;

const Heading = props => {
  const style = WRITING_STYLE === "ur" ? { writingDirection: "rtl" } : {};
  const logo = require("../../assets/images/logo.png");
  return (
    <View style={Styles.containerHeader}>
      <Image
        source={logo}
        style={{
          height: 32,
          width: 32,
          resizeMode: "contain",
          alignSelf: "center"
        }}
      />
      <Text style={[Styles.textHeader, style]}>{props.headerText}</Text>
      <Line styles={Styles.lineHeader} />
    </View>
  );
};

export default Heading;
