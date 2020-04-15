import { AsyncStorage } from "react-native";

import Http from "../../../services/HttpService";
import { getInternetStatus } from "./getInternetStatus";
import { deleteHouse } from "./dbQueries";

export const deleteHome = async ({ params, token }) => {
  const status = await getInternetStatus();
  try {
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
