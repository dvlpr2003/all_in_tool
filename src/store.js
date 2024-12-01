import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from './convert to pdf/jpeg to pdf/jpgtopdfSlicer';
import wordReducer from "./convert to pdf/word to pdf/wordtopdfSlicer"
import pptReducer from "./convert to pdf/PPT-to-PDF/ppttopdfSlicer"
const store = configureStore({
  reducer: {
    items: itemsReducer,
    word:wordReducer,
    ppt:pptReducer,
  },
});

export default store;