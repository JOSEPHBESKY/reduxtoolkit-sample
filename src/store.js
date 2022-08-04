import { configureStore } from "@reduxjs/toolkit";
import  cartslice  from "./slice";
export default configureStore({
    reducer:{
        cart:cartslice,
    }
})