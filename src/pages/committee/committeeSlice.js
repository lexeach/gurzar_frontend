import {
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";

import committeeService from "../../services/committeeService";

/* ==========================================================
   Async Thunks
========================================================== */

export const fetchCommittees = createAsyncThunk(
  "committee/fetchCommittees",
  async (params = {}, thunkAPI) => {
    try {
      return await committeeService.getAll(params);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);

export const fetchCommitteeById = createAsyncThunk(
  "committee/fetchCommitteeById",
  async (id, thunkAPI) => {
    try {
      return await committeeService.getById(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);

export const createCommittee = createAsyncThunk(
  "committee/createCommittee",
  async (payload, thunkAPI) => {
    try {
      return await committeeService.create(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);

export const updateCommittee = createAsyncThunk(
  "committee/updateCommittee",
  async (payload, thunkAPI) => {
    try {
      return await committeeService.update(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);

export const deleteCommittee = createAsyncThunk(
  "committee/deleteCommittee",
  async (id, thunkAPI) => {
    try {
      await committeeService.remove(id);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);

export const fetchCommitteeMembers = createAsyncThunk(
  "committee/fetchMembers",
  async (committeeId) =>
    committeeService.getMembers(committeeId)
);

export const fetchCommitteeMeetings = createAsyncThunk(
  "committee/fetchMeetings",
  async (committeeId) =>
    committeeService.getMeetings(committeeId)
);

export const fetchCommitteeTasks = createAsyncThunk(
  "committee/fetchTasks",
  async (committeeId) =>
    committeeService.getTasks(committeeId)
);

export const fetchCommitteeDashboard = createAsyncThunk(
  "committee/fetchDashboard",
  async (committeeId) =>
    committeeService.getDashboard(committeeId)
);