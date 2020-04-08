import React, { Component } from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Button } from "react-native-material-ui";

import Line from "./Line";

// plugins
import I18n from "../plugins/I18n";

// Service
import Http from "../services/HttpService";

import { Styles, Colors } from "../../theme";

const WRITING_STYLE = I18n.locale;
class InfoList extends Component {
  constructor(props) {
    super(props);
  }
  onEdit() {
    this.props.navigation.navigate("MemberDetails", { ...this.props });
  }
  onDelete({ id, phone, cnic, HouseHoldDetails, address }) {
    // const deleteIdentifier = HouseHoldDetails !== "" ? phone : cnic;
    const deleteIdentifier = HouseHoldDetails !== "" ? cnic || phone : address;

    Alert.alert(
      "Approval!",
      `Are you sure you want to delete ${deleteIdentifier}`,
      [
        {
          text: "Cancel",
          onPress: () => {
            console.log("Cancel Pressed");
          },
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => {
            console.log("OK Pressed");
            this.props.onDeletePerson(id);
          },
        },
      ],
      { cancelable: false }
    );
  }

  urduList() {
    const {
      user_id,
      createdAt,
      address,
      owner_phone,
      lng,
      lat,
      id,
      cnic,
      phone,
      UserId,
    } = this.props.data;
    const { HouseHoldDetails, indicator } = this.props;
    console.log("info list props is: ", this.props);
    const ts = new Date(createdAt);
    const date = ts.toLocaleDateString();
    const time = ts.toLocaleTimeString();
    const style = WRITING_STYLE === "ur" ? { textAlign: "right" } : {};
    return (
      <View
        style={[
          Styles.InfoListContainer,
          {
            alignSelf: "flex-end",
          },
        ]}
      >
        {HouseHoldDetails === "" && (
          <Text style={(Styles.InfoListHeader, style)}>
            {indicator} {time} - {date}
          </Text>
        )}
        {HouseHoldDetails !== "" && (
          <Text style={[Styles.InfoListHeader, style]}>
            {HouseHoldDetails} {indicator}
          </Text>
        )}

        <View style={Styles.memberContainer}>
          {/* delete button */}
          <Button
            flat
            text=""
            onPress={() =>
              this.onDelete({ id, phone, cnic, HouseHoldDetails, address })
            }
            icon={<Icon name="trash" size={20} color={Colors.primaryColor} />}
          />

          {/* edit button */}
          <Button
            flat
            text=""
            onPress={() => this.onEdit()}
            icon={<Icon name="pencil" size={20} color={Colors.primaryColor} />}
          />

          {HouseHoldDetails !== "" && (
            <Text style={[Styles.InfoListTitle, style]}>
              {cnic || phone || user_id || "N/A"}
            </Text>
          )}

          {HouseHoldDetails === "" && (
            <Text style={[Styles.InfoListTitle, style]}>
              {address || `${lat}, ${lng}` || user_id || "N/A"}
            </Text>
          )}
        </View>
        <Line styles={Styles.lineDivider} />
      </View>
    );
  }

  englisList() {
    const {
      user_id,
      createdAt,
      address,
      owner_phone,
      lng,
      lat,
      id,
      cnic,
      phone,
      UserId,
    } = this.props.data;
    const { HouseHoldDetails, indicator } = this.props;

    const ts = new Date(createdAt);
    const date = ts.toLocaleDateString();
    const time = ts.toLocaleTimeString();

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
          {HouseHoldDetails !== "" && (
            <Text style={Styles.InfoListTitle}>
              {cnic || phone || user_id || "N/A"}
            </Text>
          )}

          {HouseHoldDetails === "" && (
            <Text style={Styles.InfoListTitle}>
              {address || `${lat}, ${lng}` || user_id || "N/A"}
            </Text>
          )}

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

  render() {
    const renderView =
      WRITING_STYLE === "ur" ? this.urduList() : this.englisList();
    return renderView;
  }
}

export default InfoList;
