import React, { Component } from "react";
import { StyleSheet, View, ScrollView, AsyncStorage } from "react-native";

import { RaisedTextButton } from "react-native-material-buttons";

// plugins
import I18n from "../../plugins/I18n";

//Custom Components
import { CardView, InfoList, Heading, Loader } from "../../components";

// Service
import Http from "../../services/HttpService";

//Theme
import { Styles, Colors } from "../../../theme";

export default class HouseholdHistory extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [], isLoading: false };
  }
  handleDone = () => {
    this.props.navigation.goBack();
  };
  async componentDidMount() {
    this.setState({ isLoading: true });
    const token = await AsyncStorage.getItem("AuthToken");
    const url = "house";
    Http.get(url, {}, { headers: { "access-token": token } })
      .then(response => {
        this.setState({ isLoading: false });
        console.log("house hold history response is: ", response);
        if (response.status == 200) {
          // console.log(response.data)
          if (response.data.length > 0) {
            this.setState({ data: response.data.reverse() });
          } else {
            // console.log(this.response.data)
          }
          // this.setState({
          //   persons: response.data.person_count,
          //   houses: response.data.house_count
          // });
        } else {
          // TOOD:: error handling
        }
      })
      .catch(err => {
        this.setState({ isLoading: false });
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
    let loader;
    if (this.state.isLoading) {
      loader = <Loader />;
    } else {
      loader = <View />;
    }

    return (
      <View style={Styles.container}>
        <Heading headerText={I18n.t(`headings.HOUSEHOLDHISTORY`)} />
        <CardView Styles={Styles.Spacer50} />

        {this.state.data.length > 0 && (
          <ScrollView style={Styles.ScrollView}>
            {this.state.data.map(d => (
              <InfoList
                data={d}
                key={d.id}
                {...this.props}
                HouseHoldDetails={""}
              />
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
        {loader}
      </View>
    );
  }
}

const styles = StyleSheet.create({});
