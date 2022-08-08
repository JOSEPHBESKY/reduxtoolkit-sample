import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {addtocart} from'./slice'
import {addtofav} from './favslice
function App() {
  const state= useSelector((state)=>state)
  const dispatch=useDispatch()
  const addproduct=()=>{
    dispatch(addtocart([{id:1,name:'aaa'}]))
  }
  const addtofavrout=()=>{
    dispatch(addtofav({name:"jose"}))}
  console.log(state);
  return (
    <div>react
    <button onClick={()=>addproduct()}>addcart</button>
    <button onClick={()=>addtofavrout()}>addfav</button>

    </div>
  )
}

export default App
