import React from 'react';
import './App.css';
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import Home from './Home';
import Register from './Register';
import Shotshead from './Shotshead';
import Friendhead from './Friendhead';
import Markethead from './Markethead';




function App() {
  return (
  
    <div className="App">
      
     
    
      
     <Router>
     
     
      <Routes>
      <Route path='/' exact={true} element={<LoginPage/>}></Route>
      <Route path='/Home' element={<Home/>}></Route>
      <Route path='/Register' element ={<Register/>}></Route>
      <Route path='/Shotshead' element={<Shotshead/>}></Route>
      <Route path='/Friendhead' element={<Friendhead/>}></Route>
      <Route path='/Markethead' element={<Markethead/>}></Route>
      
      
      
      </Routes>
      </Router>
    </div>
   
  );
}

export default App;