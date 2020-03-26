import React, { Component } from "react";
import {StyleSheet, View } from "react-native";


import { RaisedTextButton } from "react-native-material-buttons";
//Custom Components
import {CardView,Heading} from "../../components";
//Theme
import { Strings, Styles, Colors } from "../../../theme";

export default class HouseholdHistory extends Component {
  
  handleDone = () => {
    this.props.navigation.goBack();
  };
  render() {
    return (
      <View style={Styles.container}>
      <Heading headerText={Strings.headings.HOUSEHOLDHISTORY} />
      <CardView Styles={Styles.Spacer300} />
      <CardView Styles={Styles.Spacer200} />

      <View style={Styles.rightButtonContainer}>

        <RaisedTextButton
          title={Strings.ButtonTitles.DONE}
          color={Colors.primaryColor}
          titleColor={Colors.buttonTextColor}
          shadeBorderRadius={1.5}
          style={Styles.smallButton}
          onPress={this.handleDone}
        />
      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({});
