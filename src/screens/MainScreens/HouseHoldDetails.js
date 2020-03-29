import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
  Alert,
  AsyncStorage
} from "react-native";


import { RaisedTextButton } from "react-native-material-buttons";

// plugins
import I18n from "../../plugins/I18n";

//Custom Components
import { Heading, InfoList, CardView, ExtendedButton } from "../../components";
//Theme
import { Strings, Styles, Colors } from "../../../theme";
// Service
import Http from "../../services/HttpService";

const WRITING_STYLE = I18n.locale;

const homeIcon = require("../../../assets/images/home.png");

export default class HouseHoldDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { apiData: [] };
  }
  handleAddHouseHold = () => {
    this.props.navigation.navigate("MemberDetails");
  };
  handleDone = () => {
    this.props.navigation.navigate("PrecautionsInit");
  };

  async componentDidMount() {
    const token = await AsyncStorage.getItem("AuthToken");
    const houseId = await AsyncStorage.getItem("HouseID");

    const url = "persons/" + houseId;
    Http.get(url, {}, { headers: { "access-token": token } })
      .then(response => {
        if (response.status == 201) {
          // console.log(response.data)

          if (response.data.length > 0) {
            this.setState({ apiData: response.data });
          } else {
            // console.log(this.response.data)
          }
          // this.response.data;
          // this.setState({
          //   persons: response.data.person_count,
          //   houses: response.data.house_count
          // });
        } else {
          // TOOD:: error handling
        }
        consoe.log("this. state data is: ", this.state.apiData);
      })
      .catch(err => {});
  }
  onCancle = () => {
    Alert.alert(
      I18n.t(`Alert.HOUSEHOLDDETAIL.TITLE`),
      I18n.t(`Alert.HOUSEHOLDDETAIL.DETAIL`),
      [
        {
          text: I18n.t(`ButtonTitles.CANCEL`),
          onPress: () => console.log("cancel Pressed"),
          style: "cancel"
        },
        {
          text: I18n.t(`ButtonTitles.YES`),
          onPress: async () => {
            await AsyncStorage.removeItem("HouseID");
            this.props.navigation.navigate("HealthScan");
          }
        }
      ],
      { cancelable: false }
    );
  };
  render() {
    const { apiData } = this.state;
    const style = WRITING_STYLE === "ur" ? { writingDirection: "rtl" } : {};

    return (
      <View style={Styles.container}>
        <Heading headerText={I18n.t(`headings.HOMEHOLD`)} />
        {apiData.length === 0 && (
          <Text style={[Styles.topParagraph, style]}>
            {I18n.t(`Paragarphs.HOME`)}
          </Text>
        )}
        <CardView Styles={Styles.Spacer50} />

        <ScrollView style={Styles.ScrollView}>
          {apiData.map(d => (
            <InfoList
              data={d}
              key={d.unique_id}
              {...this.props}
              HouseHoldDetails={I18n.t(`Labels.MEMBER`)}
            />
          ))}
        </ScrollView>
        <View style={Styles.largebuttonsContainer}>
          <ExtendedButton
            IconSource={homeIcon}
            title={I18n.t(`ButtonTitles.ADDNEWHOUSEHOLD`)}
            color={Colors.primaryColor}
            titleColor={Colors.buttonTextColor}
            style={[Styles.largeButton, { bottom: 100 }]}
            shadeBorderRadius={1.5}
            onPress={this.handleAddHouseHold}
          />
        </View>
        <View style={Styles.buttonsContainer}>
          <RaisedTextButton
            title={I18n.t(`ButtonTitles.CANCEL`)}
            color={Colors.secondaryColor}
            titleColor={Colors.buttonTextColor}
            shadeBorderRadius={1.5}
            style={Styles.smallButton}
            onPress={this.onCancle}
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
