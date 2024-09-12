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

      state.WordItems = [...state.WordItems,...action.payload]; // Sets the array to a new array
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

// Export actions
export const {  setWordItems,removeWordItem,setDonwloadID,MergeSet } =wordSlice.actions;

// Export the reducer to be included in the store
export default wordSlice.reducer;