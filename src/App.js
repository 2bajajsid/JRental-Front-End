import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Redirect, Route, Link} from "react-router-dom"; 
import RForm from './RegistrationForm'; 
import Header from './header'; 
import HomePage from './homePage'; 
import ProductForm from './productForm'; 
import configureStore from "./store"; 
import {Provider as ReduxProvider} from "react-redux"; 

const reduxStore = configureStore()

class App extends Component {
  render(){
    return (
      <ReduxProvider store={reduxStore}>
      <div className="App">
        <Header/>
        <Route path = "/register" 
        component={RForm}
        render = {() => (<RForm/>)}
        ></Route>
        <Route path = "/homePage"
        component={HomePage}/>
        <Route path = "/addProduct"
        component={ProductForm}/>
      </div>
    </ReduxProvider>
    );
  }
}
export default App;
