import { configureStore } from "@reduxjs/toolkit";
import toogleSbar from "./slices/toogleSbar"


const store=configureStore({
    reducer:{
        sideBar:toogleSbar
    },
    devTools:true
    
})

export default store;