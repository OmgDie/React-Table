import { createAsyncThunk } from '@reduxjs/toolkit';
import { tableActions } from '../redux/reducers/tableReducer'; 

const API_BASE_URL = 'http://www.filltext.com';

//Малый объем данных
export const fetchSmallData = createAsyncThunk(
  'table/fetchSmallData',
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const response = await fetch(`${API_BASE_URL}/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`);

      if (!response.ok) {
        throw new Error('Ошибка получения данных');
      }
      const data = await response.json();
      dispatch(tableActions.setData(data));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchLargeData = createAsyncThunk(
  'table/fetchLargeData',
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const response = await fetch(`${API_BASE_URL}/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`);

      if (!response.ok) {
        throw new Error('Ошибка получения данных');
      }
      const data = await response.json();
      dispatch(tableActions.setData(data));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

