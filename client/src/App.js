import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';
// import logo from './logo.svg';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home"; // Assuming you have a Home component
import Login from './pages/Login';
import Register from './pages/Register';
import Contact from './pages/Contact';
import Ourstory from './pages/Ourstory';

function App() {
  const [user, setUser] = useState(null)
  useEffect(() => {
    axios.get('/auth/authenticated')
      .then((res) => {
        setUser(res.data.user)
      })
  }, [])
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home user={user} />} />
        <Route path='/login' element={!user ? <Login setUser={setUser} /> : <Navigate to='/' />} />
        <Route path='/signup' element={!user ? <Register setUser={setUser} /> : <Navigate to='/' />} />
        <Route path='/ourstory' element={<Ourstory user={user}/>} />
        <Route path='/contact' element={<Contact user={user} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;