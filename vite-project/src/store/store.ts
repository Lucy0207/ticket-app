import { configureStore } from "@reduxjs/toolkit";
import flightReducer from "./flights.slice";
import filterReducer from "./filter.slice";
import transferReducer from "./transfer.slice"

export const store = configureStore({
    reducer: {
        flights: flightReducer, 
        filters: filterReducer,
        transfers: transferReducer

    }
})

export type AppDispatcher = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;