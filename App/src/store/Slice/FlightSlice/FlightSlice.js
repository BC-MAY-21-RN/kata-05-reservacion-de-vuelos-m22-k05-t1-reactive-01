import {createSlice} from '@reduxjs/toolkit';

const flightSlice = createSlice({
  name: 'flight',
  initialState: {
    origin: '',
    destiny: '',
    date: '',
    passenger: '',
  },
  reducers: {
    add_origin: (state, {payload}) => {
      state.origin = payload;
    },
    del_origin: state => {
      state.origin = '';
    },
    add_destiny: (state, {payload}) => {
      state.destiny = payload;
    },
    del_destiny: state => {
      state.destiny = '';
    },
    add_date: (state, {payload}) => {
      state.date = payload;
    },
    del_date: state => {
      state.date = '';
    },
    add_passenger: (state, {payload}) => {
      state.passenger = payload;
    },
    del_passenger: state => {
      state.passenger = '';
    },
    clean_store: state => {
      state.origin = '';
      state.destiny = '';
      state.date = '';
      state.passenger = '';
    },
  },
});

export const {
  add_origin,
  del_origin,
  add_destiny,
  del_destiny,
  add_date,
  del_date,
  add_passenger,
  del_passenger,
  clean_store,
} = flightSlice.actions;
export default flightSlice.reducer;
