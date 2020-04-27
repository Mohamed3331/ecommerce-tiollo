import React, { Component } from 'react'
import Client from "./Contentful";
import app from './firebase'
import * as firebase from 'firebase'
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

const ProductContext = React.createContext()

class ProductProvider extends Component {
  state = {
    products: [],
    sortedProducts: [],
    featuredProducts: [],
    loading: true,
    type: "all",
    cart: [],
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
    signedIn: false
  };

  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.FacebookAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount() {
    this.getData();
    this.authWithFacebook()
  }

  authWithFacebook = async () => {

    await firebase.auth().onAuthStateChanged((user) => {
      this.setState({signedIn: user})
    })
  }

  authSignOut() {
    firebase.auth().signOut()
  }

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

  getProduct = id => {
    let tempProducts = [...this.state.products];
    const product = tempProducts.find(product => product.id === id);
    return product;
  };

  getCardItem = id => {
    let tempProducts = [...this.state.products];
    const product = tempProducts.find(product => product.id === id);
    this.setState({ cart: [ product, ...this.state.cart] })
  }

  render() {

    return (
      <>
        <ProductContext.Provider value={{...this.state, authSignOut: this.authSignOut ,authWithFacebook:this.authWithFacebook, getCardItem:this.getCardItem, getProducts:this.getProducts, getProduct:this.getProduct}}>
          {this.props.children}
        </ProductContext.Provider>
      </>
    );
  }
}

export {ProductProvider, ProductContext}