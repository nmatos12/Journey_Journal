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
        <div className="container">
          <header>
            <div className="navbar">
              <a className="active" href="#"><i className="fa fa-fw fa-home" />Home</a>
              <a href="#ourstory">Our Story</a>
              <a href="#login">Login</a>
              <a href="#signup">Sign Up</a>
            </div>
          </header>
          <section id="center">
            <h4> Welcome to Journey Journal </h4>
            <h5> A place to start your vacation dreams </h5>
            <img className="logo" src="./images/travel-journey-transparent.png" alt="Journey Journal" />
            jalkdjfaldkjlfajdfasd
            adlfjkaldskjfasdljkf
            alksdjfalskdjfa'sd
            alskdfjalsdkjflaskdjf
            alkdfjalsdkjfasldkjfdslkjf
          </section>
          <section>
            <div className="scroll-container">
              <img src="./images/review1.png" alt="Review 1" />
              <img src="./images/review2.png" alt="Review 2" />
              <img src="./images/review3.png" alt="Review 3" />
              <img src="./images/review4.png" alt="Review 4" />
              <img src="./images/review5.png" alt="Review 5" />
              <img src="./images/review6.png" alt="Review 6" />
              <img src="./images/review7.png" alt="Review 7" />
              <img src="./images/review8.png" alt="Review 8" />
              <img src="./images/review9.png" alt="Review 9" />
              <img src="./images/review10.png" alt="Review 10" />
            </div>
          </section>
          <footer>
            <div className="icon-bar">
              <a href="#"><i className="fa fa-envelope" /></a>
              <a href="#"><i className="fa fa-facebook-square" aria-hidden="true" /></a>
              <a href="#"><i className="fa fa-twitter-square" aria-hidden="true" /></a>
              <a href="#"><i className="fa fa-instagram" aria-hidden="true" /></a>
              <a href="#"><i className="fa fa-youtube-square" aria-hidden="true" /></a>
              <a href="#"><i className="fa fa-linkedin-square" aria-hidden="true" /></a>
            </div>
          </footer>
        </div>
        {/* <div className="text-center">
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
        </div> */}
      </>
    );
  }
}

export default Home;
