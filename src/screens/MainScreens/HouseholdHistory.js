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
