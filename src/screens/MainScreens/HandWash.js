import React, { Component } from "react";
import {
  View,
  Text,
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet
} from "react-native";

import { OutlinedTextField } from "react-native-material-textfield";
import { RaisedTextButton } from "react-native-material-buttons";

// plugins
import I18n from "../../plugins/I18n";

//Custom Components
import Heading from "../../components/Heading";
import CardView from "../../components/CardView";
//Theme
import { Strings, Styles, Colors } from "../../../theme";

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
      <View style={Styles.container}>
        <Heading headerText={I18n.t(`Paragarphs.INFORMATIONCARE.TTITLE`)} />
        <Text style={[Styles.topParagraph, style]}>
          {I18n.t(`Paragarphs.INFORMATIONCARE.HANDWASH`)}
        </Text>
        <View style={Styles.Spacer20} />
        <View style={screenStyles.imageView}>
          <Image
            style={screenStyles.handWashImage}
            source={{
              uri:
                "https://s3-alpha-sig.figma.com/img/a9c7/d81c/8852662f777ccd2a7a1c165e0f5e00bc?Expires=1586131200&Signature=bnnjuryfP54VY6U-U1ahCOTpM05e~pqixBgzb5fhAsWUtdeWTfOArQpgOnAJS6YvH7aKh2dloWOuL5RsBnUOv5AcgMDbxNxr6k8kehBPpd9Pzjbuskh~R3vm5FwRUPbgSZxbN8Kk1-bqecgwTT5eoVFdpojH640sdO9Nc3tEaw53mvabkNPB6uZ2vF2sHQO8Ez~yaeNBrIma9VHaZ9Ws~~pr992~5ZpjZohy4AIogJeEQ3VfspILhUyroxy1hPzNIF-JECvoN09tOUBhD2Ms0b-yuWsu1kNeWZUnnVJp7c7ucC4-LxHjaTqKaF2GYZUWY7quXK6~aziu8ZH~4PWNvw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            }}
          />
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
