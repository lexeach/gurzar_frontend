import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./slices/authSlice";
import memberReducer from "./slices/memberSlice";
import dashboardReducer from "./slices/dashboardSlice";
import hierarchyReducer from "./slices/hierarchySlice";
import reportReducer from "./slices/reportSlice";
import documentReducer from "./slices/documentSlice";
import notificationReducer from "./slices/notificationSlice";
import settingsReducer from "./slices/settingsSlice";
import tehsilReducer from "./slices/tehsilSlice";

import hierarchyCrudReducer from "./slices/hierarchyCrudSlice";

export const store = configureStore({
  reducer: {
    hierarchy: hierarchyReducer,
    hierarchyCrud: hierarchyCrudReducer,
  },
});

const store = configureStore({
  reducer: {
    auth: authReducer,
    member: memberReducer,
    dashboard: dashboardReducer,
    hierarchy: hierarchyReducer,
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