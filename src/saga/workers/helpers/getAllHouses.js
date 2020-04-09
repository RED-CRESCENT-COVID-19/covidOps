import Http from "../../../services/HttpService";
import { getHouse } from "./dbQueries";
import { getInternetStatus } from "./getInternetStatus";
export const getAllHouses = async ({ token }) => {
  const status = await getInternetStatus();
  try {
    if (+status === 1) {
      const repsonse = await Http.get(
        "house",
        {},
        { headers: { "access-token": token } }
      );
      return repsonse;
    } else {
      const response = await getHouse();
      return {
        data: response,
        ok: true,
      };
    }
  } catch (error) {
    return error;
  }
};
