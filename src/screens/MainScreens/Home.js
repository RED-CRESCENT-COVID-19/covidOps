import React, { Component } from "react";
import { Text, View, ScrollView } from "react-native";

import { RaisedTextButton } from "react-native-material-buttons";

// plugins
import I18n from "../../plugins/I18n";

//Custom Components
import { InfoList, Heading, CardView } from "../../components";

//Theme
import { Styles, Colors } from "../../../theme";

const WRITING_STYLE = I18n.locale;

const DATA = [
  // {
  //   name: "Rizwan",
  //   cnic: "4352345245",
  //   id: "435224434565"
  // },
];
export default class Home extends Component {
  handleDone = () => {
    this.props.navigation.navigate("Advisory");
  };
  render() {
    const style = WRITING_STYLE === "ur" ? { writingDirection: "rtl" } : {};
    return (
      <View style={Styles.container}>
        <Heading headerText={I18n.t(`headings.HOME`)} />
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
