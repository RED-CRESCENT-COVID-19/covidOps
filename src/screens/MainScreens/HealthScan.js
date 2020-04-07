import React, { Component } from "react";
import { Text, StyleSheet, View, AsyncStorage } from "react-native";
import { RaisedTextButton } from "react-native-material-buttons";
import I18n from "../../plugins/I18n";
import {
  CardView,
  ExtendedButton,
  Heading,
  CalculationLabel,
} from "../../components";
import { Styles, Colors } from "../../../theme";
import Http from "../../services/HttpService";
const WRITING_STYLE = I18n.locale;
import { connect } from "react-redux";
import { getStats, setResponse } from "../../actions";

class HealthScan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: true,
      persons: 0,
      houses: 0,
    };
  }
  componentWillMount() {
    this._unsubscribe = this.props.navigation.addListener("focus", async () => {
      const token = await AsyncStorage.getItem("AuthToken");
      this.props.toggleResponse();
      this.props.getStatsDispatcher(token);
    });
  }
  componentWillUnmount() {
    this._unsubscribe();
  }

  handleAddHouseHold = () => {
    this.props.navigation.navigate("HouseholdNumber");
  };
  handleHouseHoldHistory = () => {
    this.props.navigation.navigate("HouseholdHistory");
  };
  onChangeLanguage() {
    I18n.locale = "en";
  }
  async onHandleChange() {
    const token = await AsyncStorage.getItem("AuthToken");
    await AsyncStorage.removeItem("AuthToken");
    await AsyncStorage.removeItem("HouseID");
    Http.delete("auth/logout", {}, { headers: { "access-token": token } })
      .then(() => {
        this.props.setAuth(false);
        //TODO:: Redirect back to login, clear token
      })
      .catch((err) => {});

    this.setState({
      isAuthenticated: !this.state.isAuthenticated,
    });
  }
  render() {
    const { isAuthenticated } = this.state;
    const homeIcon = require("../../../assets/images/home.png");
    const historyIcon = require("../../../assets/images/history.png");
    const style = WRITING_STYLE === "ur" ? { writingDirection: "rtl" } : {};

    return (
      <View style={Styles.container}>
        <Heading headerText={I18n.t(`headings.HEALTHSCAN`)} />
        <Text style={[Styles.topParagraph, style]}>
          {I18n.t(`Paragarphs.HEALTHSCAN`)}
        </Text>
        <CardView Styles={Styles.Spacer50} />
        <View style={Styles.largebuttonsContainer}>
          <ExtendedButton
            IconSource={homeIcon}
            title={I18n.t(`ButtonTitles.ADDHOUSEHOLD`)}
            color={Colors.primaryColor}
            titleColor={Colors.buttonTextColor}
            style={Styles.largeButton}
            shadeBorderRadius={1.5}
            onPress={this.handleAddHouseHold}
          />
        </View>
        <View style={Styles.largebuttonsContainer}>
          <ExtendedButton
            IconSource={historyIcon}
            title={I18n.t(`ButtonTitles.HOUSEHOLDHISTORY`)}
            color={Colors.secondaryColor}
            titleColor={Colors.buttonTextColor}
            shadeBorderRadius={1.5}
            style={Styles.largeButton}
            onPress={this.handleHouseHoldHistory}
          />
        </View>
        <Text style={[screenStyles.titleLabel, style, { paddingRight: 35 }]}>
          {I18n.t(`Labels.SCANNINGSUMMARY`)}
        </Text>

        <CalculationLabel
          value={this.props.houseScanned}
          secondaryText={I18n.t(`Labels.HOUSEHOLDSCANNED`)}
        />
        <CalculationLabel
          value={this.props.personScanned}
          secondaryText={I18n.t(`Labels.PEOPLESCANNED`)}
        />
        <View style={Styles.changeLanguagebuttonsContainer}>
          <RaisedTextButton
            title={I18n.t(`ButtonTitles.LOGOUT`)}
            color={Colors.buttonTextColor}
            titleColor={Colors.secondaryColor}
            shadeBorderRadius={1.5}
            style={Styles.smallButton}
            onPress={() => this.onHandleChange()}
          />

          <RaisedTextButton
            title={I18n.t(`ButtonTitles.TRANSLATION`)}
            color={Colors.secondaryColor}
            titleColor={Colors.buttonTextColor}
            shadeBorderRadius={1.5}
            style={Styles.smallButton}
            onPress={() => this.onChangeLanguage()}
          />
        </View>
      </View>
    );
  }
}
const mapStateToProps = (state) => ({
  loading: state.dashboard.loading,
  error: state.dashboard.error,
  message: state.dashboard.message,
  response: state.dashboard.response,
  houseScanned: state.dashboard.houseScanned,
  personScanned: state.dashboard.personScanned,
});
const mapDispatchToProps = (dispatch) => ({
  getStatsDispatcher: (token) => {
    return dispatch(getStats(token));
  },
  toggleResponse: () => dispatch(setResponse()),
});
export default connect(mapStateToProps, mapDispatchToProps)(HealthScan);
const screenStyles = StyleSheet.create({
  titleLabel: {
    fontSize: 16,
    padding: 20,
    paddingLeft: 35,
    color: Colors.paragraphTextColor,
  },

  Number: {
    fontSize: 16,
    padding: 20,
    color: Colors.paragraphTextColor,
  },
});
