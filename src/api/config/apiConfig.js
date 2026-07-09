/* ============================================================
   DOMS Enterprise API Configuration
============================================================ */

const ENV = import.meta.env.MODE || "development";

const API_CONFIG = Object.freeze({

    /* ========================================================
       Environment
    ======================================================== */

    environment: ENV,

    isDevelopment: ENV === "development",

    isProduction: ENV === "production",

    isTest: ENV === "test",

    /* ========================================================
       Base URL
    ======================================================== */

    baseURL:

        import.meta.env.VITE_API_BASE_URL ||

        "http://localhost:5000/api",

    version:

        import.meta.env.VITE_API_VERSION ||

        "v1",

    /* ========================================================
       Timeout
    ======================================================== */

    timeout:30000,

    uploadTimeout:300000,

    downloadTimeout:300000,

    /* ========================================================
       Retry
    ======================================================== */

    retry:{

        retries:3,

        delay:1000,

        retryStatusCodes:[

            408,

            429,

            500,

            502,

            503,

            504,

        ],

    },

    /* ========================================================
       Authentication
    ======================================================== */

    auth:{

        tokenKey:"doms_access_token",

        refreshTokenKey:"doms_refresh_token",

        tokenPrefix:"Bearer",

        refreshEndpoint:"/auth/refresh",

        loginEndpoint:"/auth/login",

        logoutEndpoint:"/auth/logout",

    },

    /* ========================================================
       Headers
    ======================================================== */

    headers:{

        Accept:"application/json",

        "Content-Type":"application/json",

    },

    /* ========================================================
       Upload
    ======================================================== */

    upload:{

        maxFileSize:

            10*1024*1024,

        allowedImageTypes:[

            "image/jpeg",

            "image/png",

            "image/webp",

        ],

        allowedDocumentTypes:[

            "application/pdf",

            "application/msword",

            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",

            "application/vnd.ms-excel",

            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",

        ],

    },

    /* ========================================================
       Cache
    ======================================================== */

    cache:{

        enabled:true,

        ttl:300000,

    },

    /* ========================================================
       Pagination
    ======================================================== */

    pagination:{

        defaultPage:1,

        defaultPageSize:20,

        pageSizeOptions:[

            10,

            20,

            50,

            100,

        ],

    },

    /* ========================================================
       Logging
    ======================================================== */

    logging:{

        enabled:ENV==="development",

        requests:true,

        responses:true,

        errors:true,

    },

});

export default API_CONFIG;