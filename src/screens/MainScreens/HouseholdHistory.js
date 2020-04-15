import React, { Component } from "react";
import { View, ScrollView, AsyncStorage } from "react-native";
import { connect } from "react-redux";
import { RaisedTextButton } from "react-native-material-buttons";

import { getAllHouses, setResponse, deleteHome } from "../../actions";

// plugins
import I18n from "../../plugins/I18n";

//Custom Components
import { CardView, InfoList, Heading, Loader } from "../../components";

//Theme
import { Styles, Colors } from "../../../theme";

class HouseholdHistory extends Component {
  constructor(props) {
    super(props);
    this.state = { data: props.data || [], isLoading: false };
    this.onDeleteHouse = this.onDeleteHouse.bind(this);
  }
  handleDone = () => {
    this.props.navigation.goBack();
  };
  componentWillMount() {
    this._unsubscribe = this.props.navigation.addListener("focus", () => {
      this.props.toggleResponse();
    });
  }
  componentWillUnmount() {
    this._unsubscribe();
  }

  async componentDidMount() {
    const token = await AsyncStorage.getItem("AuthToken");
    this.props.getAllHomes(token);
  }

  async onDeleteHouse(id) {
    const token = await AsyncStorage.getItem("AuthToken");

    this.props.deleteHome(id, token);
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

        {this.props.data.length > 0 && (
          <ScrollView style={Styles.ScrollView}>
            {this.props.data.map((d, i) => (
              <InfoList
                itemData={d}
                key={d.id}
                indicator={i + 1}
                onDeletePerson={this.onDeleteHouse}
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

const mapStateToProps = state => ({
  loading: state.home.loading,
  response: state.home.response,
  data: state.home.data
});

const mapDispatchToProps = dispatch => ({
  getAllHomes: token => {
    return dispatch(getAllHouses(token));
  },
  toggleResponse: () => dispatch(setResponse()),
  deleteHome: (id, token) => dispatch(deleteHome(id, token))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HouseholdHistory);
