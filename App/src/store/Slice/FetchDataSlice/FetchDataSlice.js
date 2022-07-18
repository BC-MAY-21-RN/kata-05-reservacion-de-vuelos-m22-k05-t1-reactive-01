import {createSlice} from '@reduxjs/toolkit';

const fetchedata = createSlice({
  name: 'fetchedata',
  initialState: [],
  reducers: {
    add_data: (state, {payload}) => {
      state.push(payload);
    },
  },
});

export const {add_data} = fetchedata.actions;
export default fetchedata.reducer;
