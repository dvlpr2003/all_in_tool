import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  PPT_Items: [], 
  downloadID:"",
  merge:false

};

const pptSlice = createSlice({
  name: 'ppt',
  initialState,
  reducers: {


    setPptItems: (state, action) => {

      state.PPT_Items = [...state.PPT_Items,...action.payload]; 
    },
    removePptItem: (state, action) => {
  
      state.PPT_Items = state.PPT_Items.filter(item => item.id !== action.payload);
      
    },
    setDonwloadID:(state,action)=>{
      state.downloadID = action.payload

    },
    MergeSet:(state,action)=>{
      state.merge = action.payload
    },

  
  },
});


export const {  setPptItems,removePptItem,setDonwloadID,MergeSet } =pptSlice.actions;


export default pptSlice.reducer;