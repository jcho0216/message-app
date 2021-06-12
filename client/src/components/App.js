import { useState } from "react";
import Login from "./Login";
import Dashboard from '../components/Dashboard';
import useLocalStorage from "../hooks/useLocalStorage";
function App() {
  const [id, setId] = useLocalStorage('id');

  return (
    <>
      {id ? <Dashboard id={id} /> : <Login onIdSubmit={setId} />}
      
    </>
  );
}

export default App;
