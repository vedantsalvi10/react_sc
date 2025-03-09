import React from "react";
import { Link } from "react-router-dom";

export function About(){
   return(
    <>
     <h1>This is about page</h1>
     
     <Link to="/">Back to front page</Link>
    </>
   )
}