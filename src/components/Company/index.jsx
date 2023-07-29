import React, { useState } from 'react';
import { SliderData } from './SliderData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import './index.scss'

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length-1;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className='slider'>
      <div className='display-text'>
        <h1>Choose from one of our great clients for the awesome parts they provide</h1>
      </div>
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt='Car Company Image' className='image' />
            )}
            {index === current && (
              <img src={slide.image2} alt='Car Company Image' className='image' />
            )}
            {index === current && (
              <img src={slide.image3} alt='Car Company Image' className='image' />
            )}
            {index === current && (
              <img src={slide.image4} alt='Car Company Image' className='image' />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;