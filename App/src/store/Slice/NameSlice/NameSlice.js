import {createSlice} from '@reduxjs/toolkit';

const NameSlice = createSlice({
  name: 'names',
  initialState: [],
  reducers: {
    add: (state, {payload}) => {
      state.push(payload);
    },
    del: (state, {payload}) => {
      return (state = state.filter(name => name !== payload));
    },
  },
});

export const {add, del} = NameSlice.actions;
export default NameSlice.reducer;
