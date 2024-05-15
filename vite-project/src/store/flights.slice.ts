import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

export interface Flight {
  price: number;
  carrier: string;
  segments: [
    {
      origin: string;
      destination: string;
      date: string;
      duration: number;
      stops: string[];
    },
  ];
}

export interface FlightList {
  tickets: Flight[];
  flightsPerPage: number;
  filteredTickets: Flight[];
  status: 'init' | 'loading' | 'error' | 'success';
}

const initialState: FlightList = {
  tickets: [],
  flightsPerPage: 5,
  filteredTickets: [],
  status: 'init',
};

export const getSearchId = createAsyncThunk('flights/getSearchId', async () => {
  try {
    const res = await axios.get('https://aviasales-test-api.kata.academy/search');

    const { data } = await axios.get('https://aviasales-test-api.kata.academy/tickets', {
      params: {
        searchId: res.data.searchId,
      },
    });

    return data;
  } catch (e) {
    if (e instanceof AxiosError) {
      throw new Error(e.response?.data.message);
    }
  }
});

export const flightSlice = createSlice({
  name: 'flights',
  initialState,
  reducers: {
    showMoreTickets: (state) => {
      state.flightsPerPage += 5;
    },
    showTransferTickets: (state, action: PayloadAction<number>) => {
      const { tickets } = state;
      const transferCount = action.payload;
      if (transferCount === 4) {
        state.filteredTickets = [...state.tickets];
      }
      const transfers = tickets.filter((ticket) => {
        const totalStops = ticket.segments.every((segment) => segment.stops.length === transferCount);
        return totalStops;
      });
      state.filteredTickets = [...state.filteredTickets, ...transfers];
    },
    removeTransferTickets: (state, action: PayloadAction<number>) => {
      const { filteredTickets } = state;
      const transferCountOut = action.payload;
      const transfersOut = filteredTickets.filter((ticket) => {
        const totalStops = ticket.segments.every((segment) => segment.stops.length !== transferCountOut);
        return totalStops;
      });
      state.filteredTickets = [...transfersOut];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSearchId.fulfilled, (state, action) => {
        state.status = 'success';
        state.tickets = action.payload.tickets;
      })
      .addCase(getSearchId.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getSearchId.rejected, (state) => {
        state.status = 'error';
      });
  },
});

export default flightSlice.reducer;
export const flightsAction = flightSlice.actions;
