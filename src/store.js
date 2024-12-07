import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from './convert to pdf/jpeg to pdf/jpgtopdfSlicer';
import wordReducer from "./convert to pdf/word to pdf/wordtopdfSlicer"
import pptReducer from "./convert to pdf/PPT-to-PDF/ppttopdfSlicer"
import excelReducer from "./convert to pdf/excel_to_pdf/exceltopdfSlicer"
import pdf_to_pptxReducer from "./convert from pdf /pdf_to_pptx/pdftopptxSlicer"
import pdf_to_wordReducer from "./convert from pdf /pdf_to_word/pdftowordSlicer"
import pdf_to_jpgReducer from "./convert from pdf /pdf_to_img/pdftojpgSlicer"
const store = configureStore({
  reducer: {
    items: itemsReducer,
    word:wordReducer,
    ppt:pptReducer,
    excel:excelReducer,
    pdf_to_pptx:pdf_to_pptxReducer,
    pdf_to_word:pdf_to_wordReducer,
    pdf_to_jpg:pdf_to_jpgReducer,

    

  },
});

export default store;