import React, { Component } from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Button } from "react-native-material-ui";

import Line from "./Line";

import { Styles, Colors } from "../../theme";
class InfoList extends Component {
  constructor(props) {
    super(props);
  }
  onEdit() {
    this.props.navigation.navigate("MemberDetails",{...this.props});
  }
  onDelete(id) {
    Alert.alert(
      `Are you sure you want to delete this ${id}`,
      "Keep your app up to date to enjoy the latest features",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );
  }
  render() {
    const { cnic, user_id } = this.props.data;

    return (
      <View style={Styles.InfoListContainer}>
        <Text style={Styles.InfoListHeader}>{user_id}</Text>
        <View style={Styles.memberContainer}>
          <Text style={Styles.InfoListTitle}>{cnic}</Text>
          {/* edit button */}
          <Button
            flat
            text=""
            onPress={() => this.onEdit()}
            icon={<Icon name="pencil" size={20} color={Colors.primaryColor} />}
          />
          {/* delete button */}
          <Button
            flat
            text=""
            onPress={() => this.onDelete(cnic)}
            icon={<Icon name="trash" size={20} color={Colors.primaryColor} />}
          />
        </View>
        <Line styles={Styles.lineDivider} />
      </View>
    );
  }
}

export default InfoList;
