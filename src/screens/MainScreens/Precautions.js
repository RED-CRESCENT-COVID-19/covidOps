import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

import { OutlinedTextField } from "react-native-material-textfield";
import { RaisedTextButton } from "react-native-material-buttons";

// plugins
import I18n from "../../plugins/I18n";

//Custom Components
import Heading from "../../components/Heading";
import CardView from "../../components/CardView";
//Theme
import { Strings, Styles, Colors } from "../../../theme";

export default class Precautions extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <Heading headerText={I18n.t(`headings.PRECAUTIONS`)} />
        <Text style={Styles.topParagraph}>
          {I18n.t(`Paragarphs.PRECAUTIONS`)}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
