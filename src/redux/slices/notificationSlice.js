import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    items: [],

    unreadCount: 0,

};

const notificationSlice = createSlice({

    name: "notification",

    initialState,

    reducers: {

        setNotifications: (state, action) => {

            state.items = action.payload;

            state.unreadCount = action.payload.filter(

                item => !item.read

            ).length;

        },

        markAsRead: (state, action) => {

            const item = state.items.find(

                n => n.id === action.payload

            );

            if (item) {

                item.read = true;

            }

        },

        clearNotifications: (state) => {

            state.items = [];

            state.unreadCount = 0;

        },

    },

});

export const {

    setNotifications,

    markAsRead,

    clearNotifications,

} = notificationSlice.actions;

export default notificationSlice.reducer;