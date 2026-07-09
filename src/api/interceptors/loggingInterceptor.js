/* ============================================================
   DOMS Enterprise Logging Interceptor
============================================================ */

import API_CONFIG from "../config/apiConfig";

/* ============================================================
   LOGGER
============================================================ */

const logger = {

    info: (...args) => {

        if (API_CONFIG.logging.enabled) {

            console.info(...args);

        }

    },

    warn: (...args) => {

        if (API_CONFIG.logging.enabled) {

            console.warn(...args);

        }

    },

    error: (...args) => {

        if (API_CONFIG.logging.enabled) {

            console.error(...args);

        }

    },

};

/* ============================================================
   REQUEST TIMER
============================================================ */

const startTimer = (config) => {

    config.metadata = {

        startTime: Date.now(),

    };

    return config;

};

const endTimer = (config) => {

    return Date.now() - config.metadata.startTime;

};

/* ============================================================
   ATTACH
============================================================ */

const attachLoggingInterceptor = (api) => {

    /* ========================================================
       REQUEST
    ======================================================== */

    api.interceptors.request.use(

        (config) => {

            startTimer(config);

            if (API_CONFIG.logging.requests) {

                logger.info(

                    "[API Request]",

                    {

                        method: config.method?.toUpperCase(),

                        url: config.url,

                        params: config.params,

                        data: config.data,

                    }

                );

            }

            return config;

        },

        (error) => {

            logger.error(

                "[API Request Error]",

                error

            );

            return Promise.reject(error);

        }

    );

    /* ========================================================
       RESPONSE
    ======================================================== */

    api.interceptors.response.use(

        (response) => {

            if (API_CONFIG.logging.responses) {

                logger.info(

                    "[API Response]",

                    {

                        method:

                            response.config.method?.toUpperCase(),

                        url:

                            response.config.url,

                        status:

                            response.status,

                        duration:

                            endTimer(

                                response.config

                            ) + " ms",

                    }

                );

            }

            return response;

        },

        (error) => {

            if (API_CONFIG.logging.errors) {

                logger.error(

                    "[API Error]",

                    {

                        url:

                            error.config?.url,

                        status:

                            error.response?.status,

                        message:

                            error.message,

                    }

                );

            }

            return Promise.reject(error);

        }

    );

};

export default attachLoggingInterceptor;