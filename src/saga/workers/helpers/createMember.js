import Http from "../../../services/HttpService";
import { addPerson } from "./dbQueries";
import { getInternetStatus } from "./getInternetStatus";
export const createMember = async ({ params, token }) => {
  const status = await getInternetStatus();
  try {
    if (+status === 1) {
      const repsonse = await Http.post("person", params, {
        headers: { "access-token": token },
      });
      console.log("create member response", repsonse);
      return repsonse;
    } else {
      const response = addPerson(params, token);
      return {
        data: response,
        ok: true,
      };
    }
  } catch (error) {
    return error;
  }
};
