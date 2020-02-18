import axios from "axios";

function setApi(headers) {
  return axios.create({
    baseURL: "https://multcostura-back.herokuapp.com",
    headers: { ...headers }
  });
}

export default setApi;
