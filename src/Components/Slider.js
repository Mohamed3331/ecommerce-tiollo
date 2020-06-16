import React from 'react'
import itemone from '../Images/facebookimage1.jpg'
import itemtwo from '../Images/facebookimage2.jpg'
import itemthree from '../Images/facebookimage3.jpg'
import itemfour from '../Images/facebookimage4.jpg'


export default function Slider() {
  return (
    <>
      <section className="image-footer-containerr">
        <div className="image-footer-item">
          <img src={itemone} alt="" />
        </div>
        <div className="image-footer-item">
          <img src={itemtwo} alt="" />
        </div>
        <div className="image-footer-item">
          <img src={itemthree} alt="" />
        </div>
        <div className="image-footer-item">
          <img src={itemfour} alt="" />
        </div>
      </section>
    </>
  );
}






