import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {ProductContext} from '../context'

import Navbar from '../Components/Navbar'
import Bar from '../Components/Bar'
import ProductContainer from '../Components/ProductContainer'
import Product from '../Components/Product'

export default class Products extends Component {
    state = {
        slug: this.props.match.params.slug,
    }
    

    static contextType = ProductContext

    render() {

        const {getProducts} = this.context
        let products = getProducts(this.state.slug)
        
        if (!products) {
            return ( 
                <div className="error">
                    Something went wrong
                </div>
            )
        }

        return (
            <div>
                <Navbar NavWhite="WhiteNav"/>
                <Bar/>
                <ProductContainer/>
                <section className="productlist">
                     <div className="productlist-center">
                        {products.map(product => {
                            return <Product key={product.id} product={product}/>
                        })}
                        </div>
                </section>
            </div>
        )
    }
}


