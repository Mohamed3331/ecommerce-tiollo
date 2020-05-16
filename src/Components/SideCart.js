import React from 'react'
import image15 from '../Images/main.webp'


export default function SideCart({isOpen}) {

    return (
        <>
            <div className={"sidecart-container " + isOpen}>
            <header className="layout-header-summary-sidecart">
              <span>Shopping Cart</span>
              <a href="/cart">Edit Cart</a>
            </header>

            <section className="layout-section-body-sidecart">
                  <div className="layout-section-item-sidecart">
                    <div><img src={image15} width="20%" height="20%" alt=""/></div>
                    <span className="span-text-sidecart">dgfdsfds</span>
                    <span>£76</span>
                  </div>     
                <hr/>
                   <div className="layout-section-item-sidecart">
                    <div><img src={image15} width="20%" height="20%" alt=""/></div>
                    <span className="span-text-sidecart">dgfdsfds</span>
                    <span>£76</span>
                  </div>     
                <hr/>
                   <div className="layout-section-item-sidecart">
                    <div><img src={image15} width="20%" height="20%" alt=""/></div>
                    <span className="span-text-sidecart">dgfdsfds</span>
                    <span>£76</span>
                  </div>     
                <hr/>
                   <div className="layout-section-item-sidecart">
                    <div><img src={image15} width="20%" height="20%" alt=""/></div>
                    <span className="span-text-sidecart">dgfdsfds</span>
                    <span>£76</span>
                  </div>     
                <hr/>
                   <div className="layout-section-item-sidecart">
                    <div><img src={image15} width="20%" height="20%" alt=""/></div>
                    <span className="span-text-sidecart">dgfdsfds</span>
                    <span>£76</span>
                  </div>     
                <hr/>
                   <div className="layout-section-item-sidecart">
                    <div><img src={image15} width="20%" height="20%" alt=""/></div>
                    <span className="span-text-sidecart">dgfdsfds</span>
                    <span>£76</span>
                  </div>     
                <hr/>

              {/* <div className="layout-section-subtotal-item-sidecart">
                <div>Subtotal</div>
                <span>£545</span>
              </div>
              
              <div className="layout-section-total-item-sidecart">
                <div>Shipping</div>
                <span>£11</span>
              </div>

              <hr/>

              <div className="layout-section-total-item-sidecart">
                <div>Total</div>
                <span>£54</span>
              </div> */}

            </section>
        </div>
        </>
    )
}
