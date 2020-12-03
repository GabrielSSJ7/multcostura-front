import axios from "axios";
import constants from './constants';

const { PRODUCTION, URL_BASE, URL_BASE_DEVELOP } = constants;

function setApi(headers) {
  console.log(PRODUCTION, URL_BASE_DEVELOP, URL_BASE)
  return axios.create({
    baseURL: PRODUCTION ? URL_BASE : URL_BASE_DEVELOP,
    headers: { ...headers }
    //baseURL: "http://localhost:4000/",
  });
}

export default setApi;
