import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

import { RaisedTextButton } from "react-native-material-buttons";

import Http from "../../services/HttpService";

// plugins
import I18n from "../../plugins/I18n";

//Custom Components
import Heading from "../../components/Heading";
import InfoItem from "../../components/InfoItem";
//Theme
import { Styles, Colors } from "../../../theme";

const WRITING_STYLE = I18n.locale;
export default class Advisory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      helpline: "",
      website: "",
      number: ""
    };
  }
  handleCancel = () => {
    this.props.navigation.goBack();
  };
  handleDone = () => {
    this.props.navigation.navigate("HandWash", this.props);
  };
  render() {
    const style = WRITING_STYLE === "ur" ? { writingDirection: "rtl" } : {};

    return (
      <View style={Styles.container}>
        <Heading headerText={I18n.t(`headings.ADVISORY`)} />
        <Text style={[Styles.topParagraph, style]}>
          {I18n.t(`Paragarphs.ADVISORY`)}
        </Text>
        <View style={Styles.Spacer20} />

        {/* Info item */}
        <InfoItem
          title={I18n.t(`Paragarphs.Advisory.HELPLINE.TITLE`)}
          info={I18n.t(`Paragarphs.Advisory.HELPLINE.PHONE`)}
        />
        <InfoItem
          title={I18n.t(`Paragarphs.Advisory.WEBSITE.TITLE`)}
          info={I18n.t(`Paragarphs.Advisory.WEBSITE.URL`)}
        />
        <InfoItem
          title={I18n.t(`Paragarphs.Advisory.MESSAGE.TITLE`)}
          info={I18n.t(`Paragarphs.Advisory.MESSAGE.PHONE`)}
        />
        <View style={Styles.Spacer50} />
        <View style={Styles.buttonsContainer}>
          <RaisedTextButton
            title={I18n.t(`ButtonTitles.BACK`)}
            color={Colors.secondaryColor}
            titleColor={Colors.buttonTextColor}
            shadeBorderRadius={1.5}
            style={Styles.smallButton}
            onPress={this.handleCancel}
          />
          <RaisedTextButton
            title={I18n.t(`ButtonTitles.NEXT`)}
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

const screenStyles = StyleSheet.create({
  textInput: {
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20
  }
});
