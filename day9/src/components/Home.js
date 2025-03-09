import React from "react";
import { Link } from "react-router-dom";

export function Home(){
   return(
    <>
     <h1>This is home page</h1>
     
     <Link to="/">Back to front page</Link>
    </>
   )
}