/* ============================================================
   DOMS Enterprise Error Interceptor
============================================================ */

import { normalizeError } from "../../core/crud/errorHandler";

/* ============================================================
   ERROR TYPES
============================================================ */

const isNetworkError = (error) =>
    !error.response && !!error.request;

const isTimeoutError = (error) =>
    error.code === "ECONNABORTED";

const isCancelError = (error) =>
    error.code === "ERR_CANCELED";

/* ============================================================
   ATTACH
============================================================ */

const attachErrorInterceptor = (api) => {

    api.interceptors.response.use(

        (response) => response,

        (error) => {

            let normalized;

            if (isCancelError(error)) {

                normalized = normalizeError({
                    response: {
                        status: 499,
                        data: {
                            message: "Request cancelled.",
                            code: "REQUEST_CANCELLED",
                        },
                    },
                });

            } else if (isTimeoutError(error)) {

                normalized = normalizeError({
                    response: {
                        status: 408,
                        data: {
                            message: "Request timeout.",
                            code: "REQUEST_TIMEOUT",
                        },
                    },
                });

            } else if (isNetworkError(error)) {

                normalized = normalizeError({
                    response: {
                        status: 0,
                        data: {
                            message: "Network unavailable.",
                            code: "NETWORK_ERROR",
                        },
                    },
                });

            } else {

                normalized = normalizeError(error);

            }

            return Promise.reject(normalized);

        }

    );

};

export default attachErrorInterceptor;