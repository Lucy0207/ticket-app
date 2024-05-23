import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { flightsAction } from '../store/flights.slice';

export const getSearchId = createAsyncThunk('flights/getSearchId', async (_, { dispatch, rejectWithValue }) => {
  try {
    const res = await axios.get('https://aviasales-test-api.kata.academy/search');
    const searchId = res.data.searchId;

    const fetchTickets = async (searchId: string) => {
      try {
        const { data } = await axios.get('https://aviasales-test-api.kata.academy/tickets', {
          params: { searchId },
        });

        dispatch(flightsAction.addMoreTickets(data.tickets));

        if (!data.stop) {
          await fetchTickets(searchId);
        }
      } catch (e: any) {
        if (e instanceof AxiosError && e.response?.status === 500) {
          await fetchTickets(searchId);
        } else {
          throw e;
        }
      }
    };

    await fetchTickets(searchId);
    return;
  } catch (e: any) {
    if (e instanceof AxiosError) {
      return rejectWithValue(e.response?.data.message);
    }
    return rejectWithValue('An error occurred');
  }
});
