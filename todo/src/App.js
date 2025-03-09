
import './App.css';
import React from 'react';
import { useState } from 'react';

function App() {
  const [todos,SetTodos] = useState([])
  const [newTodo, setNewTodo] = useState('')
  const add = ()=>{
    if (newTodo){
      SetTodos([...todos,newTodo]);
      setNewTodo('')
    }
  }
  const remove = (i)=>{
     SetTodos((prevTodo)=>prevTodo.filter((_,index)=> index !== i))
  }
  return (
    <>
     
      {/* input */}
       <h1 style={{textAlign:"center",fontSize:"100px"}}>Todo</h1>
       <div className='div'>
       <input className='inputText' type='text' value={newTodo} onChange={(e)=> setNewTodo(e.target.value)} placeholder='Enter a new Todo'/>
       <button className='add' onClick={add}>Add</button>
      {/* todos */}
      
     </div>
     <div className='div'>
        <ul>
      {todos.map( (todo,index) =>( 
      <li className='todos' key ={index}><p className='todo'>{todo}</p>
      <button className='delete' onClick={()=>remove(index)}>Delete</button>
      </li>
      
      )
    )}
      </ul>
      </div>
    </>
  );
}

export default App;
