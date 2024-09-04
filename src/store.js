import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from './convert to pdf/jpeg to pdf/jpgtopdfSlicer';

const store = configureStore({
  reducer: {
    items: itemsReducer,
  },
});

export default store;