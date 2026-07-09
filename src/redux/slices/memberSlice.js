import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/axios";

/* ==========================================================================
   Async Thunks
   ========================================================================== */

// Get Members
export const fetchMembers = createAsyncThunk(
  "member/fetchMembers",
  async (params = {}, { rejectWithValue }) => {
    try {
      const response = await api.get("/members", {
        params,
      });

      return response.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || "Unable to load members."
      );
    }
  }
);

// Get Member Details
export const fetchMemberById = createAsyncThunk(
  "member/fetchMemberById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.get(`/members/${id}`);

      return response.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || "Unable to fetch member."
      );
    }
  }
);

// Create Member
export const createMember = createAsyncThunk(
  "member/createMember",
  async (data, { rejectWithValue }) => {
    try {
      const response = await api.post("/members", data);

      return response.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || "Unable to create member."
      );
    }
  }
);

// Update Member
export const updateMember = createAsyncThunk(
  "member/updateMember",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await api.put(
        `/members/${id}`,
        data
      );

      return response.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || "Unable to update member."
      );
    }
  }
);

// Delete Member
export const deleteMember = createAsyncThunk(
  "member/deleteMember",
  async (id, { rejectWithValue }) => {
    try {
      await api.delete(`/members/${id}`);

      return id;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || "Unable to delete member."
      );
    }
  }
);

/* ==========================================================================
   Initial State
   ========================================================================== */

const initialState = {
  members: [],
  selectedMember: null,

  statistics: {
    total: 0,
    active: 0,
    inactive: 0,
    verified: 0,
  },

  filters: {
    search: "",
    state: "",
    district: "",
    tehsil: "",
    village: "",
    status: "",
  },

  pagination: {
    page: 1,
    limit: 20,
    totalPages: 0,
    totalRecords: 0,
  },

  loading: false,
  error: null,
};

/* ==========================================================================
   Slice
   ========================================================================== */

const memberSlice = createSlice({
  name: "member",

  initialState,

  reducers: {
    clearMemberError(state) {
      state.error = null;
    },

    setSelectedMember(state, action) {
      state.selectedMember = action.payload;
    },

    updateFilters(state, action) {
      state.filters = {
        ...state.filters,
        ...action.payload,
      };
    },

    clearFilters(state) {
      state.filters = initialState.filters;
    },

    resetMemberState() {
      return initialState;
    },
  },

  extraReducers: (builder) => {
    builder

      // Fetch Members
      .addCase(fetchMembers.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchMembers.fulfilled, (state, action) => {
        state.loading = false;

        state.members = action.payload.data;

        state.pagination = action.payload.pagination;

        state.statistics =
          action.payload.statistics || state.statistics;
      })

      .addCase(fetchMembers.rejected, (state, action) => {
        state.loading = false;

        state.error = action.payload;
      })

      // Member Details
      .addCase(fetchMemberById.fulfilled, (state, action) => {
        state.selectedMember = action.payload;
      })

      // Create Member
      .addCase(createMember.fulfilled, (state, action) => {
        state.members.unshift(action.payload);

        state.statistics.total++;
      })

      // Update Member
      .addCase(updateMember.fulfilled, (state, action) => {
        const index = state.members.findIndex(
          (m) => m.id === action.payload.id
        );

        if (index !== -1) {
          state.members[index] = action.payload;
        }

        if (
          state.selectedMember?.id === action.payload.id
        ) {
          state.selectedMember = action.payload;
        }
      })

      // Delete Member
      .addCase(deleteMember.fulfilled, (state, action) => {
        state.members = state.members.filter(
          (m) => m.id !== action.payload
        );

        state.statistics.total--;
      });
  },
});

/* ==========================================================================
   Export
   ========================================================================== */

export const {
  clearMemberError,
  setSelectedMember,
  updateFilters,
  clearFilters,
  resetMemberState,
} = memberSlice.actions;

export default memberSlice.reducer;