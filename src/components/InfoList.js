import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Button } from "react-native-material-ui";

import Line from "./Line";

import { Styles, Colors } from "../../theme";
class InfoList extends Component {
  // constructor(props) {
  //   super(props);
  //   // this.state = {
  //   //   isChecked: false || props.checked
  //   // };
  // }
  onEdit() {
    this.props.navigation.navigate("MemberDetails");
  }
  render() {
    const { cnic, name } = this.props.data;
    // const { isChecked } = this.state;

    return (
      <View style={Styles.InfoListContainer}>
        <Text style={Styles.InfoListHeader}>{name}</Text>
        <View style={Styles.memberContainer}>
          <Text style={Styles.InfoListTitle}>{cnic}</Text>
          <Button
            flat
            text=""
            onPress={() => this.onEdit()}
            icon={<Icon name="pencil" size={20} color={Colors.primaryColor} />}
          />
          <Button
            flat
            text=""
            icon={<Icon name="trash" size={20} color={Colors.primaryColor} />}
          />

          {/* <Icon name="trash" size={20} color={Colors.primaryColor} padding={5} /> */}
        </View>
        <Line styles={Styles.lineDivider} />
      </View>
    );
  }
}

export default InfoList;
