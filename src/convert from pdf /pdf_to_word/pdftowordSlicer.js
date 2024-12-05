import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pdf_Items: [], 
  downloadID:"",
  merge:false

};

const WORDSlice = createSlice({
  name: 'pdf_to_word',
  initialState,
  reducers: {


    setWORDItems: (state, action) => {

      state.pdf_Items = [...state.pdf_Items,...action.payload]; 
    },
    removeWORDItem: (state, action) => {
  
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


export const {  setWORDItems,removeWORDItem,setDonwloadID,MergeSet } =WORDSlice.actions;


export default WORDSlice.reducer;