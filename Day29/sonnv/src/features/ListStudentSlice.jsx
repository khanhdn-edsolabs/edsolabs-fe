import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  loading: null,
  err: "",
};

export const getAllStudent = createAsyncThunk(
  "student/getStudent",
  async () => {
    return fetch("http://localhost:3000/students", {
      headers: { "Content-Type": "application/json" },
    }).then((res) => res.json());
  }
);
export const allStudentSlice = createSlice({
  name: "allStudent",
  initialState,
  reducers: {
  },
  extraReducers: {
    [getAllStudent.pending]: (state) => {
      state.list = [];
      state.loading = "loading";
    },
    [getAllStudent.fulfilled]: (state, action) => {
      state.list = action.payload;
    },
    [getAllStudent.rejected]: (state, action) => {
      state.loading = "error";
      state.err = action.error.message;
    },
  },
});

export const selectStudent = (state) => state.students.list;

export const {searchStudent } = allStudentSlice.actions;

export default allStudentSlice.reducer;
