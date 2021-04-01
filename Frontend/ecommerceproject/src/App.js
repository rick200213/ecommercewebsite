import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import React from 'react';
import  'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import ProductReplica from './components/ProductReplica';
import Default from './components/Default';
import SignUp from './components/SignUp';
import Details from './components/Details';
import Button from './components/Button'
class App extends Component {
  render()
  {
  return (
    <React.Fragment>
                <Router>
                    <Navbar></Navbar>
                    <Switch>
                    <Route exact path="/" component={ProductList}></Route>
                    <Route exact path="/Product" component={ProductReplica}></Route>
                    <Route path="/signup" component={SignUp}></Route>
                    <Route path="/details" component={Details}></Route>
                    <Route component={Default}></Route>
                    </Switch>
                </Router>
            </React.Fragment>
  );
}
}

export default App;
