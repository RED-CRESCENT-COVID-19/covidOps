import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  AsyncStorage,
  Alert
} from "react-native";

import { RaisedTextButton } from "react-native-material-buttons";

// plugins
import I18n from "../../plugins/I18n";

//Custom Components
import { CardView, InfoList, Heading } from "../../components";

// Service
import Http from "../../services/HttpService";

//Theme
import { Styles, Colors } from "../../../theme";

export default class HouseholdHistory extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }
  handleDone = () => {
    this.props.navigation.goBack();
  };
  async componentDidMount() {
    const token = await AsyncStorage.getItem("AuthToken");
    const url = "house";
    Http.get(url, {}, { headers: { "access-token": token } })
      .then(response => {
        console.log("house hold history response is: ", response);
        if (response.status == 200) {
          // console.log(response.data)
          if (response.data.length >= 1) {
            this.setState({ data: response.data });
          } else {
            // console.log(this.response.data)
          }
          this.response.data;
          // this.setState({
          //   persons: response.data.person_count,
          //   houses: response.data.house_count
          // });
        } else {
          // TOOD:: error handling
        }
      })
      .catch(err => {
        // Alert.alert(
        //   `${err}`,
        //   "Keep your app up to date to enjoy the latest features",
        //   [
        //     {
        //       text: "Cancel",
        //       onPress: () => console.log("Cancel Pressed"),
        //       style: "cancel"
        //     },
        //     { text: "OK", onPress: () => console.log("OK Pressed") }
        //   ],
        //   { cancelable: false }
        // );
      });
  }
  render() {
    console.log("house hold history state is: ", this.state);
    return (
      <View style={Styles.container}>
        <Heading headerText={I18n.t(`headings.HOUSEHOLDHISTORY`)} />
        <CardView Styles={Styles.Spacer50} />
        {this.state.data.length > 0 && (
          <ScrollView style={Styles.ScrollView}>
            {this.state.data.map(d => (
              <InfoList data={d} key={d.id} {...this.props} />
            ))}
          </ScrollView>
        )}

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
