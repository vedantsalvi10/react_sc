import React from 'react';
import { useState,useEffect } from 'react';
import './App.css';

function App() {
  const [count,setCount] = useState(0)
  useEffect(()=>{
  console.log(count)
       
       const timer = setInterval(()=>{
        setCount(prev=>prev+1)
       },1000)
       
       return clearInterval(timer);
  },[count])
  
  return (
    <>
      <h1>{count}</h1>
      <button onClick={()=>setCount(prev => prev+1)}>Increment</button>
      
    </>
  );
}

export default App;
