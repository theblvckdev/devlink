import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TabState {
  value: string;
}

const initialState: TabState = {
  value: "links",
};

const tabSlice = createSlice({
  name: "tab",
  initialState,
  reducers: {
    setValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setValue } = tabSlice.actions;

export default tabSlice.reducer;
