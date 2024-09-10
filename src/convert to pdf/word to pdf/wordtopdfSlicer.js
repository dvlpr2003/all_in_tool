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
        console.log(action.payload)
      state.WordItems = [...state.WordItems,...action.payload]; // Sets the array to a new array
    },
    removeWordItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
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
export const {  setWordItems,removeItem,setDonwloadID,MergeSet } =wordSlice.actions;

// Export the reducer to be included in the store
export default wordSlice.reducer;