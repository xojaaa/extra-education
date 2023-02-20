import React from 'react';
import {Routes, Route } from 'react-router';
import Home from '../component/home';
import About from './../component/about';
import Test from './../component/test';
import Contact from './../component/contact';
import Navbars from '../component/navbar';


function App() {
    return ( 
        <>
        <Navbars/>
        
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='about' element={<About/>}/>
          <Route path='courses' element={<Test/>}/>
          <Route path='contact' element={<Contact/>}/>
        </Routes>
         
        </>
     );
}

export default App;