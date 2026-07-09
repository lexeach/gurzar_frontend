/* ============================================================
   DOMS Enterprise Response Interceptor
============================================================ */

import {

normalizeResponse,

} from "../../core/crud/responseHandler";

import {

normalizeError,

} from "../../core/crud/errorHandler";

/* ============================================================
   RESPONSE INTERCEPTOR
============================================================ */

const attachResponseInterceptor = (api) => {

    api.interceptors.response.use(

        (response) => {

            return normalizeResponse(response);

        },

        (error) => {

            return Promise.reject(

                normalizeError(error)

            );

        }

    );

};

export default attachResponseInterceptor;