import {createSlice} from '@reduxjs/toolkit';

const destinySlice = createSlice({
  name: 'desitny',
  initialState: '',
  reducers: {
    add_destiny: (state, {payload}) => {
      state.push(payload);
    },
  },
});

export const {add_destiny} = destinySlice.actions;
export default destinySlice.reducer;
