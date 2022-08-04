import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {addtocart} from'./slice'
function App() {
  const state= useSelector((state)=>state)
  const dispatch=useDispatch()
  const addproduct=()=>{
    dispatch(addtocart([{id:1,name:'aaa'}]))
  }
  console.log(state);
  return (
    <div>react
    <button onClick={()=>addproduct()}>addcart</button>

    </div>
  )
}

export default App