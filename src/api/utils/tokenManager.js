/* ============================================================
   DOMS Enterprise Token Manager
============================================================ */

import API_CONFIG from "../config/apiConfig";

/* ============================================================
   STORAGE KEYS
============================================================ */

const ACCESS_TOKEN_KEY =
    API_CONFIG.auth.tokenKey;

const REFRESH_TOKEN_KEY =
    API_CONFIG.auth.refreshTokenKey;

/* ============================================================
   ACCESS TOKEN
============================================================ */

const getAccessToken = () =>
    localStorage.getItem(
        ACCESS_TOKEN_KEY
    );

const setAccessToken = (token) => {

    if (token) {

        localStorage.setItem(
            ACCESS_TOKEN_KEY,
            token
        );

    }

};

/* ============================================================
   REFRESH TOKEN
============================================================ */

const getRefreshToken = () =>
    localStorage.getItem(
        REFRESH_TOKEN_KEY
    );

const setRefreshToken = (token) => {

    if (token) {

        localStorage.setItem(
            REFRESH_TOKEN_KEY,
            token
        );

    }

};

/* ============================================================
   REMOVE
============================================================ */

const removeAccessToken = () =>
    localStorage.removeItem(
        ACCESS_TOKEN_KEY
    );

const removeRefreshToken = () =>
    localStorage.removeItem(
        REFRESH_TOKEN_KEY
    );

const clear = () => {

    removeAccessToken();

    removeRefreshToken();

};

/* ============================================================
   AUTHORIZATION HEADER
============================================================ */

const getAuthorizationHeader = () => {

    const token = getAccessToken();

    if (!token) {

        return {};

    }

    return {

        Authorization:
            `${API_CONFIG.auth.tokenPrefix} ${token}`,

    };

};

/* ============================================================
   JWT PAYLOAD
============================================================ */

const getPayload = () => {

    const token = getAccessToken();

    if (!token) {

        return null;

    }

    try {

        const payload =
            token.split(".")[1];

        return JSON.parse(

            atob(payload)

        );

    }

    catch {

        return null;

    }

};

/* ============================================================
   TOKEN EXPIRY
============================================================ */

const isTokenExpired = () => {

    const payload = getPayload();

    if (!payload?.exp) {

        return true;

    }

    return (

        Date.now() >=

        payload.exp * 1000

    );

};

/* ============================================================
   AUTH
============================================================ */

const isAuthenticated = () =>

    !!getAccessToken() &&

    !isTokenExpired();

/* ============================================================
   EXPORT
============================================================ */

const tokenManager = Object.freeze({

    getAccessToken,

    setAccessToken,

    getRefreshToken,

    setRefreshToken,

    removeAccessToken,

    removeRefreshToken,

    clear,

    getAuthorizationHeader,

    getPayload,

    isTokenExpired,

    isAuthenticated,

});

export default tokenManager;