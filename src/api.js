import axios from "axios";

function setApi(headers) {
  return axios.create({
    baseURL: "http://localhost:4000",
    headers: { ...headers }
  });
}

export default setApi;
