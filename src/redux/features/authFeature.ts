import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store/Store";

interface AuthFeature {
  loading: boolean;
  userInfo: {};
  userToken: any;
  error: any;
  success: boolean;
}

const initialState: AuthFeature = {
  loading: false,
  userInfo: {},
  userToken: null,
  error: null,
  success: false,
};

const authFeature = createSlice({
  name: "authFeature",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("userToken");
      (state.loading = false),
        (state.userInfo = {}),
        (state.userToken = null),
        (state.error = null),
        (state.loading = false);
    },
  },
});

export const { logout } = authFeature.actions;
export default authFeature.reducer;
