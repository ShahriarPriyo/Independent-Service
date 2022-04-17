import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import React, { Component } from 'react';
import Home from '../src/Pages/Home/Home';
import About from '../src/Pages/About/About';
import Blogs from './Pages/Blogs/Blogs';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>

    </div>
  );
}

export default App;
