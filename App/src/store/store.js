import {configureStore} from '@reduxjs/toolkit';
import flightReducer from './Slice/FlightSlice/FlightSlice';
import fetchdataReducer from './Slice/FetchDataSlice/FetchDataSlice';
export const store = configureStore({
  reducer: {
    flight: flightReducer,
    fetchdata: fetchdataReducer,
  },
});
