import React, { Component } from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";

import { OutlinedTextField } from "react-native-material-textfield";
import { RaisedTextButton } from "react-native-material-buttons";

// plugins
import I18n from "../../plugins/I18n";

//Custom Components
import { Heading, CardView } from "../../components";

//Theme
import { Styles, Colors } from "../../../theme";

const QUESTIONS_LIST = I18n.t(`QUESTIONS_LIST.PrecautionsInit`);
const WRITING_STYLE = I18n.locale;
export default class Precautions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeQuestion: 0
    };
  }

  onNextButton() {
    this.props.navigation.navigate("Precautions");
  }
  onBackButton() {
    this.props.navigation.goBack();
  }
  render() {
    const { activeQuestion } = this.state;
    const style = WRITING_STYLE === "ur" ? { writingDirection: "rtl" } : {};
    return (
      <View style={Styles.container}>
        <Heading headerText={I18n.t(`headings.PRECAUTIONS`)} />

        <CardView Styles={Styles.Spacer50} />
        {QUESTIONS_LIST.map((q, i) => {
          return (
            <React.Fragment key={i}>
              <Text
                style={[Styles.answer, { textAlign: "center", lineHeight: 24 }]}
              >
                {q.Answer}
              </Text>

              <Text
                style={[
                  Styles.topQuestion,
                  { textAlign: "center", lineHeight: 24, letterSpacing: 0.24 }
                ]}
              >
                {q.Question}
              </Text>
            </React.Fragment>
          );
        })}

        {/* bottom buttons */}
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
