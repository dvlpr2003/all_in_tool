import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  Excel_Items: [], 
  downloadID:"",
  merge:false

};

const ExcelSlice = createSlice({
  name: 'excel',
  initialState,
  reducers: {


    setExcelItems: (state, action) => {

      state.Excel_Items = [...state.Excel_Items,...action.payload]; 
    },
    removeExcelItem: (state, action) => {
  
      state.Excel_Items = state.Excel_Items.filter(item => item.id !== action.payload);
      
    },
    setDonwloadID:(state,action)=>{
      state.downloadID = action.payload

    },
    MergeSet:(state,action)=>{
      state.merge = action.payload
    },

  
  },
});


export const {  setExcelItems,removeExcelItem,setDonwloadID,MergeSet } =ExcelSlice.actions;


export default ExcelSlice.reducer;