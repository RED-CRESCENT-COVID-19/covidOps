import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

import { RaisedTextButton } from "react-native-material-buttons";

import Constants from "expo-constants";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";

// plugins
import I18n from "../../plugins/I18n";

//Custom Components
import Heading from "../../components/Heading";
import CardView from "../../components/CardView";
//Theme
import { Strings, Styles, Colors } from "../../../theme";
const WRITING_STYLE = I18n.locale;
export default class LocationData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: "",
      lng: "",
      errorMessage: null
    };
  }

  UNSAFE_componentWillMount() {
    if (Platform.OS === "android" && !Constants.isDevice) {
      this.setState({
        errorMessage:
          "Oops, this will not work on Sketch in an Android emulator. Try it on your device!"
      });
    } else {
      this._getLocationAsync();
    }
  }
  _getLocationAsync = async () => {
    try {
      let { status } = await Permissions.askAsync(Permissions.LOCATION);
      console.log("status is: ", status);
      if (status !== "granted") {
        this.setState({
          errorMessage: "Permission to access location was denied"
        });
      }

      let location = await Location.getCurrentPositionAsync({});
      console.log("get location is: ", location);
      this.setState({
        lat: location.coords.latitude,
        lng: location.coords.longitude
      });
    } catch (error) {
      console.log("catch error is: ", error);
    }
  };
  handleContinue = () => {
    this.props.navigation.navigate("HouseholdNumber");
  };

  render() {
    if (this.state.errorMessage) {
      text = this.state.errorMessage;
    } else if (this.state.location) {
      text = JSON.stringify(this.state.location);
    }

    console.log("render location is: ", this.props.location);

    const style = WRITING_STYLE === "ur" ? { writingDirection: "rtl" } : {};

    return (
      <View style={Styles.container}>
        <Heading headerText={I18n.t(`headings.LOCATIONDATA`)} />
        <Text style={[Styles.topParagraph, style]}>
          {I18n.t(`Paragarphs.LOCATIONDATA`)}
        </Text>
        <CardView Styles={Styles.Spacer300} />
        <CardView Styles={Styles.Spacer100} />
        <View style={Styles.rightButtonContainer}>
          <RaisedTextButton
            title={I18n.t(`ButtonTitles.ALLOW`)}
            color={Colors.primaryColor}
            titleColor={Colors.buttonTextColor}
            shadeBorderRadius={1.5}
            style={Styles.smallButton}
            onPress={this.handleContinue}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
