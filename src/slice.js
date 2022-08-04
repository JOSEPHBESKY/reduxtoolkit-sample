import {createSlice} from '@reduxjs/toolkit'

export const cartslice=createSlice({
    name:'cart',
    initialState:{
        cartidems:[]
    },
    reducer:{
        addtocart:(state,action)=>{
            console.log(state,action);
        state.cartidems=action.payload
        }

    }
})

export const {addtocart}=cartslice.actions
export default cartslice.reducer