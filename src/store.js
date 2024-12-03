import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from './convert to pdf/jpeg to pdf/jpgtopdfSlicer';
import wordReducer from "./convert to pdf/word to pdf/wordtopdfSlicer"
import pptReducer from "./convert to pdf/PPT-to-PDF/ppttopdfSlicer"
import excelReducer from "./convert to pdf/excel_to_pdf/exceltopdfSlicer"
import pdf_to_pptxReducer from "./convert from pdf /pdf_to_pptx/pdftopptxSlicer"
const store = configureStore({
  reducer: {
    items: itemsReducer,
    word:wordReducer,
    ppt:pptReducer,
    excel:excelReducer,
    pdf_to_pptx:pdf_to_pptxReducer,

    

  },
});

export default store;