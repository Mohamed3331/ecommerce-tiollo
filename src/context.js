import React, { Component } from 'react'
import Client from "./Contentful";

const ProductContext = React.createContext()

class ProductProvider extends Component {
  state = {
    products: [],
    sortedProducts: [],
    featuredProducts: [],
    loading: true,
    type: "all",
    quantity: 1
  };

  getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: "tiolloEcommerce"
      });

      let products = this.formatData(response.items);
      // let featuredRooms = rooms.filter(room => room.featured === true);

      this.setState({
        products: products,
        sortedProducts: products,
      });

    } catch (e) {
      console.log(e);
    }
  };

  componentDidMount() {
    this.getData();
  }

  formatData(items) {
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);

      let product = { ...item.fields, images, id };
      return product;
    });
    return tempItems;
  }

  getProducts = slug => {
    let tempProducts = [...this.state.products];
    let products = tempProducts.filter(product => product.slug === slug);
    return products;
  };

  getProduct = slug => {
    let tempProducts = [...this.state.products];
    const product = tempProducts.find(product => product.slug === slug);
    return product;
  };

  render() {
    return (
      <ProductContext.Provider value={{...this.state, getProducts:this.getProducts, getProduct:this.getProduct}}>
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

export {ProductProvider, ProductContext}