import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    theme: "light",

    language: "en",

    notifications: true,

    timezone: "Asia/Kolkata",

};

const settingsSlice = createSlice({

    name: "settings",

    initialState,

    reducers: {

        updateSettings: (state, action) => {

            return {

                ...state,

                ...action.payload,

            };

        },

        resetSettings: () => initialState,

    },

});

export const {

    updateSettings,

    resetSettings,

} = settingsSlice.actions;

export default settingsSlice.reducer;