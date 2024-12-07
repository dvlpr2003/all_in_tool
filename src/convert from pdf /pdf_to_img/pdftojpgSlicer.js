import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pdf_Items: [], 
  downloadID:"",
  merge:false

};

const pdf_to_jpg_Slice = createSlice({
  name: 'pdf_to_jpg',
  initialState,
  reducers: {


    setFromJPGItems: (state, action) => {

      state.pdf_Items = [...state.pdf_Items,...action.payload]; 
    },
    removeFromJPGItem: (state, action) => {
  
      state.pdf_Items = state.pdf_Items.filter(item => item.id !== action.payload);
      
    },
    setDonwloadID:(state,action)=>{
      state.downloadID = action.payload

    },
    MergeSet:(state,action)=>{
      state.merge = action.payload
    },

  
  },
});


export const {  setFromJPGItems,removeFromJPGItem,setDonwloadID,MergeSet } =pdf_to_jpg_Slice.actions;


export default pdf_to_jpg_Slice.reducer;