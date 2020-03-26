import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Checkbox } from "react-native-material-ui";

import Line from "./Line";

import { Styles } from "../../theme";
class CheckBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false || props.checked
    };
  }
  render() {
    const { value, checked, symptomNumber, symptomName } = this.props;
    const { isChecked } = this.state;

    return (
      <View style={Styles.checkBoxContainer}>
        <Text style={Styles.checkBoxHeader}>{symptomNumber}</Text>
        <View style={Styles.symptomsContainer}>
          <Text style={Styles.checkBoxTitle}>{symptomName}</Text>
          <Checkbox
            label={""}
            value={value}
            checked={isChecked}
            uncheckedIcon={"check-box-outline-blank"}
            onCheck={() => {
              this.setState({ isChecked: !isChecked });
              console.log("on check is calling!");
            }}
            // size={10}
            style={{ icon: Styles.checkBoxStyle }}
          />
        </View>
        <Line styles={Styles.lineDivider} />
      </View>
    );
  }
}

export default CheckBox;
