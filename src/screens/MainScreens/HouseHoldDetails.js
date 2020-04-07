import React, { Component } from "react";
import { Text, View, ScrollView, Alert, AsyncStorage } from "react-native";
import { RaisedTextButton } from "react-native-material-buttons";
import I18n from "../../plugins/I18n";
import {
  Heading,
  InfoList,
  CardView,
  ExtendedButton,
  Loader,
} from "../../components";
import { Styles, Colors } from "../../../theme";
import { getHouseHoldDetail, setResponse } from "../../actions";
import { connect } from "react-redux";

const WRITING_STYLE = I18n.locale;

const homeIcon = require("../../../assets/images/home.png");

class HouseHoldDetails extends Component {
  constructor(props) {
    super(props);
    this.getPersons = this.getPersons.bind(this);
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

        {this.props.response
          ? this.props.data.length > 0 && (
              <ScrollView style={Styles.ScrollView}>
                {this.props.data.map((d, i) => (
                  <InfoList
                    itemData={d}
                    key={d.createdAt}
                    indicator={i + 1}
                    {...this.props}
                    HouseHoldDetails={I18n.t(`Labels.MEMBER`)}
                  />
                ))}
              </ScrollView>
            )
          : null}
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
const mapStateToProps = (state) => ({
  loading: state.home.loading,
  response: state.home.response,
  data: state.home.data,
});
const mapDispatchToProps = (dispatch) => ({
  getHouseHoldDetails: (token, houseId) => {
    return dispatch(getHouseHoldDetail(token, houseId));
  },
  toggleResponse: () => dispatch(setResponse()),
});
export default connect(mapStateToProps, mapDispatchToProps)(HouseHoldDetails);
