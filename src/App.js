import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import React, { Component } from 'react';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Blogs from './Pages/Blogs/Blogs';
import NotFound from './Shared/NotFound/NotFound';
import Login from './Pages/LoginSignup/Login/Login';
import Signup from './Pages/LoginSignup/Signup/Signup';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

    </div>
  );
}

export default App;
