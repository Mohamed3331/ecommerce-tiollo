import React, { Component } from 'react'

const ProductContext = React.createContext()

class ProductProvider extends Component {

    render() {
        return (

            <ProductContext.Provider>
               {this.props.children}
            </ProductContext.Provider>
        );
    }
}

export {ProductProvider, ProductContext}