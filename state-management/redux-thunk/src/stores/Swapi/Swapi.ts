import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

export const loadPersonThunk = createAsyncThunk<
  { name: string },
  number,
  { state: RootState }
>("user/openAiConsentrequest", async (id) => {
  const response = await fetch(`https://swapi.dev/api/people/${id}`, {
    method: "GET",
  });

  return response.json();
});

export const getName = createSlice({
  name: "swapi",
  initialState: {
    name: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadPersonThunk.pending, () => {});
    builder.addCase(loadPersonThunk.fulfilled, (state, action) => {
      state.name = action.payload.name;
    });
    builder.addCase(loadPersonThunk.rejected, () => {});
  },
});

export default getName.reducer;
