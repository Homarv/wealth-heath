import { createSlice } from '@reduxjs/toolkit';
import mock from '../mock/Mock';

const formSlice = createSlice({
  name: 'form',
  initialState: {
    formData: mock
  },
  reducers: {
    saveFormData: (state, action) => {
      state.formData.push(action.payload);
    },
  },
});

export const { saveFormData } = formSlice.actions;
export default formSlice.reducer;