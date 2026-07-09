import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

/*
|--------------------------------------------------------------------------
| Initial State
|--------------------------------------------------------------------------
*/

const initialState = {
  user: null,
  token: localStorage.getItem("token") || null,
  refreshToken: localStorage.getItem("refreshToken") || null,
  role: null,
  permissions: [],
  isAuthenticated: !!localStorage.getItem("token"),
  loading: false,
  error: null,
};

/*
|--------------------------------------------------------------------------
| Login API
|--------------------------------------------------------------------------
*/

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/login`,
        credentials
      );

      return response.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || "Login failed."
      );
    }
  }
);

/*
|--------------------------------------------------------------------------
| Refresh Token
|--------------------------------------------------------------------------
*/

export const refreshUserToken = createAsyncThunk(
  "auth/refreshUserToken",
  async (_, { getState, rejectWithValue }) => {
    try {
      const { refreshToken } = getState().auth;

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/refresh-token`,
        {
          refreshToken,
        }
      );

      return response.data;

    } catch (err) {

      return rejectWithValue("Session expired.");

    }
  }
);

/*
|--------------------------------------------------------------------------
| Slice
|--------------------------------------------------------------------------
*/

const authSlice = createSlice({
  name: "auth",

  initialState,

  reducers: {

    logout(state) {

      state.user = null;
      state.token = null;
      state.refreshToken = null;
      state.role = null;
      state.permissions = [];
      state.isAuthenticated = false;
      state.loading = false;
      state.error = null;

      localStorage.removeItem("token");
      localStorage.removeItem("refreshToken");

    },

    clearError(state) {

      state.error = null;

    },

    setUser(state, action) {

      state.user = action.payload;

    },

    updatePermissions(state, action) {

      state.permissions = action.payload;

    }

  },

  extraReducers: (builder) => {

    builder

      /*
      |--------------------------------------------------------------------------
      | Login
      |--------------------------------------------------------------------------
      */

      .addCase(loginUser.pending, (state) => {

        state.loading = true;
        state.error = null;

      })

      .addCase(loginUser.fulfilled, (state, action) => {

        state.loading = false;

        state.user = action.payload.user;

        state.token = action.payload.token;

        state.refreshToken = action.payload.refreshToken;

        state.role = action.payload.user.role;

        state.permissions =
          action.payload.user.permissions || [];

        state.isAuthenticated = true;

        localStorage.setItem(
          "token",
          action.payload.token
        );

        localStorage.setItem(
          "refreshToken",
          action.payload.refreshToken
        );

      })

      .addCase(loginUser.rejected, (state, action) => {

        state.loading = false;

        state.error = action.payload;

      })

      /*
      |--------------------------------------------------------------------------
      | Refresh Token
      |--------------------------------------------------------------------------
      */

      .addCase(
        refreshUserToken.fulfilled,
        (state, action) => {

          state.token = action.payload.token;

          localStorage.setItem(
            "token",
            action.payload.token
          );

        }
      )

      .addCase(
        refreshUserToken.rejected,
        (state) => {

          state.user = null;

          state.token = null;

          state.refreshToken = null;

          state.role = null;

          state.permissions = [];

          state.isAuthenticated = false;

          localStorage.removeItem("token");

          localStorage.removeItem("refreshToken");

        }
      );

  },

});

export const {
  logout,
  clearError,
  setUser,
  updatePermissions,
} = authSlice.actions;

export default authSlice.reducer;