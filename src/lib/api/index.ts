import { API_BASE_URL, USER_TOKEN_KEY, X_API_KEY } from "@/constants/";
import { IAuthToken } from "@/services/auth/types";
import type { AxiosRequestConfig, AxiosResponse } from "axios";
import _axios from "axios";
import axiosRetry from "axios-retry";
import { Cookies } from "react-cookie";
import type { IApiErrorResponse } from "./types";

const cookies = new Cookies();
export const loadAuthToken = (): IAuthToken | null => {
  const sToken = cookies.get(USER_TOKEN_KEY);
  if (sToken) {
    return sToken;
  }
  return null;
};

const axios = _axios.create({
  baseURL: `${API_BASE_URL}/`,
  headers: {
    "Content-Type": "application/json",
    // Refresh: loadAuthToken()?.refresh,
    "x-api-key": X_API_KEY,
  },
});

/* Add auth header interceptor */
axios.interceptors.request.use(
  (config) => {
    const token = loadAuthToken();

    console.log(token);

    if (token) {
      config.headers["Authorization"] = `Bearer ${token.accessToken}`;
      config.headers["Refresh"] = `${token.refreshToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

const retryDelay = (retryNumber = 0) => {
  const seconds = Math.pow(2, retryNumber) * 1000;
  const randomMs = 1000 * Math.random();
  return seconds + randomMs;
};

const retryConfig = {
  retries: 2,
  retryDelay,
  // retry on Network Error & 5xx responses
  retryCondition: axiosRetry.isRetryableError,
};

const handleApiSuccess = (res: AxiosResponse) => {
  return res.data;
};

const handleApiError = (err: any) => {
  let errorMessagge = "";

  // request was manually cancelled in a `useEffect` hook
  if (_axios.isCancel(err)) {
    return; // fail silently
  }

  if (err.response) {
    const apiError: IApiErrorResponse = err.response.data;
    // client received an error response (5xx, 4xx)
    console.error(
      `Backend returned code ${err.code}:${apiError.statusCode}, ` +
        `body was: ${apiError.message}`,
      "data:",
      apiError.data
    );
    errorMessagge = apiError.message;
  } else if (err.request) {
    // client never received a response, or request never left
    console.error("An error occurred:", err.message);
  } else {
    // anything else
    console.error("Well, that was unexpected:", err.message);
  }

  throw (
    errorMessagge ||
    "We couldn't complete your request. Please try again or check your internet connection."
  );
};

export const Api = {
  getCancelTokenSource: () => _axios.CancelToken.source(),
  get: <T>(endpoint: string, config?: AxiosRequestConfig): Promise<T> =>
    axios
      .get(endpoint, { "axios-retry": retryConfig, ...config })
      .then(handleApiSuccess)
      .catch(handleApiError),
  post: <T>(
    endpoint: string,
    data: unknown,
    config?: AxiosRequestConfig
  ): Promise<T> =>
    axios
      .post(endpoint, data, config)
      .then(handleApiSuccess)
      .catch(handleApiError),
  put: <T>(
    endpoint: string,
    data: unknown,
    config?: AxiosRequestConfig
  ): Promise<T> =>
    axios
      .put(endpoint, data, config)
      .then(handleApiSuccess)
      .catch(handleApiError),
  patch: <T>(
    endpoint: string,
    data: unknown,
    config?: AxiosRequestConfig
  ): Promise<T> =>
    axios
      .patch(endpoint, data, config)
      .then(handleApiSuccess)
      .catch(handleApiError),
  delete: <T>(endpoint: string, config?: AxiosRequestConfig): Promise<T> =>
    axios.delete(endpoint, config).then(handleApiSuccess).catch(handleApiError),
};
