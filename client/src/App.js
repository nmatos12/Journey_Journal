import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';
// import logo from './logo.svg';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home"; // Assuming you have a Home component
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  const [user, setUser]=useState(null)
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
        <Route path='/' element={<Home user={user}/>}/>
        <Route path='/login' element={!user?<Login setUser={setUser}/>:<Navigate to='/'/>}/>
        <Route path='/sign-up' element={!user?<Register setUser={setUser}/>:<Navigate to='/'/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;



















// import logo from './logo.svg';
// import './App.css';
// import { Navbar } from "./components/Navbar";
// import { Footer } from "./components/Footer";
// import { Header } from "./components/Header";

// function App() {
//   return (
//     const [homepage, setHomepage] = useState("home");
//     function renderPage() {
//       switch (homepage) {
//         case "home":
//           return <Home/>
        
//         // add in button for login page and registration 
//       }
//     }
//   );
// }

// export default App;
