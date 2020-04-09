import React, { Component } from 'react';
import { View, ScrollView, AsyncStorage } from 'react-native';
import { RaisedTextButton } from 'react-native-material-buttons';
import I18n from '../../plugins/I18n';
import { CardView, InfoList, Heading, Loader } from '../../components';
import { Styles, Colors } from '../../../theme';
import { getAllHouses, setResponse } from '../../actions';
import { connect } from 'react-redux';

class HouseholdHistory extends Component {
	constructor(props) {
		super(props);
		this.state = { data: [], isLoading: false };
		this.onDeleteHouse = this.onDeleteHouse.bind(this);
	}
	handleDone = () => {
		this.props.navigation.goBack();
	};
	componentWillMount() {
		this._unsubscribe = this.props.navigation.addListener('focus', () => {
			this.props.toggleResponse();
		});
	}
	componentWillUnmount() {
		this._unsubscribe();
	}
	async componentDidMount() {
		const token = await AsyncStorage.getItem('AuthToken');
		this.props.getAllHomes(token);
	}

	async onDeleteHouse(id) {
		console.log('onDeleteHouse id is: ', id);
		// console.log("onDeletePerson id is: ", id);
		// this.setState({ isLoading: true });
		// const token = await AsyncStorage.getItem("AuthToken");

		// Http.delete(`person/${id}`, {}, { headers: { "access-token": token } })
		//   .then((res) => {
		//     // console.log("onDeletePerson res is: ", res);
		//     // console.log("this.state in then is: ", this.state);
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
		//             style: "cancel",
		//           },
		//           {
		//             text: "OK",
		//             onPress: () => {
		//               console.log("OK Pressed");
		//             },
		//           },
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
		//             style: "cancel",
		//           },
		//           {
		//             text: "OK",
		//             onPress: () => {
		//               console.log("OK Pressed");
		//             },
		//           },
		//         ],
		//         { cancelable: false }
		//       );
		//     }
		//     // console.log("this. state data is: ", this.state.apiData);
		//   })
		//   .catch((err) => {
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
		//           style: "cancel",
		//         },
		//         {
		//           text: "OK",
		//           onPress: () => {
		//             console.log("OK Pressed");
		//           },
		//         },
		//       ],
		//       { cancelable: false }
		//     );
		//   });
	}
	render() {
		let loader;
		if (this.props.loading) {
			loader = <Loader />;
		} else {
			loader = <View />;
		}

		return (
			<View style={Styles.container}>
				<Heading headerText={I18n.t(`headings.HOUSEHOLDHISTORY`)} />
				<CardView Styles={Styles.Spacer50} />

				{this.props.response
					? this.props.data.length > 0 && (
							<ScrollView style={Styles.ScrollView}>
								{this.props.data.map((d) => {
									return <InfoList itemData={d} key={d.id} {...this.props} HouseHoldDetails={''} />;
								})}
							</ScrollView>
					  )
					: null}

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

const mapStateToProps = (state) => ({
	loading: state.home.loading,
	response: state.home.response,
	data: state.home.data,
});
const mapDispatchToProps = (dispatch) => ({
	getAllHomes: (token) => {
		return dispatch(getAllHouses(token));
	},
	toggleResponse: () => dispatch(setResponse()),
});
export default connect(mapStateToProps, mapDispatchToProps)(HouseholdHistory);
