import {
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";

import villageService from "../../../services/villageService";

/* ==========================================================
    Async Thunks
========================================================== */

export const fetchVillages = createAsyncThunk(
  "village/fetchVillages",
  async (_, thunkAPI) => {
    try {
      return await villageService.getAll();
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message ||
        error.message
      );
    }
  }
);

export const fetchVillageById = createAsyncThunk(
  "village/fetchVillageById",
  async (id, thunkAPI) => {
    try {
      return await villageService.getById(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message ||
        error.message
      );
    }
  }
);

export const createVillage = createAsyncThunk(
  "village/createVillage",
  async (payload, thunkAPI) => {
    try {
      return await villageService.create(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message ||
        error.message
      );
    }
  }
);

export const updateVillage = createAsyncThunk(
  "village/updateVillage",
  async (payload, thunkAPI) => {
    try {
      return await villageService.update(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message ||
        error.message
      );
    }
  }
);

export const deleteVillage = createAsyncThunk(
  "village/deleteVillage",
  async (id, thunkAPI) => {
    try {
      await villageService.remove(id);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message ||
        error.message
      );
    }
  }
);

/* ==========================================================
    Initial State
========================================================== */

const initialState = {

  villages: [],

  selectedVillage: null,

  loading: false,

  error: null,

};

/* ==========================================================
    Slice
========================================================== */

const villageSlice = createSlice({

  name: "village",

  initialState,

  reducers: {

    clearSelectedVillage(state) {

      state.selectedVillage = null;

    },

    clearVillageError(state) {

      state.error = null;

    },

  },

  extraReducers: (builder) => {

    builder

      /* Fetch List */

      .addCase(fetchVillages.pending, (state) => {

        state.loading = true;

        state.error = null;

      })

      .addCase(fetchVillages.fulfilled, (state, action) => {

        state.loading = false;

        state.villages = action.payload;

      })

      .addCase(fetchVillages.rejected, (state, action) => {

        state.loading = false;

        state.error = action.payload;

      })

      /* Fetch By Id */

      .addCase(fetchVillageById.pending, (state) => {

        state.loading = true;

      })

      .addCase(fetchVillageById.fulfilled, (state, action) => {

        state.loading = false;

        state.selectedVillage = action.payload;

      })

      .addCase(fetchVillageById.rejected, (state, action) => {

        state.loading = false;

        state.error = action.payload;

      })

      /* Create */

      .addCase(createVillage.pending, (state) => {

        state.loading = true;

      })

      .addCase(createVillage.fulfilled, (state, action) => {

        state.loading = false;

        state.villages.unshift(action.payload);

      })

      .addCase(createVillage.rejected, (state, action) => {

        state.loading = false;

        state.error = action.payload;

      })

      /* Update */

      .addCase(updateVillage.pending, (state) => {

        state.loading = true;

      })

      .addCase(updateVillage.fulfilled, (state, action) => {

        state.loading = false;

        state.villages = state.villages.map((item) =>

          item.id === action.payload.id

            ? action.payload

            : item

        );

        state.selectedVillage = action.payload;

      })

      .addCase(updateVillage.rejected, (state, action) => {

        state.loading = false;

        state.error = action.payload;

      })

      /* Delete */

      .addCase(deleteVillage.pending, (state) => {

        state.loading = true;

      })

      .addCase(deleteVillage.fulfilled, (state, action) => {

        state.loading = false;

        state.villages = state.villages.filter(

          (item) => item.id !== action.payload

        );

      })

      .addCase(deleteVillage.rejected, (state, action) => {

        state.loading = false;

        state.error = action.payload;

      });

  },

});

/* ==========================================================
    Exports
========================================================== */

export const {

  clearSelectedVillage,

  clearVillageError,

} = villageSlice.actions;

export default villageSlice.reducer;