import { createAsyncThunk } from "@reduxjs/toolkit";

import { getErrorMessage } from "@/utils/errorMessage";

import {
  fetchUserData as fetchUserDataAPI,
  updateUserData as updateUserDataAPI,
} from "@/apis/userApi";

import type { RootState } from "./store";
import type { User } from "@ebuddy/shared";

export const fetchUserData = createAsyncThunk<
  User, // Return type of the payload creator
  string, // Argument type (userId)
  { state: RootState } // ThunkAPI configuration: specifying the state type
>("user/fetchUserData", async (userId: User["id"], thunkAPI) => {
  try {
    const state = thunkAPI.getState();

    const response = await fetchUserDataAPI(userId, state.auth.token);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(getErrorMessage(error));
  }
});

export const updateUserData = createAsyncThunk<
  User, // Return type of the payload creator
  { userId: User["id"]; newData: User }, // Argument type (userId)
  { state: RootState } // ThunkAPI configuration: specifying the state type
>("user/updateUserData", async ({ userId, newData }, thunkAPI) => {
  try {
    const state = thunkAPI.getState();

    const response = await updateUserDataAPI(userId, newData, state.auth.token);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(getErrorMessage(error));
  }
});
