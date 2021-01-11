import axios from "axios";
import { getToken, removeToken } from "./localStorage.js";

axios.defaults.baseURL = "http://localhost:8081/";
axios.defaults.timeout = 5000; //5秒
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.get["Content-Type"] =
  "application/x-www-form-urlencoded";

axios.interceptors.request.use(
  config => {
    //todo：加一个loading遮罩层
    config.headers["Authorization"] = getToken();
    return config;
  },
  err => {
    console.log(err);
  }
);

axios.interceptors.response.use(
  res => {
    return res.data;
  },
  err => {
    if (err.response.status == 401) {
      removeToken();
    }
    console.log(err);
  }
);

export default axios;
/*
export default function request(config) {
  return axios(config)
}*/
