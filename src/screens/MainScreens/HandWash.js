import React, { Component } from "react";
import {
  View,
  Text,
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity
} from "react-native";

import { RaisedTextButton } from "react-native-material-buttons";
import ImageZoom from "react-native-image-pan-zoom";

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
    this.state = { isZoomed: false };
    this.zoomedRenderView = this.zoomedRenderView.bind(this);
    this.renderView = this.renderView.bind(this);
  }

  onNextButton() {
    this.props.navigation.navigate("SMSService");
  }
  onBackButton() {
    this.props.navigation.navigate("Advisory");
  }

  renderView() {
    const style = WRITING_STYLE === "ur" ? { writingDirection: "rtl" } : {};
    return (
      <>
        <Heading headerText={I18n.t(`Paragarphs.INFORMATIONCARE.TTITLE`)} />

        <Text style={[Styles.topParagraph, style]}>
          {I18n.t(`Paragarphs.INFORMATIONCARE.HANDWASH`)}
        </Text>
        <View style={Styles.Spacer20} />
        <View style={screenStyles.imageView}>
          <ImageZoom
            cropWidth={width}
            cropHeight={height - 300}
            imageWidth={350}
            imageHeight={500}
            onClick={() => {
              console.log("hand wash image clic is working!");
              this.setState({ isZoomed: true });
            }}
            maxScale={10}
            panToMove
            pinchToZoom
            onDragLeft={() => {
              alert("on drag left");
            }}
            onMove={position => {
              console.log("on move", position);
            }}
          >
            <Image style={screenStyles.handWashImage} source={Handwash} />
          </ImageZoom>
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
      </>
    );
  }

  zoomedRenderView() {
    return (
      <>
        <Image style={screenStyles.zoomedHandWashImage} source={Handwash} />
      </>
    );
  }
  render() {
    const { isZoomed } = this.state;
    const style = WRITING_STYLE === "ur" ? { writingDirection: "rtl" } : {};

    return (
      <View style={[Styles.container, { backgroundColor: "white" }]}>
        {isZoomed && (
          <TouchableOpacity
            onPress={() => {
              this.setState({ isZoomed: !this.state.isZoomed });
              console.log("cross clicked!");
            }}
            style={{ zIndex: 1000 }}
          >
            <Text
              style={[
                Styles.topParagraph,
                { textAlign: "center", marginTop: 30, fontSize: 30 }
              ]}
            >
              {"X"}
            </Text>
          </TouchableOpacity>
        )}

        {isZoomed ? this.zoomedRenderView() : this.renderView()}
      </View>
    );
  }
}

const screenStyles = StyleSheet.create({
  imageView: {
    paddingLeft: 35,
    paddingRight: 35,
    height: height,
    alignItems: "center",
    alignContent: "center"
  },
  handWashImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    backgroundColor: Colors.transparent
  },

  zoomedHandWashImage: {
    width: width,
    height: height,
    position: "absolute",
    resizeMode: "contain",
    bottom: 0
  }
});
