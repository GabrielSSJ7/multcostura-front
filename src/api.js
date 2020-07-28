import axios from "axios";

function setApi(headers) {
  return axios.create({
    //baseURL: "http://187.108.207.29:4000/",
    baseURL: "http://localhost:4000/",
    headers: { ...headers },
  });
}

export default setApi;
