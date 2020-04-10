import Http from '../../services/HttpService';
import { AsyncStorage } from 'react-native';

export const getStatsHelper = async ({ token }) => {
	try {
		const repsonse = await Http.get('stats', {}, { headers: { 'access-token': token } });
		console.log('stats log', repsonse);
		return repsonse;
	} catch (error) {
		return error;
	}
};

export const createHome = async ({ params, token }) => {
	try {
		const repsonse = await Http.post('house', params, {
			headers: { 'access-token': token },
		});
		await AsyncStorage.setItem('HouseID', repsonse.data.id);
		return repsonse;
	} catch (error) {
		return error;
	}
};

export const getAllHouses = async ({ token }) => {
	try {
		const repsonse = await Http.get('house', {}, { headers: { 'access-token': token } });
		return repsonse;
	} catch (error) {
		return error;
	}
};

export const getHouseHoldDetails = async ({ token, houseId }) => {
	try {
		const url = 'persons/' + houseId;
		const repsonse = await Http.get(url, {}, { headers: { 'access-token': token } });
		return repsonse;
	} catch (error) {
		return error;
	}
};

export const createMember = async ({ params, token }) => {
	try {
		const repsonse = await Http.post('person', params, {
			headers: { 'access-token': token },
		});
		console.log('create member response', repsonse);
		return repsonse;
	} catch (error) {
		return error;
	}
};

export const SendSMS = async ({ phone }, token) => {
	try {
		const repsonse = await Http.post(
			'infosms',
			{ phone },
			{
				headers: { 'access-token': token },
			}
		);
		console.log('create member response', repsonse);
		return repsonse;
	} catch (error) {
		return error;
	}
};
