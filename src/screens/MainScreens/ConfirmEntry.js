import React, { Component } from "react";
import { Text, StyleSheet, View, AsyncStorage } from "react-native";

import { TextField } from "react-native-material-textfield";
import { RaisedTextButton } from "react-native-material-buttons";

// plugins
import I18n from "../../plugins/I18n";

//Custom Components
import Heading from "../../components/Heading";
import CardView from "../../components/CardView";
//Theme
import { Styles, Colors } from "../../../theme";

const WRITING_STYLE = I18n.locale;
export default class ConfirmEntry extends Component {
  constructor(props) {
    super(props);
  }
  handleBack = () => {
    this.props.navigation.goBack();
  };

  async getHouseId() {
    const houseId = await AsyncStorage.getItem("HouseID");
    console.log("houseId is: ", houseId);
  }
  handleNext = () => {
    this.props.navigation.navigate("HealthScan");
  };
  onChangeText(e) {
    console.log("e is: ", e);
  }

  render() {
    console.log("Confirm this.props is: ", this.props);
    this.getHouseId();
    const style = WRITING_STYLE === "ur" ? { writingDirection: "rtl" } : {};
    return (
      <View style={Styles.container}>
        <Heading headerText={I18n.t(`headings.CONFIRMENTERY`)} />
        <Text style={[Styles.topParagraph, style]}>
          {I18n.t(`Paragarphs.CONFIRMENTERY`)}
        </Text>
        <View style={screenStyles.textInput}>
          <TextField
            label={I18n.t(`Labels.CONFIRMENTERY.LABEL`)}
            keyboardType="phone-pad"
            placeholder={I18n.t(`Labels.CONFIRMENTERY.EAMPLE`)}
            tintColor={Colors.primaryColor}
            formatText={this.formatText}
            onChangeText={(e) => this.onChangeText(e)}
            disabled
            onSubmitEditing={this.onSubmit}
          />
        </View>
        <CardView Styles={Styles.Spacer300} />

        <View style={Styles.buttonsContainer}>
          <RaisedTextButton
            title={I18n.t(`ButtonTitles.BACK`)}
            color={Colors.secondaryColor}
            titleColor={Colors.buttonTextColor}
            shadeBorderRadius={1.5}
            style={Styles.smallButton}
            onPress={this.handleBack}
          />
          <RaisedTextButton
            title={I18n.t(`ButtonTitles.YES`)}
            color={Colors.primaryColor}
            titleColor={Colors.buttonTextColor}
            shadeBorderRadius={1.5}
            style={Styles.smallButton}
            onPress={this.handleNext}
          />
        </View>
      </View>
    );
  }
}

const screenStyles = StyleSheet.create({
  textInput: {
    paddingTop: 20,
    paddingLeft: 35,
    paddingRight: 35,
  },
});
