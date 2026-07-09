/* ============================================================
   DOMS Enterprise API Bootstrap
============================================================ */

/* ============================================================
   CLIENTS
============================================================ */

import api from "./client/apiClient";
import uploadClient from "./client/uploadClient";
import downloadClient from "./client/downloadClient";

/* ============================================================
   INTERCEPTORS
============================================================ */

import attachAuthInterceptor
from "./interceptors/authInterceptor";

import attachResponseInterceptor
from "./interceptors/responseInterceptor";

import attachRetryInterceptor
from "./interceptors/retryInterceptor";

import attachErrorInterceptor
from "./interceptors/errorInterceptor";

import attachLoggingInterceptor
from "./interceptors/loggingInterceptor";

/* ============================================================
   UTILITIES
============================================================ */

import tokenManager
from "./utils/tokenManager";

import cacheManager
from "./utils/cacheManager";

import requestQueue
from "./utils/requestQueue";

/* ============================================================
   REGISTER INTERCEPTORS
============================================================ */

const axiosInstance = api.instance;

/*
Request Flow

React
   │
   ▼
Logging
   ▼
Authentication
   ▼
Axios
*/

/* Request */

attachLoggingInterceptor(
    axiosInstance
);

attachAuthInterceptor(
    axiosInstance
);

/*
Response Flow

Axios
   ▼
Retry
   ▼
Error
   ▼
Response
   ▼
React
*/

attachRetryInterceptor(
    axiosInstance
);

attachErrorInterceptor(
    axiosInstance
);

attachResponseInterceptor(
    axiosInstance
);

/* ============================================================
   EXPORTS
============================================================ */

export {

    api,

    uploadClient,

    downloadClient,

    tokenManager,

    cacheManager,

    requestQueue,

};

export default api;