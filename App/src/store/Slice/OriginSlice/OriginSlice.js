import {createSlice} from '@reduxjs/toolkit';

const originSlice = createSlice({
  name: 'origin',
  initialState: [],
  reducers: {
    add_origin: (state, {payload}) => {
      state.push(payload);
    },
  },
});

export const {add_origin} = originSlice.actions;
export default originSlice.reducer;
