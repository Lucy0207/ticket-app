import {  createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface Flight {
    price: number,
    carrier: string,
    segments: [{
        origin: string,
        destination: string,
        date: string,
        duration: number,
        stops: string[]
    }
        
    ]
}

export interface FlightList {
    tickets: Flight[],
     flightsPerPage: number,
 
   
}
const initialState: FlightList = {
    tickets: [],
    flightsPerPage: 5,
        
}

export const flightSlice = createSlice({
    name: 'flights',
    initialState,
    reducers: {
       showMoreTickets: (state) => {
            state.flightsPerPage += 5;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getSearchId.fulfilled, (state, action) => {
            state.tickets = action.payload.tickets;
        })
    }
})

export const getSearchId = createAsyncThunk(
    'flights/getSearchId',
    async () => {
        const res = await axios.get("https://aviasales-test-api.kata.academy/search")
        // console.log(res.data)
        const {data} = await axios.get("https://aviasales-test-api.kata.academy/tickets", {
            params: {
                searchId: res.data.searchId
            }
        })
    
   console.log(data)
   return data;
    }
)

export default flightSlice.reducer;
export const  flightsAction = flightSlice.actions;