/* ============================================================
   Enterprise Request Pipeline
   ------------------------------------------------------------
   Central request executor for all CRUD services.
============================================================ */

import apiClient from "../../services/api";
import { normalizeError } from "./errorHandler";
import { normalizeResponse } from "./responseHandler";

/* ============================================================
   DEFAULT CONFIG
============================================================ */

const DEFAULT_OPTIONS = {

    timeout:30000,

    retries:0,

    signal:null,

};

/* ============================================================
   WAIT
============================================================ */

const wait=(ms)=>

new Promise(resolve=>setTimeout(resolve,ms));

/* ============================================================
   RETRY
============================================================ */

const executeWithRetry=async(

request,

retries,

delay=500,

)=>{

let error;

for(

let attempt=0;

attempt<=retries;

attempt++

){

try{

return await request();

}

catch(ex){

error=ex;

if(attempt<retries){

await wait(

delay*(attempt+1)

);

}

}

}

throw error;

};

/* ============================================================
   REQUEST
============================================================ */

const request=async({

method,

url,

data,

params,

headers,

options={},

})=>{

const config={

...DEFAULT_OPTIONS,

...options,

};

try{

const response=

await executeWithRetry(

()=>

apiClient({

method,

url,

data,

params,

headers,

timeout:config.timeout,

signal:config.signal,

}),

config.retries

);

return normalizeResponse(

response

);

}

catch(error){

throw normalizeError(

error

);

}

};

/* ============================================================
   EXPORT
============================================================ */

export default{

request,

};