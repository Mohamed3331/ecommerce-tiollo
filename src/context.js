import React, { Component } from 'react'
import Client from "./Contentful";
import app from './firebase'
import * as firebase from 'firebase/app'
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import { createClient } from "contentful-management";

const ProductContext = React.createContext()

class ProductProvider extends Component {
  userData;

  state = {
    products: [],
    sortedProducts: [],
    featuredProducts: [],
    loading: true,
    cart: [],
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
    signedIn: false,
    subTotal: 0,
    shipping: 0,
    total: 0,
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
    this.syncStorage()
    this.getTotals()
    this.getData();
    this.authWithFacebook()
       
    // this.updateEntry()
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('user', JSON.stringify(nextState));
     
  }

  syncStorage() {
     this.userData = JSON.parse(localStorage.getItem('user'));
    // localStorage.clear()
    if (localStorage.getItem('user')) {
      this.setState({ products: [...this.userData.products], cart: [...this.userData.cart] } )
      
    } else {
      this.setState({ cart: [] })
    }
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
        
      this.setState({
        products: products,
        sortedProducts: products,
      });

    } catch (e) {
    console.log(e);
   }
  };
  
  // updateEntry = async () => {
  //   const client = createClient({
  //   accessToken: 'CFPAT-p_770xD2aZiFwQW9DLRI-4w_8jr0C2dA504-ISPLcxs'
  //   })

  //   await client.getSpace('7zqu7ohvhyp1')
  //   .then((space) => space.getEntry('3iKrdlkuwkfnDDeig4ZBn5'))
  //   .then((entry) => {
  //     entry.fields.quantity['en-US'] = 54
  //     return entry.update()
  //   })
  //   .then((entry) => console.log(`Entry ${entry.sys.id} updated.`))
  //   .catch(console.error)
  // }

  formatData(items) {
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);
      const count = 1
      const totalPrice = item.fields.price
      let product = { ...item.fields, images, id, count, totalPrice };
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
    let tempItem = this.state.cart.find(item => item.id === id);
    if (!tempItem) {
      tempItem = tempProducts.find(item => item.id === id);
      this.setState({ cart: [ tempItem, ...this.state.cart] })
    } 
  }

  incrementItem = id => {
    let tempProducts = [...this.state.cart];
    const cartItem = tempProducts.find(item => item.id === id);
    cartItem.count++
    cartItem.totalPrice = cartItem.count * cartItem.price;
    cartItem.totalPrice = parseFloat(cartItem.totalPrice.toFixed(2));
    this.setState({ cart: [...this.state.cart] });
    this.getTotals()
  };

  decrementItem = id => {
    let tempProducts = [...this.state.cart];
    const cartItem = tempProducts.find(item => item.id === id);
    if (cartItem.count <= 1) {

    } else {
    cartItem.count--
    cartItem.totalPrice = cartItem.count * cartItem.price
    cartItem.totalPrice = parseFloat(cartItem.totalPrice.toFixed(2));
    this.setState({ cart: [...this.state.cart] });
    }
    this.getTotals()
  };

  removeItem = id => {
    let tempCart = [...this.state.cart];
    tempCart = tempCart.filter(item => item.id !== id);
     this.setState({ cart: [...tempCart]},
      () => {
        this.getTotals();
        this.syncStorage();
      },
      window.location.reload()
    );
  }

  getTotals () {
    let subTotal = 0;
    this.userData.cart.forEach(item => { subTotal += item.totalPrice })
    subTotal = parseFloat(subTotal.toFixed(2));
    let shipping = 11;
    shipping = parseFloat(shipping.toFixed(2));
    let total = subTotal + shipping;
    total = parseFloat(total.toFixed(2));
    this.setState(() => {
      return { subTotal: subTotal, shipping: shipping, total: total }
    });
  }

  render() {
    
    return (
      <>
        <ProductContext.Provider value={{...this.state ,removeItem: this.removeItem, decrementItem: this.decrementItem, incrementItem: this.incrementItem, authSignOut: this.authSignOut ,authWithFacebook:this.authWithFacebook, getCardItem:this.getCardItem, getProducts:this.getProducts, getProduct:this.getProduct}}>
          {this.props.children}
        </ProductContext.Provider>

        {/* {this.state.signedIn ? (
          <div>signed in</div>
        ) : (
          <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
        ) } */}
      </>
    );
  }
}

export {ProductProvider, ProductContext}





