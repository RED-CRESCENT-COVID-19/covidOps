import React, { Component } from "react";
import { Text, View, ScrollView } from "react-native";

import { RaisedTextButton } from "react-native-material-buttons";

// plugins
import I18n from "../../plugins/I18n";

//Custom Components
import { Heading } from "../../components/";

//Theme
import { Styles, Colors } from "../../../theme";

const QUESTIONS_LIST = I18n.t(`QUESTIONS_LIST.Information`);

export default class Information extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeQuestion: 0
    };
  }

  onNextButton() {
    const { activeQuestion } = this.state;
    if (activeQuestion < QUESTIONS_LIST.length - 1)
      this.setState({ activeQuestion: activeQuestion + 1 });
    else {
      this.props.navigation.navigate("Advisory");
    }
  }
  onBackButton() {
    const { activeQuestion } = this.state;
    if (activeQuestion > 0)
      this.setState({ activeQuestion: activeQuestion - 1 });
    else {
      this.props.navigation.goBack();
    }
  }
  render() {
    const { activeQuestion } = this.state;
    return (
      <View style={Styles.container}>
        <Heading headerText={I18n.t(`Paragarphs.INFORMATIONCARE.TTITLE`)} />
        <Text style={Styles.topQuestion}>
          {QUESTIONS_LIST[activeQuestion].Question}
        </Text>
        <ScrollView style={Styles.ScrollView}>
          <Text style={Styles.answer}>
            {QUESTIONS_LIST[activeQuestion].Answer}
          </Text>
        </ScrollView>
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
