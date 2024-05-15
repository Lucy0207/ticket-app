import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './filter.slice';
import flightReducer from './flights.slice';
import transferReducer from './transfer.slice';

export const store = configureStore({
  reducer: {
    flights: flightReducer,
    filters: filterReducer,
    transfers: transferReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type AppDispatcher = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
