import React, { Component } from "react";
import { Text, View, ScrollView, Alert, AsyncStorage } from "react-native";
import { RaisedTextButton } from "react-native-material-buttons";
import I18n from "../../plugins/I18n";
import {
  Heading,
  InfoList,
  CardView,
  ExtendedButton,
  Loader
} from "../../components";
import { Styles, Colors } from "../../../theme";
import { getHouseHoldDetail, setResponse, deleteHome } from "../../actions";
import { connect } from "react-redux";

const WRITING_STYLE = I18n.locale;

import Http from "../../services/HttpService";

const homeIcon = require("../../../assets/images/home.png");

class HouseHoldDetails extends Component {
  constructor(props) {
    super(props);
    this.getPersons = this.getPersons.bind(this);
    this.onDeletePerson = this.onDeletePerson.bind(this);
  }

  componentWillMount() {
    this._unsubscribe = this.props.navigation.addListener("focus", async () => {
      await this.getPersons();
    });
  }
  componentWillUnmount() {
    this._unsubscribe();
  }
  async getPersons() {
    delete this.props.route.params.update;
    this.setState({ isLoading: true });
    const token = await AsyncStorage.getItem("AuthToken");
    const houseId = await AsyncStorage.getItem("HouseID");
    this.props.getHouseHoldDetails(token, houseId);
  }

  // person delete
  async onDeletePerson(id) {
    this.setState({ isLoading: true });
    const token = await AsyncStorage.getItem("AuthToken");

    Http.delete(`person/${id}`, {}, { headers: { "access-token": token } })
      .then(res => {
        this.setState({ isLoading: false });
        const index = this.state.apiData
          .map(function(item) {
            return item.id;
          })
          .indexOf(id);
        if (index > -1) {
          this.state.apiData.splice(index, 1);
        }
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
                style: "cancel"
              },
              {
                text: "OK",
                onPress: () => {
                  console.log("OK Pressed");
                }
              }
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
                style: "cancel"
              },
              {
                text: "OK",
                onPress: () => {
                  console.log("OK Pressed");
                }
              }
            ],
            { cancelable: false }
          );
        }
      })
      .catch(err => {
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
              style: "cancel"
            },
            {
              text: "OK",
              onPress: () => {
                console.log("OK Pressed");
              }
            }
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
          style: "cancel"
        },
        {
          text: I18n.t(`ButtonTitles.YES`),
          onPress: async () => {
            const token = await AsyncStorage.getItem("AuthToken");
            const houseId = await AsyncStorage.getItem("HouseID");
            this.props.deleteHomes(token, houseId);
            this.props.navigation.navigate("HealthScan");
          }
        }
      ],
      { cancelable: false }
    );
  };
  render() {
    const style = WRITING_STYLE === "ur" ? { writingDirection: "rtl" } : {};

    // call the api to get the data when enter in this screen
    this.props.route.params.update && this.getPersons();

    let loader;
    if (this.props.loading) {
      loader = <Loader />;
    } else {
      loader = <View />;
    }
    return (
      <View style={Styles.container}>
        <Heading headerText={I18n.t(`headings.HOMEHOLD`)} />
        {this.props.response
          ? this.props.data.length === 0 && (
              <Text style={[Styles.topParagraph, style]}>
                {I18n.t(`Paragarphs.HOME`)}
              </Text>
            )
          : null}
        <CardView Styles={Styles.Spacer50} />

        <ScrollView style={Styles.ScrollView}>
          {this.props.response
            ? this.props.data.length > 0 &&
              this.props.data.map((d, i) => (
                <InfoList
                  itemData={d}
                  key={d.id}
                  indicator={i + 1}
                  {...this.props}
                  onDeletePerson={this.onDeletePerson}
                  HouseHoldDetails={I18n.t(`Labels.MEMBER`)}
                />
              ))
            : null}
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
const mapStateToProps = state => ({
  loading: state.home.loading,
  response: state.home.response,
  data: state.home.data
});
const mapDispatchToProps = dispatch => ({
  getHouseHoldDetails: (token, houseId) => {
    return dispatch(getHouseHoldDetail(token, houseId));
  },
  deleteHomes: (token, houseId) => {
    console.log("dispatch delete home token is: ", token);
    console.log("dispatch delete home houseId is: ", houseId);
    return dispatch(deleteHome(houseId, token));
  },
  toggleResponse: () => dispatch(setResponse())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HouseHoldDetails);
