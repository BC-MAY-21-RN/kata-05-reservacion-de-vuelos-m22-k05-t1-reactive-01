import {createSlice} from '@reduxjs/toolkit';

const dateSlice = createSlice({
  name: 'date',
  initialState: '',
  reducers: {
    add_date: (state, {payload}) => {
      state.push(payload);
    },
  },
});

export const {add_date} = dateSlice.actions;
export default dateSlice.reducer;
