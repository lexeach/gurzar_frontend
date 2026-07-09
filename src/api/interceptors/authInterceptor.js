/* ============================================================
   DOMS Enterprise Authentication Interceptor
============================================================ */

import API_CONFIG from "../config/apiConfig";

let isRefreshing = false;

let failedQueue = [];

/* ============================================================
   TOKEN HELPERS
============================================================ */

const getAccessToken = () =>

localStorage.getItem(

API_CONFIG.auth.tokenKey

);

const getRefreshToken = () =>

localStorage.getItem(

API_CONFIG.auth.refreshTokenKey

);

const setAccessToken = (token) =>

localStorage.setItem(

API_CONFIG.auth.tokenKey,

token

);

const clearTokens = () => {

localStorage.removeItem(

API_CONFIG.auth.tokenKey

);

localStorage.removeItem(

API_CONFIG.auth.refreshTokenKey

);

};

/* ============================================================
   QUEUE
============================================================ */

const processQueue = (

error,

token = null

) => {

failedQueue.forEach(

promise => {

if(error){

promise.reject(error);

}else{

promise.resolve(token);

}

}

);

failedQueue=[];

};

/* ============================================================
   REQUEST INTERCEPTOR
============================================================ */

export const attachAuthInterceptor=(api)=>{

api.interceptors.request.use(

config=>{

const token=

getAccessToken();

if(token){

config.headers.Authorization=

`${API_CONFIG.auth.tokenPrefix} ${token}`;

}

return config;

},

error=>Promise.reject(error)

);

/* ============================================================
   RESPONSE INTERCEPTOR
============================================================ */

api.interceptors.response.use(

response=>response,

async error=>{

const originalRequest=

error.config;

if(

error.response?.status!==401||

originalRequest._retry

){

return Promise.reject(error);

}

if(isRefreshing){

return new Promise(

(resolve,reject)=>{

failedQueue.push({

resolve,

reject,

});

}

).then(token=>{

originalRequest.headers.Authorization=

`${API_CONFIG.auth.tokenPrefix} ${token}`;

return api(originalRequest);

});

}

originalRequest._retry=true;

isRefreshing=true;

try{

const refreshToken=

getRefreshToken();

const response=

await api.post(

API_CONFIG.auth.refreshEndpoint,

{

refreshToken,

}

);

const accessToken=

response.data.accessToken;

setAccessToken(

accessToken

);

processQueue(

null,

accessToken

);

originalRequest.headers.Authorization=

`${API_CONFIG.auth.tokenPrefix} ${accessToken}`;

return api(

originalRequest

);

}

catch(refreshError){

processQueue(

refreshError,

null

);

clearTokens();

window.location.href="/login";

return Promise.reject(

refreshError

);

}

finally{

isRefreshing=false;

}

}

);

};

export default attachAuthInterceptor;