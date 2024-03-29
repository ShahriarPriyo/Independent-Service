import { Route, Routes } from 'react-router-dom';
import './demo.css';
import './App.css';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Notfound from './Components/NotFound/Notfound';
import ServiceList from './Components/ServiceList/ServiceList';
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';
import Checkout from './Components/Checkout/Checkout';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import Blogs from './Components/Blogs/Blogs';
import React from 'react';


function App() {
  return (
    <>
      <div className="page-wrapper">
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>}> </Route>
          <Route path="/services" element={<ServiceList></ServiceList>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/signup" element={<Signup></Signup>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/blogs" element={<Blogs></Blogs>}></Route>
          <Route path="/checkout" element={
            <RequireAuth>
              <Checkout></Checkout>
            </RequireAuth>
          }></Route>
          <Route path="*" element={<Notfound></Notfound>}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;