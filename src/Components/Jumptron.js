import React from 'react'
import homepage from '../Images/RITAH.jpg'

import image1 from '../Images/bella-elbise.jpg'
import image2 from '../Images/cizgili-miya.jpg'
import image3 from '../Images/dort-dugmel.jpg'
import image4 from '../Images/fosetaa.jpg'
import image5 from '../Images/fuchsia.jpg'
import image6 from '../Images/klasik.jpg'
import image7 from '../Images/leopar-desenli.jpg'
import image8 from '../Images/neva-style.png'
import image9 from '../Images/turkishblouse.jpg'

export default function Jumptron() {
    return (
        <>
            <div class="image WhiteNav"><img src={homepage} alt=""/></div>
    
            <h4 id="header-four">We Deliver on Time. All Sizes are avalaible at delivery</h4>
            <h3 id="header-three">15% discount on first delivery</h3>
            <h2 id="header-two">Explore Our products</h2>
            <h1 id="header-one">Stylish Islamic Fashion</h1>

            <div id="container-above">
             <section class="image-container">

          <div class="image-item">
            <img src={image1} alt=""/>
            <p class="caption">text here</p>
          </div>

          <div class="image-item">
            <img src={image2} alt=""/>
            <p class="caption">text here</p>
          </div>

          <div class="image-item">
            <img src={image3} alt=""/>
            <p class="caption">text here</p>
          </div>

          <div class="image-item">
            <img src={image4} alt=""/>
            <p class="caption">text here</p>
          </div>

          <div class="image-item">
            <img src={image5} alt=""/>
            <p class="caption">text here</p>
          </div>

          <div class="image-item">
            <img src={image6} alt=""/>
            <p class="caption">text here</p>
          </div>

          <div class="image-item">
            <img src={image7} alt=""/>
            <p class="caption">text here</p>
          </div>

          <div class="image-item">
            <img src={image8} alt=""/>
            <p class="caption">text here</p>
          </div>

          <div class="image-item">
            <img src={image9} alt=""/>
            <p class="caption">text here</p>
          </div>

        </section>
      </div>

       {/* <div class="jumpotron">
        <div>
          <span>FROM THE PEOPLE—CUSTOMER REVIEWS</span>
          
        </div>
      </div>  */}

      <div class="bombo">bombo</div>

        </>
    )
}
