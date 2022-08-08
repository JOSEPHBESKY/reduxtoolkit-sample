import { configureStore } from "@reduxjs/toolkit";
import  cartslice  from "./slice";
import favslice from "./favslice"
export default configureStore({
    reducer:{
        cart:cartslice,
        fav:favslice
    }
})
