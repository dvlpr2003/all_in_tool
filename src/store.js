import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from './convert to pdf/jpeg to pdf/jpgtopdfSlicer';
import wordReducer from "./convert to pdf/word to pdf/wordtopdfSlicer"
const store = configureStore({
  reducer: {
    items: itemsReducer,
    word:wordReducer,
  },
});

export default store;