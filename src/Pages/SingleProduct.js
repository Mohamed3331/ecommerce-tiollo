import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {ProductContext} from '../context'
import image1 from '../Images/main.webp'
import { GoTag } from 'react-icons/go';
import { GoInfo } from 'react-icons/go';
import Navbar from '../Components/Navbar'
import Bar from '../Components/Bar'
import ProductContainer from '../Components/ProductContainer'

export default class SingleProduct extends Component {
    state = {
        id: this.props.match.params.id,
        isOpenFirst: true,
        isOpenSecond: true,
        isOpenThird: true,
    }

    static contextType = ProductContext

    render() {     
        const activePanel = {
            display: ''
        }

        const closedPanel = {
            display: 'none'
        }

        const panel1 = this.state.isOpenFirst === true ? closedPanel : activePanel
        const panel2 = this.state.isOpenSecond === true ? closedPanel : activePanel
        const panel3 = this.state.isOpenThird === true ? closedPanel : activePanel
    
        const { getProduct, getCardItem, cart} = this.context
        const product = getProduct(this.state.id)
        
        if (!product) {
            return ( 
                <div className="error">
                    Something went wrong
                </div>
            )
        }
        
        return (
            <>
                <Navbar NavWhite="WhiteNav"/>
                <Bar/>

                <section className="top-container">
                    <div className="container-image">
                        <img src={product.images[0]} alt=""/>
                        <img src={product.images[1] || product.images[0]} alt=""/>
                        <img src={product.images[2] || product.images[0]} alt=""/>
                        <img src={product.images[3] || product.images[0]} alt=""/>
                    </div>

                    <div className="container-information">
                        <div className="information-text"> {`OUTWEAR | ${product.name}`} </div>
                        <div className="product-break-line"></div>
                        <div className="product-price-number">{`$ ${product.price}`}</div>
                        <div className="product-text-size"> <GoTag className="gotag-logo" size={20}/> all sizes will be provided at the delivery </div>
                        <button className="myButton-cart" onClick={() => getCardItem(this.state.id)}> Add to cart </button>
                        <div className="accordion-container">
                            <button className="accordion" onClick={() => this.setState({isOpenFirst: !this.state.isOpenFirst}) }>Section 1</button>
                            <div className="panel"  style={panel1}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>

                            <button className="accordion" onClick={() => this.setState({isOpenSecond: !this.state.isOpenSecond}) }>Section 2</button>
                            <div className="panel" style={panel2}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>

                            <button className="accordion" onClick={() => this.setState({isOpenThird: !this.state.isOpenThird}) }>Section 3</button>
                            <div className="panel" style={panel3}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                    </div>
                   
                </section>      
           </>
        )
    }
}

