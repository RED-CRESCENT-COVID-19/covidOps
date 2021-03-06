import React, { Component } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import {
  TextField,
  FilledTextField,
  OutlinedTextField
} from "react-native-material-textfield";

import Textarea from "react-native-textarea";

//Theme
import { Strings, Styles, Colors } from "../../theme";

export default class TextA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }
  onChange(e) {
    this.setState({ text: e.target.value });
  }
  render() {
    return (
      <OutlinedTextField
        label="Phone number"
        keyboardType="phone-pad"
        multiline
        formatText={this.formatText}
        onSubmitEditing={this.onSubmit}
        ref={this.fieldRef}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    justifyContent: "center",
    alignItems: "center"
  },
  textareaContainer: {
    height: 180,
    padding: 5,
    backgroundColor: "#F5FCFF"
  },
  textarea: {
    textAlignVertical: "top", // hack android
    height: 170,
    fontSize: 14,
    color: "#333"
  }
});
