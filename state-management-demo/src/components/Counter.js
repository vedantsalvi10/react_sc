import React,{useReducer} from "react"

const Count=(state,action)=>{
  switch (action.type) {
    case "increament":
      return {count: state.count + 1}
      break;
    case "decreament":
      return{count: state.count - 1}
      break;
    default:
      return state
      break;
  }
}

export const Counter = ()=>{
  const initialState = {count: 1}
  const [state,dispatch] = useReducer(Count,initialState)
  return(
    <>
    <button onClick={()=>(dispatch({ type: "increament" }))}>+</button>
      <p>{state.count}</p>
      <button onClick={()=>(dispatch({ type: "decreament" }))}>-</button>
      
    </>
  )
}
