import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./components/Home"; // Assuming you have a Home component

function App() {
  const [homepage, setHomepage] = useState("home");

  function renderPage() {
    switch (homepage) {
      case "home":
        return <Home />;
      // Add cases for other pages (login, registration, etc.) here
      default:
        return <Home />; // Default to the home page
    }
  }

  return (
    <div>
      <Navbar />
      <Header />
      {renderPage()}
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
