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
            <div>
              <h1> Welcome to Journey Journal! </h1>
              <h2> A place to start your vacation dreams! </h2>
              <img className="logo" src="./images/travel-journey-transparent.png" alt="Journey Journal" />
              {/* slideshow container */}
              <div className="slideshow-container">
                {/* full-width slides and quotes */}
                <div className="mySlides">
                  <q> Journey Journal offers convenient trip planning with a one-stop solution for booking flights, hotels, and more. </q>
                </div>
                <div className="mySlides ">
                  <q> Get competitive pricing and access to the best deals for flights, hotels, and travel services. </q>
                </div>
                <div className="mySlides">
                  <q> Enjoy pesonalized recommendations based on your preferences and interests for a tailored travel experience. </q>
                </div>
                <div className="mySlides">
                  <q> Seamlessly integrate all your travel needs, including bookings, rentails, and local attractions, within our app. </q>
                </div>
                <div className="mySlides">
                  <q> Stay informed with real-time updates and 24/7 assistance for a stress-free and smooth travel experience </q>
                </div>
                {/* next and previous buttons */}
                <a className="prev" onclick="plusSlides(-1)">❮</a>
                <a className="next" onclick="plusSlides(1)">❯</a>
              </div>
              {/* dots/bullets/indicators */}
              <div className="dot-container">
                <span className="dot" onclick="currentSlide(1)" />
                <span className="dot" onclick="currentSlide(2)" />
                <span className="dot" onclick="currentSlide(3)" />
                <span className="dot" onclick="currentSlide(4)" />
                <span className="dot" onclick="currentSlide(5)" />
              </div>
            </div>
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


// javascript for home page that goes for the slideshow of quotes 

{/* <div>
  var slideIndex = 1;
  showSlides(slideIndex);
  function plusSlides(n) {'{'}
  showSlides(slideIndex += n);
  {'}'}
  function currentSlide(n) {'{'}
  showSlides(slideIndex = n);
  {'}'}
  function showSlides(n) {'{'}
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n &gt; slides.length) {'{'} slideIndex = 1 {'}'}
  if (n &lt; 1) {'{'} slideIndex = slides.length {'}'}
  for (i = 0; i &lt; slides.length; i++) {'{'}
  slides[i].style.display = "none";
  {'}'}
  for (i = 0; i &lt; dots.length; i++) {'{'}
  dots[i].className = dots[i].className.replace(" active", "");
  {'}'}
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  {'}'}
</div> */}