import React, { Component } from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";

import { RaisedTextButton } from "react-native-material-buttons";

// plugins
import I18n from "../../plugins/I18n";

//Custom Components
import { Heading } from "../../components";

//Theme
import { Styles, Colors } from "../../../theme";

const QUESTIONS_LIST = I18n.t(`QUESTIONS_LIST.NewPrecautions`);
const WRITING_STYLE = I18n.locale;
export default class NewPrecautions extends Component {
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
      this.props.navigation.navigate("HouseHoldDetails", { update: true });
    }
  }
  onBackButton() {
    const { activeQuestion } = this.state;
    if (activeQuestion > 0)
      this.setState({ activeQuestion: activeQuestion - 1 });
    else {
      //  this.props.navigation.goBack();
      this.props.navigation.navigate("HouseHoldDetails");
    }
  }
  render() {
    const style = WRITING_STYLE === "ur" ? { writingDirection: "rtl" } : {};
    const { activeQuestion } = this.state;
    return (
      <View style={Styles.container}>
        <Heading headerText={I18n.t(`headings.NEWPRECAUTIONS`)} />

        <Text style={Styles.topQuestion}>
          {QUESTIONS_LIST[activeQuestion].Question}
        </Text>
        <ScrollView style={Styles.ScrollView}>
          <Text style={[Styles.answer, { textAlign: "center" }]}>
            {QUESTIONS_LIST[activeQuestion].Answer}
          </Text>
        </ScrollView>
        <View style={Styles.buttonsContainer}>
          <RaisedTextButton
            title={I18n.t(`ButtonTitles.NO`)}
            color={Colors.secondaryColor}
            titleColor={Colors.buttonTextColor}
            shadeBorderRadius={1.5}
            style={Styles.smallButton}
            onPress={() => this.onBackButton()}
          />
          <RaisedTextButton
            title={I18n.t(`ButtonTitles.YES`)}
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

const styles = StyleSheet.create({});
