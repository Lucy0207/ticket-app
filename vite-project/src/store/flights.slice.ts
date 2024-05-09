import {  createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
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
     selected: string[],
     filter: string
 
   
}
type SelectAllPayload = string[];


const initialState: FlightList = {
    tickets: [],
    flightsPerPage: 5,
    selected: [] as SelectAllPayload,
    filter: 'cheap'
        
}



export const flightSlice = createSlice({
    name: 'flights',
    initialState,
    reducers: {
       showMoreTickets: (state) => {
            state.flightsPerPage += 5;
        },
        addToSelect: (state, action: PayloadAction<string>) => {
            state.selected.push(action.payload)
        },
        removeFromSelect: (state, action: PayloadAction<string>) => {
            state.selected = state.selected.filter((item) => item !== action.payload)
        },
        selectAll: (state, action: PayloadAction<SelectAllPayload>) => {
            state.selected = action.payload;
        },
        unselectAll: (state) => {
            state.selected = []
        },
        setFilter: (state, action: PayloadAction<string>) => {
            state.filter = action.payload
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