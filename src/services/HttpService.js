import config from "../config";
import { create } from 'apisauce'
// define the api
export default create({
  baseURL: config.ROOT_URL,
});