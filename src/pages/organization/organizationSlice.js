import {
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";

import organizationService from "../../services/organizationService";

/* ==========================================================
   Async Thunks
========================================================== */

export const fetchOrganizationTree = createAsyncThunk(
  "organization/fetchTree",
  async (params = {}, thunkAPI) => {
    try {
      return await organizationService.getTree(params);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message ||
        error.message
      );
    }
  }
);

export const fetchNodeChildren = createAsyncThunk(
  "organization/fetchNodeChildren",
  async (nodeId, thunkAPI) => {
    try {
      return {
        nodeId,
        children: await organizationService.getChildren(nodeId),
      };
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

  tree: null,

  loading: false,

  error: null,

  search: "",

  expandedNodes: {},

  selectedNode: null,

  filters: {

    level: "",

    department: "",

    designation: "",

    state: "",

    district: "",

    tehsil: "",

    village: "",

    booth: "",

    status: "",

  },

};