import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  signInWithPopup as signInWithPopupFirebase,
  signInWithEmailAndPassword as signInWithEmailAndPasswordFirebase,
  signOut as signOutFirebase,
} from "firebase/auth";

import { getErrorMessage } from "@/utils/errorMessage";
import { auth, provider } from "@/config/firebaseConfig";

import {
  fetchUserData as fetchUserDataAPI,
  updateUserData as updateUserDataAPI,
} from "@/apis/userApi";

import type { RootState } from "./store";
import type { User } from "@ebuddy/shared";

export { setAuthenticated, setNotAuthenticated } from "./reducers";

export const fetchUserData = createAsyncThunk<
  User,
  string,
  { state: RootState }
>("user/fetchUserData", async (userId: User["id"], thunkAPI) => {
  try {
    const state = thunkAPI.getState();

    const response = await fetchUserDataAPI(userId, state.auth.token || "");
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(getErrorMessage(error));
  }
});

export const updateUserData = createAsyncThunk<
  User,
  { userId: User["id"]; newData: User },
  { state: RootState }
>("user/updateUserData", async ({ userId, newData }, thunkAPI) => {
  try {
    const state = thunkAPI.getState();

    const response = await updateUserDataAPI(
      userId,
      newData,
      state.auth.token || ""
    );
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(getErrorMessage(error));
  }
});

export const signInWithEmailAndPassword = createAsyncThunk<
  { uid: string; token: string },
  { email: string; password: string },
  { state: RootState }
>("auth/signInWithEmailAndPassword", async ({ email, password }, thunkAPI) => {
  try {
    const userCredential = await signInWithEmailAndPasswordFirebase(
      auth,
      email,
      password
    );

    const uid = userCredential.user.uid;
    const token = await userCredential.user.getIdToken();

    return { uid, token };
  } catch (error) {
    return thunkAPI.rejectWithValue(getErrorMessage(error));
  }
});

export const signInWithPopup = createAsyncThunk<
  { uid: string; token: string },
  undefined,
  { state: RootState }
>("auth/signInWithPopup", async (_, thunkAPI) => {
  try {
    const result = await signInWithPopupFirebase(auth, provider);

    const uid = result.user.uid;
    const token = await result.user.getIdToken();

    return { uid, token };
  } catch (error) {
    return thunkAPI.rejectWithValue(getErrorMessage(error));
  }
});

export const signOut = createAsyncThunk<void, undefined, { state: RootState }>(
  "auth/signOut",
  async (_, thunkAPI) => {
    try {
      await signOutFirebase(auth);
    } catch (error) {
      return thunkAPI.rejectWithValue(getErrorMessage(error));
    }
  }
);
