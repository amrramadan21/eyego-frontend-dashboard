import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthState = {
  isAuthenticated: boolean;
  user: string | null;
  isInitialized?: boolean; // Optional property to track initialization
};

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  isInitialized: false, // Initialize as false
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },

    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
      initializeAuth: (state) => {
          state.isInitialized = true;
      },
  },
});

export const { login, logout, initializeAuth } = authSlice.actions;
export default authSlice.reducer;