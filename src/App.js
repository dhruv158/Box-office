
import './App.css';
import React from 'react';
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navs from './components/Navs';
import Home from './pages/Home';
import Starred from './pages/Starred';


function App() {
  return (
    <><div>   <Navs /></div>
      
      <Routes>
        <Route exact={true} path="/" element={<Home/>}></Route>
        <Route path="/starred" element={<Starred/>}></Route>
       
      </Routes>
    </>
    
  );
}

export default App;
