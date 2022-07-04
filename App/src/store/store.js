import {configureStore} from '@reduxjs/toolkit';
import originReducer from './Slice/OriginSlice/OriginSlice';
import destinyReducer from './Slice/DestinySlice/DestinySlice';
import passengerReducer from './Slice/PassengerSlice/PassengerSlice';
import dateReducer from './Slice/DateSlice/DateSlice';
export const store = configureStore({
  reducer: {
    origin: originReducer,
    destiny: destinyReducer,
    passenger: passengerReducer,
    date: dateReducer,
  },
});
