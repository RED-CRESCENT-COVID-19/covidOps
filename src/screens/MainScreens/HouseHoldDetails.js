import React, { Component } from "react";
import { Text, StyleSheet, View, ScrollView, Dimensions } from "react-native";

import { OutlinedTextField } from "react-native-material-textfield";
import { RaisedTextButton } from "react-native-material-buttons";

// plugins
import I18n from "../../plugins/I18n";

//Custom Components
import { Heading, InfoList, CardView, ExtendedButton } from "../../components";
//Theme
import { Strings, Styles, Colors } from "../../../theme";

// Height and Width of Current Device Screen
const { height, width } = Dimensions.get("window");
const WRITING_STYLE = I18n.locale;

const DATA = [
  {
    name: "Rizwan",
    cnic: "4352345245",
    id: "435224434565"
  },
  {
    name: "Zaheer",
    cnic: "4352256745",
    id: "43522ds45"
  },
  {
    name: "Ahmed",
    cnic: "435wer2245",
    id: "435223424522"
  },
  {
    name: "faysal",
    cnic: "4352342245",
    id: "435223424542"
  },
  {
    name: "fazlo",
    cnic: "4352342245",
    id: "435223424512"
  },
  {
    name: "adfadf",
    cnic: "435224234325",
    id: "4352223445"
  }
];

const homeIcon = require("../../../assets/images/home.png");

export default class HouseHoldDetails extends Component {
  handleAddHouseHold = () => {
    this.props.navigation.navigate("MemberDetails");
  };
  handleDone = () => {
    this.props.navigation.navigate("PrecautionsInit");
  };
  render() {
    const style = WRITING_STYLE === "ur" ? { writingDirection: "rtl" } : {};
    return (
      <View style={Styles.container}>
        <Heading headerText={I18n.t(`headings.HOMEHOLD`)} />
        {DATA.length === 0 && (
          <Text style={[Styles.topParagraph, style]}>
            {I18n.t(`Paragarphs.HOME`)}
          </Text>
        )}
        <CardView Styles={Styles.Spacer50} />

        <ScrollView style={Styles.ScrollView}>
          {DATA.map(d => (
            <InfoList data={d} key={d.id} {...this.props} />
          ))}
        </ScrollView>
        <View style={Styles.largebuttonsContainer}>
          <ExtendedButton
            IconSource={homeIcon}
            title={I18n.t(`ButtonTitles.ADDNEWHOUSEHOLD`)}
            color={Colors.primaryColor}
            titleColor={Colors.buttonTextColor}
            style={[Styles.largeButton, { bottom: 100 }]}
            shadeBorderRadius={1.5}
            onPress={this.handleAddHouseHold}
          />
        </View>
        <View style={Styles.buttonsContainer}>
          <RaisedTextButton
            title={I18n.t(`ButtonTitles.CANCEL`)}
            color={Colors.secondaryColor}
            titleColor={Colors.buttonTextColor}
            shadeBorderRadius={1.5}
            style={Styles.smallButton}
          />
          <RaisedTextButton
            title={I18n.t(`ButtonTitles.DONE`)}
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
