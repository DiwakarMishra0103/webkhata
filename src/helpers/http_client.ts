import axios from "axios";
import { AxiosRequestConfig } from "axios";
import localStorageService from "../service/local_storage_service";
import { useNavigate } from "react-router-dom";
const Base_URL = import.meta.env.VITE_APP_BASE_URL;

const Header = {
  "content-type": "application/json",
};

export const Http_Client = axios.create({
  baseURL: Base_URL,
  headers: { ...Header },
});

Http_Client.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = localStorageService.getAcessToken();
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

Http_Client.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && originalRequest.url === "url") {
      const navigate = useNavigate();
      navigate("/login");
      return Promise.reject(error);
    }

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = localStorageService.getRefreshToken();
      return axios
        .post("/auth/token", {
          refresh_token: refreshToken,
        })
        .then((res) => {
          if (res.status === 201) {
            localStorageService.setToken(res.data);
            axios.defaults.headers.common["Authorization"] =
              "Bearer " + localStorageService.getAcessToken();
            return axios(originalRequest);
          }
        });
    }
    return Promise.reject(error);
  }
);
