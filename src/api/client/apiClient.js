/* ============================================================
   DOMS Enterprise API Client
============================================================ */

import axios from "axios";

import API_CONFIG from "../config/apiConfig";

/* ============================================================
   AXIOS INSTANCE
============================================================ */

const apiClient = axios.create({

    baseURL:

        `${API_CONFIG.baseURL}/${API_CONFIG.version}`,

    timeout:

        API_CONFIG.timeout,

    headers:

        {

            ...API_CONFIG.headers,

        },

    withCredentials:true,

});

/* ============================================================
   REQUEST HELPERS
============================================================ */

const get=(

url,

config={}

)=>

apiClient.get(

url,

config

);

const post=(

url,

data={},

config={}

)=>

apiClient.post(

url,

data,

config

);

const put=(

url,

data={},

config={}

)=>

apiClient.put(

url,

data,

config

);

const patch=(

url,

data={},

config={}

)=>

apiClient.patch(

url,

data,

config

);

const remove=(

url,

config={}

)=>

apiClient.delete(

url,

config

);

/* ============================================================
   GENERIC REQUEST
============================================================ */

const request=(config)=>

apiClient.request(

config

);

/* ============================================================
   INTERCEPTORS
============================================================ */

const interceptors={

request:

apiClient.interceptors.request,

response:

apiClient.interceptors.response,

};

/* ============================================================
   EXPORT
============================================================ */

const Api={

instance:apiClient,

request,

get,

post,

put,

patch,

delete:remove,

interceptors,

};

export default Object.freeze(Api);