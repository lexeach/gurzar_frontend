/* ============================================================
   DOMS Enterprise Retry Interceptor
============================================================ */

import API_CONFIG from "../config/apiConfig";

/* ============================================================
   WAIT
============================================================ */

const wait = (ms) =>
    new Promise((resolve) => setTimeout(resolve, ms));

/* ============================================================
   SHOULD RETRY
============================================================ */

const shouldRetry = (error) => {

    const status = error?.response?.status;

    if (!status) {

        return true;

    }

    return API_CONFIG.retry.retryStatusCodes.includes(status);

};

/* ============================================================
   ATTACH
============================================================ */

const attachRetryInterceptor = (api) => {

    api.interceptors.response.use(

        (response) => response,

        async (error) => {

            const config = error.config;

            if (!config) {

                return Promise.reject(error);

            }

            config.__retryCount =

                config.__retryCount || 0;

            if (

                config.__retryCount >=

                API_CONFIG.retry.retries ||

                !shouldRetry(error)

            ) {

                return Promise.reject(error);

            }

            config.__retryCount++;

            await wait(

                API_CONFIG.retry.delay *

                config.__retryCount

            );

            return api(config);

        }

    );

};

export default attachRetryInterceptor;