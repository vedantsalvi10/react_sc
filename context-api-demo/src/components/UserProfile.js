 import React,{useContext} from "react";
 import {userContext} from "./UserContext.js";
export const UserProfile = ()=>{
  const user = useContext(userContext)

  if (!user) return <p>User not found.</p>;
  return(
    <div>
      <h1>{user.name}</h1>
      <h2>{user.email}</h2>
    </div>
  )
}