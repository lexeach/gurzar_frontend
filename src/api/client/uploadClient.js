/* ============================================================
   DOMS Enterprise Upload Client
============================================================ */

import api from "./apiClient";

import API_CONFIG from "../config/apiConfig";

/* ============================================================
   SINGLE FILE
============================================================ */

const upload = (

url,

file,

config = {}

) => {

    const formData =

        file instanceof FormData

            ? file

            : new FormData();

    if (!(file instanceof FormData)) {

        formData.append("file", file);

    }

    return api.post(

        url,

        formData,

        {

            timeout:

                API_CONFIG.uploadTimeout,

            headers: {

                "Content-Type":

                    "multipart/form-data",

            },

            ...config,

        }

    );

};

/* ============================================================
   MULTIPLE FILES
============================================================ */

const uploadMultiple = (

url,

files = [],

config = {}

) => {

    const formData =

        new FormData();

    files.forEach(file => {

        formData.append(

            "files",

            file

        );

    });

    return api.post(

        url,

        formData,

        {

            timeout:

                API_CONFIG.uploadTimeout,

            headers: {

                "Content-Type":

                    "multipart/form-data",

            },

            ...config,

        }

    );

};

/* ============================================================
   IMAGE
============================================================ */

const uploadImage = (

url,

file,

config = {}

) =>

upload(

    url,

    file,

    config

);

/* ============================================================
   DOCUMENT
============================================================ */

const uploadDocument = (

url,

file,

config = {}

) =>

upload(

    url,

    file,

    config

);

/* ============================================================
   EXPORT
============================================================ */

export default Object.freeze({

    upload,

    uploadMultiple,

    uploadImage,

    uploadDocument,

});