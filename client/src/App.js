import React from "react";
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Home from "./Home";
import Todo from "./AddCrew";
import './App.css';
import Edit from "./Edit";

function App() {
  return (
    <BrowserRouter>
   <Routes>


<Route path="/" element = {<Home/>}/>
<Route path="/Todo" element = {<Todo/>}/>
<Route path="/edit" element = {<Edit/>}/>

   </Routes>


    </BrowserRouter>
  );
}

export default App;
