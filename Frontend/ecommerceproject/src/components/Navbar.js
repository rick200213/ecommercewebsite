import React, { Component } from 'react'
import { Button } from 'bootstrap'
import {Link} from 'react-router-dom'
import logo from '../logo.svg'
import {ButtonContainer} from './HomeStyles'
export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-inverse navbar-expand-sm">
            <div className="container-fluid">
              <div className="navbar-header">
              <Link to="/"  className="nav-link">
              <img src={logo} alt="Brand" className="navbar-brand"></img>
              </Link>
              </div>
              <div className="collapse navbar-collapse" id="myNavbar">
                <ul className="nav navbar-nav">
        
                  <li className="dropdown">
                  <a className="dropdown-toggle" data-toggle="dropdown" href="#">Products <span class="caret"></span></a>
                    <ul className="dropdown-menu">
                      <li><Link to="/electronics" className="nav-link">Electonics</Link></li>
                      <li><Link to="/fashion" className="nav-link">Fashion</Link></li>
                      <li><Link to="/home" className="nav-link">Home</Link></li>
                    </ul>
                  </li>
                  <li><a href="#">Page 2</a></li>
                  <li><a href="#">Page 3</a></li>
                </ul>
                <ul className="nav navbar-nav navbar-center">
                  <li><Link to="/signup" className="nav-link"><ButtonContainer>SignUp</ButtonContainer></Link></li>
                  <li><Link to="/login" className="nav-link"><ButtonContainer>Login</ButtonContainer></Link></li>
                  <li><Link to="/chart" className="nav-link"><button ><i class="fa fa-shopping-cart"></i>MyChart</button></Link></li>
                </ul>
              </div>
            </div>
          </nav>
        )
    }
}
