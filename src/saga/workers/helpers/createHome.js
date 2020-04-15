import { AsyncStorage } from "react-native";

import Http from "../../../services/HttpService";
import { getInternetStatus } from "./getInternetStatus";
import { addHouse } from "./dbQueries";

export const createHome = async ({ params, token }) => {
  const status = await getInternetStatus();
  try {
    if (+status === 1) {
      const response = await Http.post("house", params, {
        headers: { "access-token": token }
      });
      if (response.ok) {
        await AsyncStorage.setItem("HouseID", response.data.id);
      }
      return response;
    } else {
      const response = await addHouse(params, token);
      if (response) {
        await AsyncStorage.setItem("HouseID", response.toString());
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
