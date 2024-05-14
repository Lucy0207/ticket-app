import {  createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
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
     filteredTickets: Flight[]
}
 



const initialState: FlightList = {
    tickets: [],
    flightsPerPage: 5,
    filteredTickets: []
          
}



export const flightSlice = createSlice({
    name: 'flights',
    initialState,
    reducers: {
       showMoreTickets: (state) => {
            state.flightsPerPage += 5;
        },
        showTransferTickets: (state, action: PayloadAction<number>) => {
           const {tickets} = state;
           const transferCount = action.payload;
           if (transferCount === 4) {
            state.filteredTickets = [...state.tickets]
           }
           const transfers = tickets.filter(ticket => {
            const totalStops = ticket.segments.every(segment => segment.stops.length === transferCount);
        return totalStops;
           })
          state.filteredTickets = [...state.filteredTickets, ...transfers];
        },  
        removeTransferTickets: (state, action: PayloadAction<number>) => {
            const {filteredTickets} = state;
            const transferCountOut = action.payload;
            const transfersOut = filteredTickets.filter(ticket => {
            const totalStops = ticket.segments.every(segment => segment.stops.length !== transferCountOut);
        return totalStops;
           })
           state.filteredTickets = [...transfersOut]
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
       
        const {data} = await axios.get("https://aviasales-test-api.kata.academy/tickets", {
            params: {
                searchId: res.data.searchId
            }
        })
    

   return data;
    }
)

export default flightSlice.reducer;
export const  flightsAction = flightSlice.actions;