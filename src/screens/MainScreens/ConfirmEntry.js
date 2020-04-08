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
    this.state = {
      address: "",
      createdAt: "",
    };
  }
  componentDidMount() {
    this.getHouseId();
  }
  handleBack = () => {
    this.props.navigation.goBack();
  };

  async getHouseId() {
    const houseId = await AsyncStorage.getItem("HouseID");
    const HouseIDDetail = await AsyncStorage.getItem("HouseIDDetail");
    this.setState({
      address: JSON.parse(HouseIDDetail).address,
      createdAt: JSON.parse(HouseIDDetail).createdAt,
    });
    console.log("houseId is: ", houseId);
    console.log("HouseIDDetail is: ", JSON.parse(HouseIDDetail));
  }
  handleNext = () => {
    this.props.navigation.navigate("HealthScan");
  };
  onChangeText(e) {
    console.log("e is: ", e);
  }

  render() {
    console.log("Confirm this.props is: ", this.props);

    const style = WRITING_STYLE === "ur" ? { writingDirection: "rtl" } : {};
    const { address, createdAt } = this.state;
    const ts = new Date(createdAt);
    const date = ts.toLocaleDateString();
    const time = ts.toLocaleTimeString();
    return (
      <View style={Styles.container}>
        <Heading headerText={I18n.t(`headings.CONFIRMENTERY`)} />
        <Text style={[Styles.topParagraph, style]}>
          {I18n.t(`Paragarphs.CONFIRMENTERY`)}
        </Text>
        <View style={screenStyles.textInput}>
          <TextField
            label={`${time} - ${date} ` || I18n.t(`Labels.CONFIRMENTERY.LABEL`)}
            keyboardType="phone-pad"
            placeholder={address || I18n.t(`Labels.CONFIRMENTERY.EAMPLE`)}
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
