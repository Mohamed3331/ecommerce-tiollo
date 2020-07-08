import React, { Component } from 'react'
// import {Link} from 'react-router-dom'
import {ProductContext} from '../context'
import Navbar from '../Components/Navbar'
import SizesFilter from '../Components/SizesFilter'

export default class SingleProduct extends Component {
    state = {
        id: this.props.match.params.id,
        isOpenFirst: true,
        isOpenSecond: true,
        isOpenThird: true,
        added: false,
        sizes: []
    }

    static contextType = ProductContext

    componentDidMount() {
        
    }

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
      
        const { getProduct, getCardItem } = this.context;
        const product = getProduct(this.state.id)
        
        if (!product) {
            return ( 
                <div className="error">
                    Something went wrongg
                </div>
            )
        }
        
        return (
            <>
                <Navbar NavWhite="WhiteNav"/>

                <section className="top-container">
                    <div className="container-image">
                        <img src={product.images[0]} alt=""/>
                        <img src={product.images[1] || product.images[0]} alt=""/>
                        <img src={product.images[2] || null} alt=""/>
                        <img src={product.images[3] || null} alt=""/>
                    </div>

                    <div className="container-information">
                        <div className="information-text"> {`OUTWEAR | ${product.name}`} </div>
                        <div className="information-text-break-line"><hr/></div>
                        <div className="product-price-number">{`E£ ${product.price}`}</div>
                        <div className="product-text-size"> <SizesFilter id={this.state.id}/> </div>
                        <button className="myButton-cart" onClick={() => {getCardItem(this.state.id); this.setState({added: true}); } }> { this.state.added === false ? 'Add to Cart' : 'Added'} </button>
                        
                          <div className="accordion-container">
                            <button className="accordion-buttonn" onClick={() => this.setState({isOpenFirst: !this.state.isOpenFirst}) }>Information</button>
                            <div className="panel"  style={panel1}>
                            <p>{product.information}</p>
                            <p>One Size: Length: 119cm, Across Width (Bust): 54cm, Waist: 42", Sleeve: 11cm.</p>
                            <p>40% Cotton, 40% Viscose, 20% Polyester.</p>
                            </div>

                            <button className="accordion-buttonn" onClick={() => this.setState({isOpenSecond: !this.state.isOpenSecond}) }>Size & Fit</button>
                            <div className="panel" style={panel2}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>

                            <button className="accordion-buttonn" onClick={() => this.setState({isOpenThird: !this.state.isOpenThird}) }>Delivery & Returns</button>
                            <div className="panel" style={panel3}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div> 
                    </div>

                </section>      


                <section className="top-container-mobile">
                    <img src={product.images[0]} alt=""/>
                    <ul className="top-container-mobile-list">
                        {product.images.map((item,index) => <li key={index}> <img src={item} alt=""/> </li>)}
                    </ul>

                    <div className="top-container-details-mobile">
                        <h1>{product.name}</h1>
                        <span>E£{product.price}</span>
                        <SizesFilter id={this.state.id}/>
                        <button onClick={() => {getCardItem(this.state.id); this.setState({added: true}); } }> { this.state.added === false ? 'Add to Cart' : 'Added' } </button>
                        <div className="top-container-description-mobile"> {product.information}</div>
                    </div>

                            <div className="accordion-container">
                            <button className="accordion-buttonn" onClick={() => this.setState({isOpenFirst: !this.state.isOpenFirst}) }>Information</button>
                            <div className="panel"  style={panel1}>
                            <p>One Size: Length: 119cm, Across Width (Bust): 54cm, Waist: 42", Sleeve: 11cm.</p>
                            <p>40% Cotton, 40% Viscose, 20% Polyester.</p>
                            </div>

                            <button className="accordion-buttonn" onClick={() => this.setState({isOpenSecond: !this.state.isOpenSecond}) }>Size & Fit</button>
                            <div className="panel" style={panel2}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>

                            <button className="accordion-buttonn" onClick={() => this.setState({isOpenThird: !this.state.isOpenThird}) }>Delivery & Returns</button>
                            <div className="panel" style={panel3}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div> 

                </section>


           </>
        )
    }
}

