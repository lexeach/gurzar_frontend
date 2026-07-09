/* ============================================================
   Enterprise Response Handler
   ------------------------------------------------------------
   Converts every API response into a standard format.
============================================================ */

/* ============================================================
   DEFAULT PAGINATION
============================================================ */

const DEFAULT_PAGINATION = {

    page:1,

    pageSize:20,

    total:0,

};

/* ============================================================
   NORMALIZE PAGINATION
============================================================ */

const normalizePagination=(pagination={})=>({

    ...DEFAULT_PAGINATION,

    ...pagination,

});

/* ============================================================
   NORMALIZE RESPONSE
============================================================ */

export const normalizeResponse=(response={})=>{

    const payload=response.data||response;

    return{

        success:

            payload.success??

            true,

        message:

            payload.message??

            "Success",

        data:

            payload.data??

            payload.result??

            payload.items??

            payload.records??

            payload,

        pagination:

            normalizePagination(

                payload.pagination||

                payload.meta?.pagination||

                {}

            ),

        meta:

            payload.meta??

            {},

        timestamp:

            payload.timestamp??

            new Date().toISOString(),

        status:

            response.status??

            200,

        headers:

            response.headers??

            {},

    };

};

/* ============================================================
   LIST RESPONSE
============================================================ */

export const normalizeList=(response)=>{

    const result=

    normalizeResponse(response);

    return{

        ...result,

        data:

            Array.isArray(result.data)

            ?

            result.data

            :

            [],

    };

};

/* ============================================================
   SINGLE OBJECT
============================================================ */

export const normalizeObject=(response)=>{

    const result=

    normalizeResponse(response);

    return{

        ...result,

        data:

            Array.isArray(result.data)

            ?

            null

            :

            result.data,

    };

};

/* ============================================================
   FILE RESPONSE
============================================================ */

export const normalizeFile=(response)=>({

    success:true,

    file:response.data,

    headers:

        response.headers,

});

/* ============================================================
   EXPORT
============================================================ */

export default{

    normalizeResponse,

    normalizeList,

    normalizeObject,

    normalizeFile,

};