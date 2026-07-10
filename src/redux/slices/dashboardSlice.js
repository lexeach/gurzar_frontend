import {
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";

import api from "../../api";
//import api from "../../api/client/apiClient";

/* ==========================================================
   Dashboard Data
========================================================== */

export const fetchDashboard =
  createAsyncThunk(
    "dashboard/fetchDashboard",

    async (_, { rejectWithValue }) => {

      try {

        const response = await api.get(
          "/dashboard"
        );

        return response.data;

      } catch (err) {

        return rejectWithValue(
          err.response?.data?.message ||
            "Unable to load dashboard."
        );

      }

    }
  );

/* ==========================================================
   Initial State
========================================================== */

const initialState = {

  loading: false,

  error: null,

  statistics: {

    totalMembers: 0,

    todayRegistrations: 0,

    activeMembers: 0,

    verifiedMembers: 0,

    states: 0,

    districts: 0,

    tehsils: 0,

    villages: 0,

  },

  growthChart: [],

  stateDistribution: [],

  recentMembers: [],

  recentActivities: [],

  notifications: [],

};

/* ==========================================================
   Slice
========================================================== */

const dashboardSlice = createSlice({

  name: "dashboard",

  initialState,

  reducers: {

    clearDashboardError(state) {

      state.error = null;

    },

  },

  extraReducers: (builder) => {

    builder

      .addCase(
        fetchDashboard.pending,
        (state) => {

          state.loading = true;

        }
      )

      .addCase(
        fetchDashboard.fulfilled,
        (state, action) => {

          state.loading = false;

          state.statistics =
            action.payload.statistics;

          state.growthChart =
            action.payload.growthChart;

          state.stateDistribution =
            action.payload.stateDistribution;

          state.recentMembers =
            action.payload.recentMembers;

          state.recentActivities =
            action.payload.recentActivities;

          state.notifications =
            action.payload.notifications;

        }
      )

      .addCase(
        fetchDashboard.rejected,
        (state, action) => {

          state.loading = false;

          state.error = action.payload;

        }
      );

  },

});

export const {

  clearDashboardError,

} = dashboardSlice.actions;

export default dashboardSlice.reducer;