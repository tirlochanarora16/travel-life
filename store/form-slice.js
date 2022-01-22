import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    formValues: {},
    currentFormPage: 0,
  },
  reducers: {
    setFormValues(state, action) {
      state.formValues = action.payload;
    },
    incrementFormPage(state, action) {
        state.currentFormPage++;
    },
    descrementFormPage(state, action) {
        state.currentFormPage--;
    }
  },
});

export const formActions = formSlice.actions;

export default formSlice;
