import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchSmallData, fetchLargeData } from '../../services/api';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const fetchSmallDataAsync = createAsyncThunk(
  'table/fetchSmallData',
  async (rows = 32, { dispatch, rejectWithValue }) => {
    try {
      const response = await fetchSmallData(rows);
      if (response.status === undefined) {
        throw new Error('Request failed: Response status is undefined');
      }

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}: ${response.statusText}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error during data fetching:', error);
      return rejectWithValue(error.message);
    }
  }
);

export const fetchLargeDataAsync = createAsyncThunk(
  'table/fetchLargeData',
  async (rows = 1000, { dispatch, rejectWithValue }) => {
    try {


      const response = await fetchLargeData(rows);
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const tableSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSmallDataAsync.pending, (state) => {
        console.log('Fetching small data pending...');
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSmallDataAsync.fulfilled, (state, action) => {
        console.log('Fetching small data fulfilled:', action.payload);
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchSmallDataAsync.rejected, (state, action) => {
        console.log('Fetching small data rejected:', action.payload);
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchLargeDataAsync.pending, (state) => {
        console.log('Fetching large data pending...');
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLargeDataAsync.fulfilled, (state, action) => {
        console.log('Fetching large data fulfilled:', action.payload);
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchLargeDataAsync.rejected, (state, action) => {
        console.log('Fetching large data rejected:', action.payload);
        state.loading = false;
        state.error = action.payload;
      });
  },
});


export default tableSlice.reducer;
export const tableActions = tableSlice.actions;