import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    loading: false,

    sidebarOpen: true,

    theme: "light",

    language: "en",

    online: navigator.onLine,

    appVersion: "1.0.0",

};

const systemSlice = createSlice({

    name: "system",

    initialState,

    reducers: {

        setLoading: (state, action) => {

            state.loading = action.payload;

        },

        toggleSidebar: (state) => {

            state.sidebarOpen = !state.sidebarOpen;

        },

        setSidebar: (state, action) => {

            state.sidebarOpen = action.payload;

        },

        setTheme: (state, action) => {

            state.theme = action.payload;

        },

        setLanguage: (state, action) => {

            state.language = action.payload;

        },

        setOnlineStatus: (state, action) => {

            state.online = action.payload;

        },

    },

});

export const {

    setLoading,

    toggleSidebar,

    setSidebar,

    setTheme,

    setLanguage,

    setOnlineStatus,

} = systemSlice.actions;

export default systemSlice.reducer;