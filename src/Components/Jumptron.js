import React, { useEffect } from "react";
import {FaFacebookF} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaPinterestP} from 'react-icons/fa'
import {IoIosArrowDown} from 'react-icons/io'
import { FaTelegramPlane } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { TiArrowSync } from "react-icons/ti";
import image1 from '../Images/bella-elbise.jpg'
import image2 from '../Images/cizgili-miya.jpg'
import image3 from '../Images/molly-marine.png'
import image4 from '../Images/fosetaa.jpg'
import image5 from '../Images/fuchsia.jpg'
import image6 from '../Images/klasik.jpg'
import image7 from '../Images/leopar-desenli.jpg'
import image8 from '../Images/neva-style.png'
import image9 from '../Images/to-day-nakisli-tisort.jpg'
import JumptronLanding from './JumptronLanding'
import Aos from "aos"
import 'aos/dist/aos.css';
import homepage from '../Images/womeninshoes.jpg'

export default function Jumptron() {
  useEffect(() => {
    Aos.init({
      duration: 2000
    })
  }, [])

    return (
      <>
        <div className="imageHomepage WhiteNav">
          <img src={homepage} alt="" />
          <div className="image-home-text">
            Explore <IoIosArrowDown className="image-home-text-icon" />{" "}
          </div>
        </div>

        <section className="section-intro-information-bar">
          <h1 className="jumptron-header-one">Tiollo House | Stylish Islamic Fashion</h1>
          <h1 className="jumptron-header-two">Official site of Tiollo House Fashion designs.</h1>
          <section className="section-information-bar">

            <div className="div-information-bar">
              <h3> <FaTelegramPlane size={17}/> WORLDWIDE DELIVERY</h3>
            </div>

            <div className="div-information-bar">
              <h3> <FaLock size={17}/> SECURE PAYMENTS</h3>
            </div>

            <div className="div-information-bar">
              <h3> <TiArrowSync size={20}/> SIMPLE RETURNS</h3>
            </div>
          </section>

        </section>

        <div className="container-above">
          <section className="image-container">
            <div data-aos="fade-right" className="image-item">
              <img src={image1} alt="" />
              <p className="caption">Hijab Dresses</p>
            </div>

            <div data-aos="fade-up" className="image-item">
              <img src={image2} alt="" />
              <p className="caption">Patterned Islamic Dress</p>
            </div>

            <div data-aos="fade-left" className="image-item">
              <img src={image5} alt="" />
              <p className="caption">Hijab Trench Coat</p>
            </div>

            <div data-aos="fade-right" className="image-item">
              <img src={image4} alt="" />
              <p className="caption">Fur Coats</p>
            </div>

            <div data-aos="fade-up" className="image-item">
              <img src={image3} alt="" />
              <p className="caption">Accessories</p>
            </div>

            <div data-aos="fade-left" className="image-item">
              <img src={image6} alt="" />
              <p className="caption">Straight Islamic Dress</p>
            </div>

            <div data-aos="fade-right" className="image-item">
              <img src={image7} alt="" />
              <p className="caption">Hijab Kimono</p>
            </div>

            <div data-aos="fade-up" className="image-item">
              <img src={image8} alt="" />
              <p className="caption">Hijab Cardigan</p>
            </div>

            <div data-aos="fade-left" className="image-item">
              <img src={image9} alt="" />
              <p className="caption">Hijab T-Shirt</p>
            </div>
          </section>
        </div>

        <section className="bombo-container">
          <a href="https://www.facebook.com/Tiollohouse/">
            <div className="bombo">
              <FaFacebookF size={20} />
            </div>
          </a>
          <a href="https://www.instagram.com/tiollohouse/">
            <div className="bombo">
              <FaInstagram size={22} />
            </div>
          </a>
          <a href="https://www.pinterest.com">
            <div className="bombo">
              <FaPinterestP size={20} />
            </div>{" "}
          </a>
        </section>

        <JumptronLanding />
      </>
    );
}
