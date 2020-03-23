import axios from "axios";
import config from "../config";

const HttpService = axios.create({
  baseURL: config.ROOT_URL,
  timeout: 10000
  // withCredentials: true
  // headers: { 'X-Custom-Header': 'foobar' },
  // httpsAgent: new https.Agent({ keepAlive: true, maxSockets: 5 }),
});

export default HttpService;
