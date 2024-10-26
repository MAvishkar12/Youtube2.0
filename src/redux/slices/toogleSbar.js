import { createSlice } from "@reduxjs/toolkit";

const toogleSbar=createSlice({
    name:"sidebar",
    initialState:{
        isMenuOpen:true,
    },
    reducers:{
        tooglebtn:(state)=>{
             state.isMenuOpen=!state.isMenuOpen
        }
    }

})

 export const {tooglebtn} =toogleSbar.actions
export default toogleSbar.reducer ;