import Http from "../../../services/HttpService";
import { AsyncStorage } from "react-native";
import { getInternetStatus } from "./getInternetStatus";
import { deleteHouse } from "./dbQueries";
export const deleteHome = async ({ params, token }) => {
  const status = await getInternetStatus();
  try {
    console.log("deleteHome helper worker params is: ", params);
    console.log("deleteHome helper worker token is: ", token);
    if (+status === 1) {
      const response = await Http.delete(
        `house/${params}`,
        {},
        {
          headers: { "access-token": token }
        }
      );
      if (response.ok) {
        await AsyncStorage.removeItem("HouseID");
      }
      return response;
    } else {
      const response = await deleteHouse(params, token);
      if (response) {
        await AsyncStorage.removeItem("HouseID");
        return {
          data: {
            id: response
          },
          ok: true
        };
      } else {
        return {
          ok: false
        };
      }
    }
  } catch (error) {
    return error;
  }
};
