
import './App.css';
import { Home } from './components/Home';
import {About} from './components/About';
import {BrowserRouter as Router, Link, Route, Routes, Outlet} from 'react-router-dom'
const Layout=()=>{
  return(
    <>
     <nav>
       <ul>
          <li> <Link to="/home">Home</Link></li>
          <li> <Link to="/about">About</Link></li>
     
       </ul>
     </nav>
     <Outlet />
     </>
  );
}
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path="/home" element={<Home />} /> 
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </Router>
    
    </>
  );
}

export default App;
