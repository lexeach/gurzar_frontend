import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./slices/authSlice";
import memberReducer from "./slices/memberSlice";
import dashboardReducer from "./slices/dashboardSlice";
import hierarchyReducer from "./slices/hierarchySlice";
import hierarchyCrudReducer from "./slices/hierarchyCrudSlice";
import reportReducer from "./slices/reportSlice";
import documentReducer from "./slices/documentSlice";
import notificationReducer from "./slices/notificationSlice";
import settingsReducer from "./slices/settingsSlice";
import tehsilReducer from "./slices/tehsilSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    member: memberReducer,
    dashboard: dashboardReducer,

    // Selection state
    hierarchy: hierarchyReducer,

    // CRUD state
    hierarchyCrud: hierarchyCrudReducer,

    tehsil: tehsilReducer,
    report: reportReducer,
    document: documentReducer,
    notification: notificationReducer,
    settings: settingsReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),

  devTools: import.meta.env.DEV,
});

export default store;
