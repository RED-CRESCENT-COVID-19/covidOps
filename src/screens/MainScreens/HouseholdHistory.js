import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  AsyncStorage,
  Alert
} from "react-native";

import { getAllHouses, setResponse, deleteHome } from "../../actions";
import { connect } from "react-redux";

import { RaisedTextButton } from "react-native-material-buttons";

// plugins
import I18n from "../../plugins/I18n";

//Custom Components
import { CardView, InfoList, Heading, Loader } from "../../components";

// Service
import Http from "../../services/HttpService";

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
    // this.setState({ isLoading: true });
    const token = await AsyncStorage.getItem("AuthToken");
    this.props.getAllHomes(token);
    // const url = "house";
    // Http.get(url, {}, { headers: { "access-token": token } })
    //   .then(response => {
    //     this.setState({ isLoading: false });
    //     if (response.status == 200) {
    //       if (response.data.length > 0) {
    //         this.setState({ data: response.data.reverse() });
    //       }
    //     }
    //   })
    //   .catch(err => {
    //     this.setState({ isLoading: false });
    //   });
  }

  async onDeleteHouse(id) {
    console.log("onDeleteHouse id is: ", id);
    // this.setState({ isLoading: true });
    const token = await AsyncStorage.getItem("AuthToken");

    console.log("before state is: ", this.state);
    // const index = this.state.data
    //   .map(function(item) {
    //     return item.id;
    //   })
    //   .indexOf(id);
    // // console.log("index is: ", index);
    // if (index > -1) {
    //   this.state.data.splice(index, 1);
    // }
    //     //for testing, delete after testing
    // this.setState({ data: this.state.data });
    this.props.deleteHome(id, token);

    // .then(d => {
    //   this.setState({ isLoading: false });
    //   console.log("onDeleteHouse then props is: ", d);
    // })
    // .catch(e => {
    //   this.setState({ isLoading: false });
    //   console.log("onDeleteHouse catch err is: ", e);
    // });

    // Http.delete(`house/${id}`, {}, { headers: { "access-token": token } })
    //   .then(res => {
    //     console.log("onDeletePerson res is: ", res);
    //     console.log("this.state in then is: ", this.state);

    //     this.setState({ isLoading: false });
    //     const index = this.state.data
    //       .map(function(item) {
    //         return item.id;
    //       })
    //       .indexOf(id);
    //     // console.log("index is: ", index);
    //     if (index > -1) {
    //       this.state.data.splice(index, 1);
    //     }
    //     // console.log("Again this.state is: ", this.state);

    //     //for testing, delete after testing
    //     // this.setState({ data: this.state.data });
    //     //////////////////////

    //     if (res.status === 400) {
    //       Alert.alert(
    //         "Information!",
    //         `${res.data.message}`,
    //         [
    //           {
    //             text: "Cancel",
    //             onPress: () => {
    //               console.log("Cancel Pressed");
    //             },
    //             style: "cancel"
    //           },
    //           {
    //             text: "OK",
    //             onPress: () => {
    //               console.log("OK Pressed");
    //             }
    //           }
    //         ],
    //         { cancelable: false }
    //       );
    //     }
    //     if (res.status === 204) {
    //       this.setState({ data: this.state.data });

    //       Alert.alert(
    //         "Information!",
    //         "Successfully deleted the house",
    //         [
    //           {
    //             text: "Cancel",
    //             onPress: () => {
    //               console.log("Cancel Pressed");
    //             },
    //             style: "cancel"
    //           },
    //           {
    //             text: "OK",
    //             onPress: () => {
    //               console.log("OK Pressed");
    //             }
    //           }
    //         ],
    //         { cancelable: false }
    //       );
    //     }
    //     // console.log("this. state data is: ", this.state.apiData);
    //   })
    //   .catch(err => {
    //     this.setState({ isLoading: false });
    //     Alert.alert(
    //       "Information!",
    //       "Please try Again!",
    //       [
    //         {
    //           text: "Cancel",
    //           onPress: () => {
    //             console.log("Cancel Pressed");
    //           },
    //           style: "cancel"
    //         },
    //         {
    //           text: "OK",
    //           onPress: () => {
    //             console.log("OK Pressed");
    //           }
    //         }
    //       ],
    //       { cancelable: false }
    //     );
    //   });
  }
  render() {
    let loader;
    if (this.state.isLoading) {
      loader = <Loader />;
    } else {
      loader = <View />;
    }

    console.log("this.state.data is: ", this.state.data);
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
