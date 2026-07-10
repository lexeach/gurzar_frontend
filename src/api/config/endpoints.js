/* ============================================================
   DOMS Enterprise API Endpoints
============================================================ */

const ENDPOINTS = Object.freeze({

    /* ========================================================
       Authentication
    ======================================================== */

    AUTH: {

        LOGIN: "/auth/login",

        LOGOUT: "/auth/logout",

        REGISTER: "/auth/register",

        PROFILE: "/auth/profile",

        REFRESH: "/auth/refresh",

        FORGOT_PASSWORD: "/auth/forgot-password",

        RESET_PASSWORD: "/auth/reset-password",

        VERIFY_OTP: "/auth/verify-otp",

        CHANGE_PASSWORD: "/auth/change-password",

    },

    /* ========================================================
       Dashboard
    ======================================================== */

    DASHBOARD: {

        ROOT: "/dashboard",

        SUMMARY: "/dashboard/summary",

        STATS: "/dashboard/stats",

        ANALYTICS: "/dashboard/analytics",

        RECENT: "/dashboard/recent",

    },

    /* ========================================================
       Organization
    ======================================================== */

    ORGANIZATION: "/organizations",

    /* ========================================================
       Members
    ======================================================== */

    MEMBER: "/members",

    FAMILY: "/families",

    EXECUTIVE: "/executives",

    COMMITTEE: "/committees",

    /* ========================================================
       Hierarchy
    ======================================================== */

    STATE: "/states",

    DISTRICT: "/districts",

    TEHSIL: "/tehsils",

    VILLAGE: "/villages",

    BOOTH: "/booths",

    /* ========================================================
       Communication
    ======================================================== */

    COMMUNICATION: "/communications",

    NOTIFICATION: "/notifications",

    EMAIL: "/emails",

    SMS: "/sms",

    WHATSAPP: "/whatsapp",

    ANNOUNCEMENT: "/announcements",

    /* ========================================================
       Reports
    ======================================================== */

    REPORT: "/reports",

    ANALYTICS: "/analytics",

    EXPORT: "/export",

    /* ========================================================
       Documents
    ======================================================== */

    DOCUMENT: "/documents",

    MEDIA: "/media",

    UPLOAD: "/upload",

    DOWNLOAD: "/download",

    QR: "/qr",

    /* ========================================================
       Settings
    ======================================================== */

    SETTINGS: "/settings",

    ROLE: "/roles",

    PERMISSION: "/permissions",

    MASTER: "/masters",

    CONFIGURATION: "/configuration",

    /* ========================================================
       System
    ======================================================== */

    SYSTEM: {

        HEALTH: "/system/health",

        VERSION: "/system/version",

        AUDIT: "/system/audit",

        LOGS: "/system/logs",

    },

});

export default ENDPOINTS;