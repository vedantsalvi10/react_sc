
import './App.css';
import { useState } from 'react';
import {HandleEvent} from './HandleEvent.js'
function App() {
  const [showMessage,setShowMessage] = useState(false)
  return (
    <>
    <button className='p-10' onClick={()=>setShowMessage(!showMessage)}>Show message</button>
    {showMessage && <p>Hello this message is a demo text</p>}
    <HandleEvent />
  </>

  );
}

export default App;
