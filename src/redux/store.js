import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import tableReducer from './reducers/tableReducer';

// Настройка хранилища
const store = configureStore({
  reducer: {
    table: tableReducer,
  },
  middleware: [thunk],
});

export default store;



