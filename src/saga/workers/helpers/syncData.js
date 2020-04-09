import Http from "../../../services/HttpService";
import {
  getHouse,
  getUsersForHouseId,
  wipeDatabase,
  initializeDatabase,
} from "./dbQueries";
export const syncData = async () => {
  //get houses array
  const housesArray = await getHouse();
  //map on houses array
  housesArray.map(async (item) => {
    //building data for api call
    const params = {
      address: item.address,
      id: item.id,
      lat: item.lat,
      lng: item.lng,
      is_contacted: item.is_contacted,
    };
    const token = item.token;
    //call api to create houses
    const response = await Http.post("house", params, {
      headers: { "access-token": token },
    });
    if (response.ok) {
      //get users from each houses
      const usersArray = await getUsersForHouseId(item.id);
      //maps user Array
      usersArray.map(async (item) => {
        //building user data for api call
        const params = {
          id: item.id,
          houseID: item.house_id,
          age: item.age,
          temperature: item.temperature,
          unit: item.unit,
          fever: item.fever,
          cough: item.cough,
          sputum: item.sputum,
          fatigue: item.fatigue,
          sob: item.sob,
          headache: item.headache,
          congestion: item.congestion,
          meralgia: item.meralgia,
          hemoptysis: item.hemoptysis0,
          conjuctivitis: item.conjuctivitis,
          notes: item.notes,
          cnic: item.cnic,
          phone: item.phone,
          gender: item.gender,
          uniqueID: item.unique_id,
        };
        const token = item.token;
        //calling api
        const repsonse = await Http.post("person", params, {
          headers: { "access-token": token },
        });
        if (repsonse.ok) {
          console.log("person added ----------");
        }
      });
    }
  });
  //empty database
  await wipeDatabase();
  //reinitiate tables
  await initializeDatabase();
};
