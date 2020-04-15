import Http from "../../../services/HttpService";
import { getUsersForHouseId } from "./dbQueries";
import { getInternetStatus } from "./getInternetStatus";

export const getHouseHoldDetails = async ({ token, houseId }) => {
  const status = await getInternetStatus();
  try {
    if (+status === 1) {
      const url = "persons/" + houseId;
      const repsonse = await Http.get(
        url,
        {},
        { headers: { "access-token": token } }
      );
      return repsonse;
    } else {
      const response = await getUsersForHouseId(houseId);
      return {
        data: response,
        ok: true
      };
    }
  } catch (error) {
    return error;
  }
};
