import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], 
  downloadID:""

};

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    // ListItems: (state, action) => {
    //   state.items = action.payload; // Sets the array to a new array
    // },

    setItems: (state, action) => {
      state.items = [...state.items,...action.payload]; // Sets the array to a new array
    },
    rotateItems: (state, action) => {
      
      const { id, rotate } = action.payload;

      const item = state.items.find(item => item.id === id);
   
      if (item) {
        item.rotate = rotate; 
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
    setDonwloadID:(state,action)=>{
      state.downloadID = action.payload

    }
  
  },
});

// Export actions
export const {  setItems,rotateItems,removeItem,ListItems,setDonwloadID } = itemsSlice.actions;

// Export the reducer to be included in the store
export default itemsSlice.reducer;