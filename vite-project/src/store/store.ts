import { configureStore } from "@reduxjs/toolkit";
import flightReducer from "./flights.slice"

export const store = configureStore({
    reducer: {
        flights: flightReducer
    }
})

export type AppDispatcher = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;