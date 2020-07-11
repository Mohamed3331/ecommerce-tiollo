import React from 'react'
import {Link} from 'react-router-dom'

export default function Product({product}) {
    const {name,id,slug,images,price,quantity} = product    

    return (
    <>
        <section className="productlist">
            <div className="productlist-center">
                <div className="product-card">
                    {/* <div className="badge">Hot</div> */}
                    {quantity > 0 ? <div></div> : <div className="ribbon ribbon-top-left"><span>Out of Stock</span></div> }
                        <div className="product-tumb">
                         <Link to={`/${slug}/${id}`}> <img src={images[0]} alt=""/>  </Link>
                        </div>
                        <div className="product-details">
                            <h4>{name}</h4>
                            <div className="product-bottom-details">
                                <div className="product-price"><small>E£ { price + 30}</small>E£ { price}</div>
                                <div className="product-links">
                                </div>
                            </div>
                        </div>
                </div>  
            </div> 
        </section>
    </>
    )
}
