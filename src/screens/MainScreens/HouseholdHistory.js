import React, { Component } from "react";
import { StyleSheet, View, ScrollView } from "react-native";

import { RaisedTextButton } from "react-native-material-buttons";

// plugins
import I18n from "../../plugins/I18n";

//Custom Components
import { CardView, Heading } from "../../components";
import InfoList from "../../components/InfoList";

//Theme
import { Strings, Styles, Colors } from "../../../theme";

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
export default class HouseholdHistory extends Component {
  handleDone = () => {
    this.props.navigation.goBack();
  };
  render() {
    return (
      <View style={Styles.container}>
        <Heading headerText={I18n.t(`headings.HOUSEHOLDHISTORY`)} />
        {/* <CardView Styles={Styles.Spacer300} /> */}
        <CardView Styles={Styles.Spacer50} />
        <ScrollView style={Styles.ScrollView}>
          {DATA.map(d => (
            <InfoList data={d} key={d.id} {...this.props} />
          ))}
        </ScrollView>

        <View style={Styles.rightButtonContainer}>
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
