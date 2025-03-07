import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greetings from './components/greetings'
import Bottom from './components/Bottom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>
          Hello!
        </h1>
       <Greetings name="Vedant" message="Good evening it is nice to see you here."/>
      <Bottom />
      </div>
    </>
  )
}

export default App
