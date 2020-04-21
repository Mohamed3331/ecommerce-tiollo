import React from 'react'
import {Link} from 'react-router-dom'

export default function Product({product}) {
    const {name,id,slug,images,price} = product    

    return (
    <>
        <section className="productlist">
            <div className="productlist-center">
                <div className="product-card">
                    <div className="badge">Hot</div>
                        <div className="product-tumb">
                         <Link to={`/${slug}/${id}`}> <img src={images[0]} alt=""/>  </Link>
                        </div>
                        <div className="product-details">
                            <h4><a href="">{name}</a></h4>
                            <div className="product-bottom-details">
                                <div className="product-price"><small>$96.00</small>${price}</div>
                                <div className="product-links">
                                    <a href=""><i className="fa fa-heart"></i></a>
                                    <a href=""><i className="fa fa-shopping-cart"></i></a>
                                </div>
                            </div>
                        </div>
                </div>  
                  
            </div> 
        </section>
    </>
    )
}

{/* <Link to={`/rooms/${slug}`} className="btn-primary room-link">Features</Link> */}