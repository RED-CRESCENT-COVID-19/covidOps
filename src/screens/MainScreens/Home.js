import React, { Component } from "react";
import { Text, StyleSheet, View, ScrollView, Dimensions } from "react-native";

import { OutlinedTextField } from "react-native-material-textfield";
import { RaisedTextButton } from "react-native-material-buttons";

// plugins
import I18n from "../../plugins/I18n";

//Custom Components
import Heading from "../../components/Heading";
import CardView from "../../components/CardView";
import InfoList from "../../components/InfoList";
//Theme
import { Strings, Styles, Colors } from "../../../theme";

// Height and Width of Current Device Screen
const { height, width } = Dimensions.get("window");

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
export default class Home extends Component {
  handleDone = () => {
    this.props.navigation.navigate("Advisory");
  };
  render() {
    return (
      <View style={Styles.container}>
        <Heading headerText={I18n.t(`headings.HOME`)} />
        {DATA.length === 0 && (
          <Text style={Styles.topParagraph}>{I18n.t(`Paragarphs.HOME`)}</Text>
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

const styles = StyleSheet.create({});
