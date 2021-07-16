import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://swapi.dev/api/",
});

axiosInstance.interceptors.request.use(
  (config) => {
    // Do something before request is sent

    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default axiosInstance;
