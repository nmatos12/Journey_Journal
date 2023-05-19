import { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  {
    url: "/images/review1.png"
  },
  {
    url: "/images/review2.png"
  },
  {
    url: "/images/review3.png"
  },
  {
    url: "/images/review4.png"
  },
  {
    url: "/images/review5.png"
  },
  {
    url: "/images/review6.png"
  },
  {
    url: "/images/review7.png"
  },
  {
    url: "/images/review8.png"
  },
  {
    url: "/images/review9.png"
  },
  {
    url: "/images/review10.png"
  },
];

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
          <section id="center" className="column align-center">
            <h1> Welcome to Journey Journal! </h1>
            <h2> A place to start your vacation dreams! </h2>
            
            <div className="head-content row align-center">
              <img className="logo" src="./images/travel-journey-transparent.png" alt="Journey Journal" />
              {/* slideshow container */}
              <div className="slide-wrap">
                <SimpleImageSlider
                  width={896}
                  height={580}
                  images={images}
                  showBullets={true}
                  showNavs={true}
                  autoPlay={true}
                  autoPlayDelay={3.5}
                />
              </div>
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