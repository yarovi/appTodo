import logo from './logo.svg';
import './App.css';
import React,{useState} from "react";
import TodoApp from './components/todo';
import  { UserContext } from './components/context/UserContext';

function App() {
  const [value,setValue]= useState(false);
  return (
    <div className="App">
     <UserContext.Provider value ={[value,setValue]}>
        <TodoApp></TodoApp>
     </UserContext.Provider>
    </div>
  );
}

export default App;
