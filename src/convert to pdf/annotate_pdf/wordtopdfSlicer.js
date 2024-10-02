import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  WordItems: [], 
  downloadID:"",
  merge:false

};

const wordSlice = createSlice({
  name: 'word',
  initialState,
  reducers: {


    setWordItems: (state, action) => {

      state.WordItems = [...state.WordItems,...action.payload]; 
    },
    removeWordItem: (state, action) => {
  
      state.WordItems = state.WordItems.filter(item => item.id !== action.payload);
      
    },
    setDonwloadID:(state,action)=>{
      state.downloadID = action.payload

    },
    MergeSet:(state,action)=>{
      state.merge = action.payload
    },

  
  },
});


export const {  setWordItems,removeWordItem,setDonwloadID,MergeSet } =wordSlice.actions;


export default wordSlice.reducer;