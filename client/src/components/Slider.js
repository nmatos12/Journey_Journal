import React, { useState } from 'react';
import './Slider.css';

const ImageSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToNextSlide = () => {
    if (currentImageIndex === images.length - 1) {
      setCurrentImageIndex(0);
    } else {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const goToPrevSlide = () => {
    if (currentImageIndex === 0) {
      setCurrentImageIndex(images.length - 1);
    } else {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  return (
    <div className="slider-container">
      <div className="slider-wrapper">
        <div
          className="slide-image"
          style={{ backgroundImage: `url(${images[currentImageIndex].url})` }}
        >
          <p className="slide-caption">{images[currentImageIndex].caption}</p>
        </div>
      </div>
      <div className="pagination">
        <button onClick={goToPrevSlide}>Prev</button>
        <button onClick={goToNextSlide}>Next</button>
      </div>
    </div>
  );
};

export default ImageSlider;