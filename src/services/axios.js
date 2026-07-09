import Axios from "axios";

/*
|--------------------------------------------------------------------------
| Base URL
|--------------------------------------------------------------------------
*/

const api = Axios.create({
  baseURL:
    import.meta.env.VITE_API_URL ||
    "http://localhost:5000/api",

  timeout: 30000,

  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

/*
|--------------------------------------------------------------------------
| Request Interceptor
|--------------------------------------------------------------------------
*/

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },

  (error) => Promise.reject(error)
);

/*
|--------------------------------------------------------------------------
| Response Interceptor
|--------------------------------------------------------------------------
*/

api.interceptors.response.use(
  (response) => response,

  async (error) => {
    const originalRequest = error.config;

    /*
    |--------------------------------------------------------------------------
    | Unauthorized
    |--------------------------------------------------------------------------
    */

    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        const refreshToken =
          localStorage.getItem("refreshToken");

        if (!refreshToken) {
          throw new Error("No Refresh Token");
        }

        const response = await Axios.post(
          `${
            import.meta.env.VITE_API_URL
          }/auth/refresh-token`,
          {
            refreshToken,
          }
        );

        const newToken = response.data.token;

        localStorage.setItem(
          "token",
          newToken
        );

        originalRequest.headers.Authorization =
          `Bearer ${newToken}`;

        return api(originalRequest);

      } catch (err) {

        localStorage.removeItem("token");
        localStorage.removeItem("refreshToken");

        window.location.href = "/login";

        return Promise.reject(err);

      }
    }

    /*
    |--------------------------------------------------------------------------
    | Forbidden
    |--------------------------------------------------------------------------
    */

    if (
      error.response &&
      error.response.status === 403
    ) {
      console.error("Permission Denied");
    }

    /*
    |--------------------------------------------------------------------------
    | Server Error
    |--------------------------------------------------------------------------
    */

    if (
      error.response &&
      error.response.status >= 500
    ) {
      console.error("Internal Server Error");
    }

    return Promise.reject(error);
  }
);

export default api;