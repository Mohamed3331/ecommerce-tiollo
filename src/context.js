import React, { Component } from 'react'
import Client from "./Contentful";
import { createClient } from "contentful-management";
import validator from "email-validator";
// import { sendEmail } from "./Backend/Email";


const ProductContext = React.createContext()

class ProductProvider extends Component {
  userData;

  state = {
    products: [],
    cart: [],
    maxPrice: 0,
    minPrice: 0,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
    signedIn: false,
    subTotal: 0,
    shipping: 0,
    total: 0,
    form: '',
    email: ''
  }

  componentDidMount() {
    this.syncStorage()
    this.getTotals()
    this.getData(); 
  }

  syncStorage() {
     localStorage.setItem('user', JSON.stringify(this.state));
     this.userData = JSON.parse(localStorage.getItem('user'));
    // localStorage.clear()
    if (localStorage.getItem('user')) {
      this.setState({ products: [...this.userData.products], cart: [...this.userData.cart] } )
      
    } else {
      this.setState({ cart: [] })
    }
  }

  getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: "tiolloEcommerce",
        order: "sys.createdAt"
      });

      let products = this.formatData(response.items);
      let maxPrice = Math.max(...products.map(item => item.price));
      let minPrice = Math.min(...products.map(item => item.price));
        
      this.setState({
        products: products,
        maxPrice: maxPrice,
        minPrice: minPrice
      });

    } catch (e) {
    console.log(e);
   }
  };
  
  updateEntry = async (id,count) => {
    const client = createClient({
    accessToken: process.env.REACT_APP_TOKEN_MANAGEMENT,
    })

    await client.getSpace(process.env.REACT_APP_API_SPACE)
    .then((space) => space.getEntry(id))
    .then((entry) => {
      entry.fields.quantity['en-US'] = entry.fields.quantity['en-US'] - count
      return entry.update()
    })
    .then((entry) => entry.publish())
    .then((entry) => console.log(`Entry ${entry.sys.id} updated.`))
    .catch(console.error)
  }

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

  emailValidator = (email) => {
    if (validator.validate(email)) {
      this.setState({email})
    } else {
      console.log('wrong bitch');
      
    }
  }

  updateOrderDetails = (form) => {
    if (form) {
      this.setState({form: form})
     console.log('done ')
    } else {
      console.log('bitchin');  
    }
  }

  // placeOrder = () => {
  //   const {email, form, total, subTotal, cart} = this.state

  //   let hoho = []
  //   cart.map((item) => {
  //     return hoho.push( ` ItemName: ${item.name} ` + '&nbsp &nbsp' + `ItemPrice: ${item.price} ` + ' &nbsp &nbsp ' + ` ItemCount: ${item.count} ` + ' &nbsp &nbsp ' + ` ItemQuantity: ${item.quantity} ` + ' &nbsp &nbsp ' + ` ItemTotalPrice: ${item.totalPrice} ` + '&nbsp &nbsp &nbsp &nbsp' )
  //   })

  //   if (this.state.email && this.state.form) {
  //     sendEmail(email, JSON.stringify(form), total, subTotal, hoho)

  //     cart.map(item => {
  //       this.updateEntry(item.id,item.count)
  //     })
  //   } else {
  //     alert('Please continue the checkout process')
  //   }
  // }

  filterRooms = (choice) => {

    let tempRooms = [...this.state.products];

    if (choice.value === 'newest') {
      this.setState({
        products: this.state.sortedProducts
      })
    }

    if (choice.value === 'hightolow') {
      tempRooms = tempRooms.sort((a, b) => (a.price < b.price) ? 1 : -1)
      this.setState({
        products: tempRooms
      }) 
    }

    if (choice.value === 'lowtohigh') {
      tempRooms = tempRooms.sort((a, b) => (a.price > b.price) ? 1 : -1)
      this.setState({
        products: tempRooms
      })
    }
  }

  clearCart = () => {
    this.setState({
      cart: []
    })
    window.location.reload()
  }

  

  render() {

    return (
      <>
        <ProductContext.Provider value={{...this.state ,clearCart: this.clearCart, filterRooms: this.filterRooms, placeOrder: this.placeOrder, updateOrderDetails: this.updateOrderDetails, emailValidator: this.emailValidator, removeItem: this.removeItem, decrementItem: this.decrementItem, incrementItem: this.incrementItem, authSignOut: this.authSignOut ,authWithFacebook:this.authWithFacebook, getCardItem:this.getCardItem, getProducts:this.getProducts, getProduct:this.getProduct}}>
          {this.props.children}
        </ProductContext.Provider>

 
      </>
    );
  }
}

export {ProductProvider, ProductContext}


      // return hoho.push( ` ItemName: ${item.name} ` + '&nbsp &nbsp' + `ItemPrice: ${item.price} ` + ' &nbsp &nbsp ' + ` ItemCount: ${item.count} ` + ' &nbsp &nbsp ' + ` ItemQuantity: ${item.quantity} ` + ' &nbsp &nbsp ' + ` ItemTotalPrice: ${item.totalPrice} ` + '&nbsp &nbsp &nbsp &nbsp' )



