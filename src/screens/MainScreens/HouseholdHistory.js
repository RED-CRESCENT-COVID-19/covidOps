import React, { Component } from "react";
import { StyleSheet, View, ScrollView,AsyncStorage } from "react-native";

import { RaisedTextButton } from "react-native-material-buttons";

// plugins
import I18n from "../../plugins/I18n";

//Custom Components
import { CardView, Heading } from "../../components";
import InfoList from "../../components/InfoList";

// Service
import Http from "../../services/HttpService";

//Theme
import { Strings, Styles, Colors } from "../../../theme";

const DATA = [
  // {
  //   name: "Rizwan",
  //   cnic: "4352345245",
  //   id: "435224434565"
  // },
  // {
  //   name: "Zaheer",
  //   cnic: "4352256745",
  //   id: "43522ds45"
  // },
  // {
  //   name: "Ahmed",
  //   cnic: "435wer2245",
  //   id: "435223424522"
  // },
  // {
  //   name: "faysal",
  //   cnic: "4352342245",
  //   id: "435223424542"
  // },
  // {
  //   name: "fazlo",
  //   cnic: "4352342245",
  //   id: "435223424512"
  // },
  // {
  //   name: "adfadf",
  //   cnic: "435224234325",
  //   id: "4352223445"
  // }
];
export default class HouseholdHistory extends Component {

  constructor(props) {
    super(props);
    this.state = {data:[] };
  }
  handleDone = () => {
    this.props.navigation.goBack();
  };
  async componentDidMount() {
    const token = await AsyncStorage.getItem("AuthToken");
    const url = 'house'
    Http.get(url,{},{ headers: { "access-token": token } })
      .then(response => {
        console.log(response)
        if (response.status == 201) {
          // console.log(response.data)
          if(response.data.length >= 1){
            this.setState({data:response.data})
          }else {
            // console.log(this.response.data)
          }
          this.response.data
          // this.setState({
          //   persons: response.data.person_count,
          //   houses: response.data.house_count
          // });
        } else {
          // TOOD:: error handling
        }
      })
      .catch(err => {});
  }
  render() {
    return (
      <View style={Styles.container}>
        <Heading headerText={I18n.t(`headings.HOUSEHOLDHISTORY`)} />
        {/* <CardView Styles={Styles.Spacer300} /> */}
        <CardView Styles={Styles.Spacer50} />
        <ScrollView style={Styles.ScrollView}>
          {this.state.data.map(d => (
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
