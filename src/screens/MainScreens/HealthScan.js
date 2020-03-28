import React, { Component } from "react";
import { Text, StyleSheet, View, AsyncStorage } from "react-native";

import { RaisedTextButton } from "react-native-material-buttons";

// plugins
import I18n from "../../plugins/I18n";

//Custom Components
import {
  CardView,
  ExtendedButton,
  Heading,
  CalculationLabel
} from "../../components";
//Theme
import { Styles, Colors } from "../../../theme";

import Http from '../../services/HttpService';


const WRITING_STYLE = I18n.locale;

export default class HealthScan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: true,
      persons: 0,
      houses: 0
    };
  }

  async componentDidMount() {
    const token = await AsyncStorage.getItem('AuthToken') 
    Http.get('stats', {}, { headers: { 'access-token': token } })
      .then((response) => {
        if(response.status == 200) {
          this.setState({
            persons: response.data.person_count,
            houses: response.data.house_count,
          })
        } else {
          //TODO:: Redirect Back to login screen
        }
      }).catch(err => {}) 
  }


  handleAddHouseHold = () => {
    this.props.navigation.navigate("HouseholdNumber");
  };
  handleHouseHoldHistory = () => {
    this.props.navigation.navigate("HouseholdHistory");
  };
  onChangeLanguage() {
    console.log("onchange I18n.locale is: ", I18n.locale);
    I18n.locale = "en";
  }
  async onHandleChange() {
    const token = await AsyncStorage.getItem('AuthToken') 
    await AsyncStorage.removeItem('AuthToken') 
    Http.delete('auth/logout', {}, { headers: { 'access-token': token } })
      .then((response) => {
        this.props.setAuth(false);
        //TODO:: Redirect back to login, clear token  
      }).catch(err => {}) 

    this.setState({
      isAuthenticated: !this.state.isAuthenticated
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
        <Text style={[screenStyles.titleLabel, style]}>
          {I18n.t(`Labels.SCANNINGSUMMARY`)}
        </Text>

        <CalculationLabel
          value={this.state.persons}
          secondaryText={I18n.t(`Labels.HOUSEHOLDSCANNED`)}
        />
        <CalculationLabel
          value={this.state.houses}
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

const screenStyles = StyleSheet.create({
  titleLabel: {
    fontSize: 16,
    padding: 20,
    paddingLeft: 35,
    color: Colors.paragraphTextColor
  },

  Number: {
    fontSize: 16,
    padding: 20,
    color: Colors.paragraphTextColor
  }
});
