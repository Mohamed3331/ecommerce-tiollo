import React, { useEffect } from "react";
import homepage from '../Images/RITAH.jpg'
import {FaFacebookF} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaPinterestP} from 'react-icons/fa'
import {IoIosArrowDown} from 'react-icons/io'
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
import Slider from './Slider'
import Aos from "aos"
import 'aos/dist/aos.css';
import image15 from '../Images/womeninshoes.jpg'

export default function Jumptron() {
  useEffect(() => {
    Aos.init({
      duration: 2000
    })
  }, [])

    return (
      <>
        <div className="imageHomepage WhiteNav">
          <img src={image15} alt="" />
          <div className="image-home-text">
            Explore <IoIosArrowDown className="image-home-text-icon" />{" "}
          </div>
        </div>

        <h1 className="jumptron-header-one">Stylish Islamic Fashion</h1>

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
          <a href="https://www.facebook.com">
            <div className="bombo">
              <FaFacebookF size={25} />
            </div>
          </a>
          <a href="https://www.instagram.com">
            <div className="bombo">
              <FaInstagram size={26} />
            </div>
          </a>
          <a href="https://www.pinterest.com">
            <div className="bombo">
              <FaPinterestP size={25} />
            </div>{" "}
          </a>
        </section>

    
        <JumptronLanding />
        <Slider/>
      </>
    );
}
