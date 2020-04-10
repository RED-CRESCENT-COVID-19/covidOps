import Http from '../../../services/HttpService';
import { getHouse, getUsersForHouseId, wipeDatabase, initializeDatabase } from './dbQueries';
import { AsyncStorage } from 'react-native';
const createHome = async (params) => {
	const token = await AsyncStorage.getItem('AuthToken');

	return new Promise((resolve) => {
		Http.post('house', params, {
			headers: { 'access-token': token },
		}).then((response) => resolve(response));
	});
};
const createMember = async (params) => {
	const token = await AsyncStorage.getItem('AuthToken');
	console.log('craete member iwth api  ', params);
	return new Promise((resolve) => {
		Http.post('person', params, {
			headers: { 'access-token': token },
		}).then((response) => resolve(response));
	});
};
export const syncData = async () => {
	//get houses array
	const housesArray = await getHouse();
	//map on houses array
	for (let item of housesArray) {
		//building data for api call
		const params = {
			address: item.address,
			id: item.id,
			lat: item.lat,
			lng: item.lng,
			is_contacted: item.is_contacted,
		};
		const token = item.token;
		//call api to create houses;
		const response = await createHome(params, token);
		if (response.ok) {
			//house id from item is
			console.log('house id from item is ', item.id);
			//get users from each houses
			const usersArray = await getUsersForHouseId(item.id);
			//maps user Array
			for (let item of usersArray) {
				//building user data for api call
				const params = {
					id: item.id,
					houseID: item.house_id,
					age: item.age,
					temperature: item.temprature,
					unit: item.unit,
					fever: +item.fever,
					cough: +item.cough,
					sputum: +item.sputum,
					fatigue: +item.fatigue,
					sob: +item.sob,
					headache: +item.headache,
					congestion: +item.congestion,
					meralgia: +item.meralgia,
					hemoptysis: +item.hemoptysis,
					conjuctivitis: +item.conjuctivitis,
					notes: item.notes,
					cnic: item.cnic,
					phone: item.phone,
					gender: item.gender,
					uniqueID: item.unique_id,
				};
				const token = item.token;
				//calling api
				const repsonse = await createMember(params, token);
				console.log('response is ', repsonse);
				if (repsonse.ok) {
					console.log('person added ----------');
				}
			}
		}
	}
	/*   await wipeDatabase();
	 */ //reinitiate tables
};
