import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pdf_Items: [], 
  downloadID:"",
  merge:false

};

const pdf_to_pptx_Slice = createSlice({
  name: 'pdf_to_pptx',
  initialState,
  reducers: {


    setFromPPTXItems: (state, action) => {

      state.pdf_Items = [...state.pdf_Items,...action.payload]; 
    },
    removeFromPPTXItem: (state, action) => {
  
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


export const {  setFromPPTXItems,removeFromPPTXItem,setDonwloadID,MergeSet } =pdf_to_pptx_Slice.actions;


export default pdf_to_pptx_Slice.reducer;