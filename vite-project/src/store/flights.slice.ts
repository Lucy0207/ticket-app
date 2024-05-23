import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getSearchId } from '../services/searchService';

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
      } else {
        const transfers = tickets.filter((ticket) => {
          const totalStops = ticket.segments.every((segment) => segment.stops.length === transferCount);
          return totalStops;
        });
        state.filteredTickets = [...transfers];
      }
    },
    removeTransferTickets: (state, action: PayloadAction<number>) => {
      const { filteredTickets } = state;
      const transferCountOut = action.payload;
      if (transferCountOut === 4) {
        state.filteredTickets = [];
      } else {
        const transfersOut = filteredTickets.filter((ticket) => {
          const totalStops = ticket.segments.every((segment) => segment.stops.length !== transferCountOut);
          return totalStops;
        });
        state.filteredTickets = [...transfersOut];
      }
    },
    addMoreTickets: (state, action: PayloadAction<Flight[]>) => {
      state.tickets = [...state.tickets, ...action.payload];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSearchId.fulfilled, (state) => {
        state.status = 'success';
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
