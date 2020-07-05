import React from 'react'
import image1 from '../Images/fuchsia.jpg'
import image2 from "../Images/selective-focus-photography.jpg";
import image3 from "../Images/neva-style.png";
import image4 from "../Images/fosetaa.jpg";
import image5 from "../Images/to-day-nakisli-tisort.jpg";

export default function Crousel() {

  return (
    <>
      <ul className="product-list-container-mobile">
        <span>Featured Products</span>

        <li>
          <img src={image1} alt="" />
          <div className="product-list-details-mobile">
            <div className="product-list-name-details-mobile"> Small Madness Body Bad </div>
            <div className="product-list-price-details-mobile">E£50.00</div>
          </div>
        </li>

        <li>
          <img src={image2} alt="" />
          <div className="product-list-details-mobile">
            <div className="product-list-name-details-mobile"> Small Madness Body Bad </div>
            <div className="product-list-price-details-mobile">E£40.00</div>
          </div>
        </li>

        <li>
          <img src={image3} alt="" />
          <div className="product-list-details-mobile">
            <div className="product-list-name-details-mobile"> Small Madness Body Bad </div>
            <div className="product-list-price-details-mobile">E£70.00</div>
          </div>
        </li>

        <li>
          <img src={image4} alt="" />
          <div className="product-list-details-mobile">
            <div className="product-list-name-details-mobile"> Small Madness Body Bad </div>
            <div className="product-list-price-details-mobile">E£35.00</div>
          </div>
        </li>

        <li>
          <img src={image5} alt="" />
          <div className="product-list-details-mobile">
            <div className="product-list-name-details-mobile"> Small Madness Body Bad </div>
            <div className="product-list-price-details-mobile">E£40.00</div>
          </div>
        </li>

      </ul>
    </>
  );
}



