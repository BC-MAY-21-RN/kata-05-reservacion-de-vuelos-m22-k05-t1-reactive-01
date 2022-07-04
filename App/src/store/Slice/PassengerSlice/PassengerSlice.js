import {createSlice} from '@reduxjs/toolkit';

const passengerSlice = createSlice({
  name: 'passenger',
  initialState: '',
  reducers: {
    add_passenger: (state, {payload}) => {
      state.push(payload);
    },
  },
});

export const {add_passenger} = passengerSlice.actions;
export default passengerSlice.reducer;
