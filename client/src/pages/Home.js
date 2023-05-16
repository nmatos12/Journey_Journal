import { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const Home = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {

  }, []);

  if (props.user) {
    return (
      <>
        <div>
          <h2>Welcome, Journalist!</h2>
          <ul>
            {data.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="text-center">
          <h1 className="home-title mt-4 mb-3">Welcome to the Journey Journal App!</h1>
          <NavLink
            className="button m-2"
            to="/login"
            size="lg"
            style={{ width: "20%" }}
          >
            Login
          </NavLink>
          <NavLink
            className="button m-2"
            to="/sign-up"
            size="lg"
            style={{ width: "20%" }}
          >
            Sign Up
          </NavLink>
        </div>
      </>
    );
  }
}

export default Home;
