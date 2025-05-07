import logo from './logo.svg';
import './App.css';
import {useContext} from "react"
import {UserDashboard} from "./components/UserDashboard.js"
import { userContext } from "./components/UserContext.js";
function App() {
  const user = {name: "Vedant", email:"vedantsalvi10@gmail.com"}
  return (
    <userContext.Provider value = {user}>
      <UserDashboard />
    </userContext.Provider>
  );
}

export default App;
