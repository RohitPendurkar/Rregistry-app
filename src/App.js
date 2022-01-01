import React from 'react';
import { BrowserRouter, Route, Link, Routes } from "react-router-dom"
import Home from "./routes/Home"
import Registry from "./routes/Registry"
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
         <Route path="/registry" element= {<Registry />}/>
         <Route path="/" element= {<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
