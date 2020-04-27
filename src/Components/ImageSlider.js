import React, { useState } from 'react'
import mansmiling from '../Images/man-smiling.jpeg'
import womenstanding from '../Images/sl_01__56689.jpg'
import elsahosk from '../Images/elsa-hosk-5k-2018.jpg'
import '../App.css'
import 'swiper/css/swiper.css'
import Swiper from 'react-id-swiper'

const HeroSliderConfigs = {
  containerClass: 'swiper-container ImageSlider',
  parallax: true,
  centeredSlides: true,
  grabCursor: true,
  loop: true,
  autoplay: {
        delay: 700,
        disableOnInteraction: false
      },
  speed: 2500,
  spaceBetween: 0,
  effect: 'slide'
};

const ImageSlider = () => {
  
  const [parallaxSwiper, setParallaxSwiper] = useState(null);
  const parallaxAmount = parallaxSwiper ? parallaxSwiper.width * 0.9 : 0;

  return (
      <Swiper {...HeroSliderConfigs} getSwiper={setParallaxSwiper}>
        <div className="hero-slide">
          <div className="slide-image" data-swiper-parallax={parallaxAmount} data-swiper-parallax-opacity="0.4">
            <img src={mansmiling} alt="image1"/>
          </div>
        </div>
        
        <div className="hero-slide">
          <div className="slide-image" data-swiper-parallax={parallaxAmount} data-swiper-parallax-opacity="0.4">
            <img src={womenstanding} alt="image2"></img>
          </div>
        </div>
        
        <div className="hero-slide">
          <div
            className="slide-image" data-swiper-parallax={parallaxAmount} data-swiper-parallax-opacity="0.4">
            <img src={elsahosk} alt="image3"></img>
          </div>
        </div>
      </Swiper>
  );
};

export default ImageSlider;






         