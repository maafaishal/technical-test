import { createSlice } from "@reduxjs/toolkit";

import {
  fetchUserData,
  updateUserData,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "./actions";

import type { User } from "@ebuddy/shared";

type UserInitialState = {
  data: User | null;
  loading: boolean;
  error: string | null;
};

type AuthInitialState = {
  userId: string | null;
  isAuthenticated: boolean;
  initialLoading: boolean;
  processLoading: boolean;
  token: string | null;
  error: string | null;
};

const userInitialState: UserInitialState = {
  data: null,
  loading: false,
  error: null,
};

const authInitialState: AuthInitialState = {
  userId: null,
  isAuthenticated: false,
  token: null,
  initialLoading: true,
  processLoading: false,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(updateUserData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(updateUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {
    setAuthenticated: (
      state,
      action: { payload: { userId: string; token: string } }
    ) => {
      state.isAuthenticated = true;
      state.initialLoading = false;
      state.userId = action.payload.userId;
      state.token = action.payload.token;
    },
    setNotAuthenticated: (state) => {
      state.isAuthenticated = false;
      state.initialLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signInWithEmailAndPassword.pending, (state) => {
        state.processLoading = true;
        state.error = null;
      })
      .addCase(signInWithEmailAndPassword.fulfilled, (state, action) => {
        state.processLoading = false;
        state.userId = action.payload.uid;
        state.token = action.payload.token;
        state.isAuthenticated = true;
      })
      .addCase(signInWithEmailAndPassword.rejected, (state, action) => {
        state.processLoading = false;
        state.error = action.payload as string;
      })
      .addCase(signInWithPopup.pending, (state) => {
        state.processLoading = true;
        state.error = null;
      })
      .addCase(signInWithPopup.fulfilled, (state, action) => {
        state.processLoading = false;
        state.userId = action.payload.uid;
        state.token = action.payload.token;
        state.isAuthenticated = true;
      })
      .addCase(signInWithPopup.rejected, (state, action) => {
        state.processLoading = false;
        state.error = action.payload as string;
      })
      .addCase(signOut.pending, (state) => {
        state.processLoading = true;
        state.error = null;
      })
      .addCase(signOut.fulfilled, (state) => {
        state.processLoading = false;
        state.userId = "";
        state.token = "";
        state.isAuthenticated = false;
      })
      .addCase(signOut.rejected, (state, action) => {
        state.processLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setAuthenticated, setNotAuthenticated } = authSlice.actions;
