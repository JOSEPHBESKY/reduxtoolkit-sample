import {createSlice} from '@reduxjs/toolkit';

export const favslice=createSlice({
    name:'fav',
    initialState:{
        favidems:[]
    },
    reducer:{
        addtocart:(state,action)=>{
            console.log(state,action);
        state.favidems=action.payload
        }

    }
})

export const {addtofav}=favslice.actions
export default favslice.reducer
