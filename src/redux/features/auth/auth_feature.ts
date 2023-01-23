import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  user_token: {},
  error: {},
  loading: false,
};

const auth_feature_Slice = createSlice({
  name: "auth_feature_slice",
  initialState,
  reducers: {},
  extraReducers: {},
});

const {} = auth_feature_Slice.actions;

export default auth_feature_Slice.reducer;
