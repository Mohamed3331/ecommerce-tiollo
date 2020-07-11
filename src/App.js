import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Home from './Pages/Home'
import Products from './Pages/Products'
import SingleProduct from './Pages/SingleProduct'
import Cart from './Pages/Cart'
import CheckOut from './Pages/Checkout'
import Error from './Components/Error'
import {Switch,Route} from "react-router-dom"

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/cart" component={Cart}/> 
        <Route exact path="/checkout" component={CheckOut} /> 
        <Route exact path="/:slug" render={props => <Products key={props.match.params.term} {...props} />}/>
        <Route exact path="/:slug/:id" component={SingleProduct}/>  
        <Route component={Error}/>
      </Switch>
    </> 
  );
}


export default App


