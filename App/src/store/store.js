import {configureStore} from '@reduxjs/toolkit';
import flightReducer from './Slice/FlightSlice/FlightSlice';
export const store = configureStore({
  reducer: {
    flight: flightReducer,
  },
});
