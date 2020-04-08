import React, { Component } from "react";
import { Text, View, ScrollView, Alert, AsyncStorage } from "react-native";

import { RaisedTextButton } from "react-native-material-buttons";

// plugins
import I18n from "../../plugins/I18n";

//Custom Components
import {
  Heading,
  InfoList,
  CardView,
  ExtendedButton,
  Loader,
} from "../../components";
//Theme
import { Styles, Colors } from "../../../theme";
// Service
import Http from "../../services/HttpService";

const WRITING_STYLE = I18n.locale;

const homeIcon = require("../../../assets/images/home.png");

class HouseHoldDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { apiData: [], isLoading: false };
    this.getPersons = this.getPersons.bind(this);
    this.onDeletePerson = this.onDeletePerson.bind(this);
  }

  async componentDidMount() {
    await this.getPersons();
  }
  static getDerivedStateFromProps(props, state) {
    state;
  }

  async getPersons() {
    delete this.props.route.params.update;
    this.setState({ isLoading: true });
    const token = await AsyncStorage.getItem("AuthToken");
    const houseId = await AsyncStorage.getItem("HouseID");

    const url = "persons/" + houseId;
    Http.get(url, {}, { headers: { "access-token": token } })
      .then((response) => {
        this.setState({ isLoading: false });
        if (response.status == 200) {
          if (response.data.length > 0) {
            this.setState({ apiData: response.data.reverse() });
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
        // console.log("this. state data is: ", this.state.apiData);
      })
      .catch((err) => {
        this.setState({ isLoading: false });
        console.log("house hold details error is: ", err);
      });
  }

  // person delete
  async onDeletePerson(id) {
    // console.log("onDeletePerson id is: ", id);
    this.setState({ isLoading: true });
    const token = await AsyncStorage.getItem("AuthToken");

    Http.delete(`person/${id}`, {}, { headers: { "access-token": token } })
      .then((res) => {
        // console.log("onDeletePerson res is: ", res);
        // console.log("this.state in then is: ", this.state);
        this.setState({ isLoading: false });
        const index = this.state.apiData
          .map(function(item) {
            return item.id;
          })
          .indexOf(id);
        // console.log("index is: ", index);
        if (index > -1) {
          this.state.apiData.splice(index, 1);
        }
        // console.log("Again this.state is: ", this.state);

        if (res.status === 400) {
          Alert.alert(
            "Information!",
            `${res.data.message}`,
            [
              {
                text: "Cancel",
                onPress: () => {
                  console.log("Cancel Pressed");
                },
                style: "cancel",
              },
              {
                text: "OK",
                onPress: () => {
                  console.log("OK Pressed");
                },
              },
            ],
            { cancelable: false }
          );
        }
        if (res.status === 204) {
          this.setState({ apiData: this.state.apiData });

          Alert.alert(
            "Information!",
            "Successfully deleted the person",
            [
              {
                text: "Cancel",
                onPress: () => {
                  console.log("Cancel Pressed");
                },
                style: "cancel",
              },
              {
                text: "OK",
                onPress: () => {
                  console.log("OK Pressed");
                },
              },
            ],
            { cancelable: false }
          );
        }
        // console.log("this. state data is: ", this.state.apiData);
      })
      .catch((err) => {
        this.setState({ isLoading: false });
        Alert.alert(
          "Information!",
          "Please try Again!",
          [
            {
              text: "Cancel",
              onPress: () => {
                console.log("Cancel Pressed");
              },
              style: "cancel",
            },
            {
              text: "OK",
              onPress: () => {
                console.log("OK Pressed");
              },
            },
          ],
          { cancelable: false }
        );
      });
  }

  handleAddHouseHold = () => {
    this.props.navigation.navigate("MemberDetails");
  };
  handleDone = () => {
    this.props.navigation.navigate("PrecautionsInit");
  };

  onCancle = () => {
    Alert.alert(
      I18n.t(`Alert.HOUSEHOLDDETAIL.TITLE`),
      I18n.t(`Alert.HOUSEHOLDDETAIL.DETAIL`),
      [
        {
          text: I18n.t(`ButtonTitles.CANCEL`),
          onPress: () => console.log("cancel Pressed"),
          style: "cancel",
        },
        {
          text: I18n.t(`ButtonTitles.YES`),
          onPress: async () => {
            await AsyncStorage.removeItem("HouseID");
            this.props.navigation.navigate("HealthScan");
          },
        },
      ],
      { cancelable: false }
    );
  };
  render() {
    const { apiData } = this.state;
    const style = WRITING_STYLE === "ur" ? { writingDirection: "rtl" } : {};

    // call the api to get the data when enter in this screen
    this.props.route.params.update && this.getPersons();

    let loader;
    if (this.state.isLoading) {
      loader = <Loader />;
    } else {
      loader = <View />;
    }
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
          {apiData.map((d, i) => (
            <InfoList
              data={d}
              key={d.createdAt}
              indicator={i + 1}
              {...this.props}
              onDeletePerson={this.onDeletePerson}
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
        {loader}
      </View>
    );
  }
}
export default HouseHoldDetails;
