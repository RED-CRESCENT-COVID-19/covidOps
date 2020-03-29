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
    this.props.navigation.navigate("MemberDetails", { ...this.props });
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
    const {
      user_id,
      createdAt,
      address,
      owner_phone,
      lng,
      lat,
      id,
      cnic,
      UserId
    } = this.props.data;
    const { HouseHoldDetails } = this.props;
    console.log("info list data is: ", this.props.data);
    const ts = new Date(createdAt);
    const date = ts.toLocaleDateString();
    const time = ts.toLocaleTimeString();
    console.log("HouseHoldDetails is: ", HouseHoldDetails);
    // console.log("ts is: ", ts.toLocaleTimeString());
    return (
      <View style={Styles.InfoListContainer}>
        {HouseHoldDetails === "" && (
          <Text style={Styles.InfoListHeader}>
            {user_id} {time} - {date}
          </Text>
        )}
        {HouseHoldDetails !== "" && (
          <Text style={Styles.InfoListHeader}>
            {HouseHoldDetails} {user_id}
          </Text>
        )}
        <View style={Styles.memberContainer}>
          <Text style={Styles.InfoListTitle}>{"N/A"}</Text>
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
            onPress={() => this.onDelete(id)}
            icon={<Icon name="trash" size={20} color={Colors.primaryColor} />}
          />
        </View>
        <Line styles={Styles.lineDivider} />
      </View>
    );
  }
}

export default InfoList;
