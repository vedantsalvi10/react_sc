import React from "react";

 export const Clock = ()=>{
  return(
    <>
    <div>
      <h2>It is {new Date().toLocaleTimeString()}</h2>
    </div>
    </>
  )
}