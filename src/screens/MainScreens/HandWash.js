import React, { Component } from "react";
import {
  View,
  Text,
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet
} from "react-native";

import { RaisedTextButton } from "react-native-material-buttons";

// plugins
import I18n from "../../plugins/I18n";

//Custom Components
import { Heading } from "../../components";

//Theme
import { Styles, Colors } from "../../../theme";

// images

import Handwash from "../../../assets/images/handwash.png";

const { height, width } = Dimensions.get("window");

const WRITING_STYLE = I18n.locale;
export default class HandWash extends Component {
  constructor(props) {
    super(props);
  }

  onNextButton() {
    this.props.navigation.navigate("SMSService");
  }
  onBackButton() {}

  render() {
    const style = WRITING_STYLE === "ur" ? { writingDirection: "rtl" } : {};
    return (
      <View style={[Styles.container, { backgroundColor: "white" }]}>
        <Heading headerText={I18n.t(`Paragarphs.INFORMATIONCARE.TTITLE`)} />
        <Text style={[Styles.topParagraph, style]}>
          {I18n.t(`Paragarphs.INFORMATIONCARE.HANDWASH`)}
        </Text>
        <View style={Styles.Spacer20} />
        <View style={screenStyles.imageView}>
          <Image style={screenStyles.handWashImage} source={Handwash} />
        </View>
        <View style={Styles.buttonsContainer}>
          <RaisedTextButton
            title={I18n.t(`ButtonTitles.BACK`)}
            color={Colors.secondaryColor}
            titleColor={Colors.buttonTextColor}
            shadeBorderRadius={1.5}
            style={Styles.smallButton}
            onPress={() => this.onBackButton()}
          />
          <RaisedTextButton
            title={I18n.t(`ButtonTitles.NEXT`)}
            color={Colors.primaryColor}
            titleColor={Colors.buttonTextColor}
            shadeBorderRadius={1.5}
            style={Styles.smallButton}
            onPress={() => this.onNextButton()}
          />
        </View>
      </View>
    );
  }
}

const screenStyles = StyleSheet.create({
  imageView: {
    paddingLeft: 35,
    paddingRight: 35,
    height: height - 280,
    alignItems: "center",
    alignContent: "center"
  },
  handWashImage: {
    width: 350,
    height: 500,
    resizeMode: "cover",
    backgroundColor: Colors.transparent
  }
});
