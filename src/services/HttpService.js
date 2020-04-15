import { create } from "apisauce";

import config from "../config";
// define the api
export default create({
  baseURL: config.ROOT_URL
});
