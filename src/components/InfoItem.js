import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Checkbox } from "react-native-material-ui";

import Line from "./Line";

import { Styles } from "../../theme";
class InfoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false || props.checked
    };
  }
  render() {
    const { title, info } = this.props;
    // const { isChecked } = this.state;

    return (
      <View style={Styles.infoItemContainer}>
        <Text style={Styles.infoItemHeader}>{title}</Text>
        <View style={Styles.infoContainer}>
          <Text style={Styles.infoItemTitle}>{info}</Text>
        </View>
        <Line styles={Styles.lineDivider} />
      </View>
    );
  }
}

export default InfoItem;
