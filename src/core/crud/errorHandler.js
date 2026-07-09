/* ============================================================
   Enterprise Error Handler
   ------------------------------------------------------------
   Converts every error into a standard format.
============================================================ */

/* ============================================================
   DEFAULT ERROR
============================================================ */

const DEFAULT_ERROR = {

    success:false,

    status:500,

    message:"Unexpected server error.",

    code:"UNKNOWN_ERROR",

    errors:null,

    timestamp:null,

};

/* ============================================================
   NORMALIZE ERROR
============================================================ */

export const normalizeError=(error={})=>{

    if(error.success===false){

        return error;

    }

    const response=

    error.response||{};

    const data=

    response.data||{};

    return{

        success:false,

        status:

            response.status||

            DEFAULT_ERROR.status,

        message:

            data.message||

            error.message||

            DEFAULT_ERROR.message,

        code:

            data.code||

            error.code||

            DEFAULT_ERROR.code,

        errors:

            data.errors||

            null,

        timestamp:

            data.timestamp||

            new Date().toISOString(),

        raw:error,

    };

};

/* ============================================================
   NETWORK ERROR
============================================================ */

export const networkError=()=>({

    success:false,

    status:0,

    message:"Network connection unavailable.",

    code:"NETWORK_ERROR",

    errors:null,

    timestamp:new Date().toISOString(),

});

/* ============================================================
   TIMEOUT ERROR
============================================================ */

export const timeoutError=()=>({

    success:false,

    status:408,

    message:"Request timeout.",

    code:"REQUEST_TIMEOUT",

    errors:null,

    timestamp:new Date().toISOString(),

});

/* ============================================================
   CANCEL ERROR
============================================================ */

export const cancelError=()=>({

    success:false,

    status:499,

    message:"Request cancelled.",

    code:"REQUEST_CANCELLED",

    errors:null,

    timestamp:new Date().toISOString(),

});

/* ============================================================
   VALIDATION ERROR
============================================================ */

export const validationError=(errors={})=>({

    success:false,

    status:422,

    message:"Validation failed.",

    code:"VALIDATION_ERROR",

    errors,

    timestamp:new Date().toISOString(),

});

/* ============================================================
   AUTHORIZATION ERROR
============================================================ */

export const unauthorizedError=()=>({

    success:false,

    status:401,

    message:"Unauthorized.",

    code:"UNAUTHORIZED",

    errors:null,

    timestamp:new Date().toISOString(),

});

/* ============================================================
   FORBIDDEN ERROR
============================================================ */

export const forbiddenError=()=>({

    success:false,

    status:403,

    message:"Access denied.",

    code:"FORBIDDEN",

    errors:null,

    timestamp:new Date().toISOString(),

});

/* ============================================================
   NOT FOUND ERROR
============================================================ */

export const notFoundError=()=>({

    success:false,

    status:404,

    message:"Resource not found.",

    code:"NOT_FOUND",

    errors:null,

    timestamp:new Date().toISOString(),

});

/* ============================================================
   SERVER ERROR
============================================================ */

export const serverError=()=>({

    success:false,

    status:500,

    message:"Internal server error.",

    code:"SERVER_ERROR",

    errors:null,

    timestamp:new Date().toISOString(),

});

/* ============================================================
   EXPORT
============================================================ */

export default{

    normalizeError,

    networkError,

    timeoutError,

    cancelError,

    validationError,

    unauthorizedError,

    forbiddenError,

    notFoundError,

    serverError,

};