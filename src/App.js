import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {Switch,Route} from "react-router-dom"
import Home from './Pages/Home'
import Products from './Pages/Products'
import SingleProduct from './Pages/SingleProduct'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Cart from './Pages/Cart'
import CheckOut from './Pages/Checkout'

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/cart" component={Cart}/> 
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register}/> 
        <Route exact path="/checkout" component={CheckOut}/> 
        <Route exact path="/:slug" render={props => <Products key={props.match.params.term} {...props} />}/>
        <Route exact path="/:slug/:id" component={SingleProduct}/>  
        {/* <Route component={Error}/> */}
      </Switch>
    </> 
  );
}


export default App


