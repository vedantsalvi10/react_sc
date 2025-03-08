import React, { useState } from "react";

function App() {
  const [items,setItems] = useState([])
  const addItem = (e)=>{
     e.preventDefault()
     setItems((items) => [...items,'mango','banana','apple','papaya'])
  }
  
  return (
    <>
    {/* button adds a list of items to the page  */}
    <button onClick={(e) =>addItem(e)}>show item</button>
    <div >
    {items.map((item,index)=> <h3 key={index}>{item}</h3>)}
    </div>
    </>
  );
}

export default App;
