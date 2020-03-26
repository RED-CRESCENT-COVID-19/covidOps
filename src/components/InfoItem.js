import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Checkbox } from "react-native-material-ui";
// plugins
import I18n from "../plugins/I18n";

import Line from "./Line";

import { Styles } from "../../theme";

// Writing style of the App
const WRITING_STYLE = I18n.locale;

class InfoItem extends Component {
  render() {
    const { title, info } = this.props;
    const screenStyle =
      WRITING_STYLE === "ur"
        ? { alignItems: "flex-end", writingDirection: "rtl" }
        : {};
    return (
      <View style={[Styles.infoItemContainer, screenStyle]}>
        <Text style={[Styles.infoItemHeader, screenStyle]}>{title}</Text>
        <View style={Styles.infoContainer}>
          <Text style={[Styles.infoItemTitle, screenStyle]}>{info}</Text>
        </View>
        <Line styles={Styles.lineDivider} />
      </View>
    );
  }
}

export default InfoItem;
