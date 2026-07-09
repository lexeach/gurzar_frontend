/* ============================================================
   DOMS Enterprise Download Client
============================================================ */

import api from "./apiClient";

import API_CONFIG from "../config/apiConfig";

/* ============================================================
   GET FILE NAME
============================================================ */

const getFileName = (

headers = {},

defaultName = "download"

) => {

    const disposition =

        headers["content-disposition"] ||

        headers["Content-Disposition"];

    if (!disposition) {

        return defaultName;

    }

    const match = disposition.match(

        /filename="?([^"]+)"?/

    );

    return match

        ? match[1]

        : defaultName;

};

/* ============================================================
   SAVE FILE
============================================================ */

const saveFile = (

blob,

fileName

) => {

    const url =

        URL.createObjectURL(blob);

    const link =

        document.createElement("a");

    link.href = url;

    link.download = fileName;

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    URL.revokeObjectURL(url);

};

/* ============================================================
   DOWNLOAD
============================================================ */

const download = async (

url,

config = {},

defaultName = "download"

) => {

    const response =

        await api.get(

            url,

            {

                responseType: "blob",

                timeout:

                    API_CONFIG.downloadTimeout,

                ...config,

            }

        );

    const fileName =

        getFileName(

            response.headers,

            defaultName

        );

    saveFile(

        response.data,

        fileName

    );

    return response;

};

/* ============================================================
   PDF
============================================================ */

const downloadPDF = (

url,

config = {},

fileName = "document.pdf"

) =>

download(

    url,

    config,

    fileName

);

/* ============================================================
   EXCEL
============================================================ */

const downloadExcel = (

url,

config = {},

fileName = "report.xlsx"

) =>

download(

    url,

    config,

    fileName

);

/* ============================================================
   CSV
============================================================ */

const downloadCSV = (

url,

config = {},

fileName = "report.csv"

) =>

download(

    url,

    config,

    fileName

);

/* ============================================================
   IMAGE
============================================================ */

const downloadImage = (

url,

config = {},

fileName = "image.png"

) =>

download(

    url,

    config,

    fileName

);

/* ============================================================
   ZIP
============================================================ */

const downloadZip = (

url,

config = {},

fileName = "archive.zip"

) =>

download(

    url,

    config,

    fileName

);

/* ============================================================
   EXPORT
============================================================ */

export default Object.freeze({

    download,

    downloadPDF,

    downloadExcel,

    downloadCSV,

    downloadImage,

    downloadZip,

});