import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [text,setText] = useState('');
  const [email,setEmail] = useState('');
  const [ validate_email, setValidate_email] = useState(false);

  function handleEvent(e){
    e.preventDefault();
    if(!email.includes('@')){
      setValidate_email(true)
    }
    else{
      setValidate_email(false)
      console.log(`form submited successfully for ${text}`);
    }
  }
  return (
    <>
   <form onSubmit={(e)=>handleEvent(e)}>
    <input type='text' value={text} onChange={(e)=>setText(e.target.value)}/>
    <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
    <input type='submit' value= 'submit'/>
   </form>
   { validate_email && <p>Invalid email</p>}
   </>
  );
}

export default App;
