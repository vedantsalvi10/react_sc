import React from "react";

export function HandleEvent(){
  const handleClick = (e)=>{
    console.log("clicked!")
 }
  return(
   
    // text will be visible in console
    <button onClick={(e)=>handleClick(e)}>Click</button>
  );
}