
import './App.css';
import React from 'react';
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navs from './components/Navs';
import Home from './pages/Home';
import Starred from './pages/Starred';



function App() {
  
  return (
    
      <div>
    
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/starred" element={<Starred/>}></Route>
       
      </Routes>
     
    </div>
  );
}

export default App;
