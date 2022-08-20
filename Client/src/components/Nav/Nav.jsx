import React from 'react'
import Logo from '../../assets/img/coin+logo.png'
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';
import './nav.css' 

import { useAuth0 } from '@auth0/auth0-react';

import LoginButton from '../Login/LoginButton';
import ImgProfile from '../Profile/ImgProfile';

function Nav() {

  const {isAuthenticated} = useAuth0()

  return (
    <nav class="navbar navbar-expand-sm navbar-dark bg-warning px-md-5 px-1 sticky-top">
        <div class="container-fluid w-100">
          <NavLink to ="/">
          <img src={Logo} alt="C+" width="150"/>
          </NavLink>
            <button class="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarSupportedContent"
                aria-controls="#navbarSupportedContent"
                aria-expanded="false"
                aria-label="toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <div class="nav navbar-nav ms-auto mx-3">
                  <Link to="Home" spy={true} offset={-150} href="#Home">Home</Link>
                  <Link to="Services" spy={true} offset={-150} href="#Services">Services</Link>
                  <Link to="About" spy={true} offset={-150} href="#About">About</Link>
                  <Link to="Notifications" spy={true} offset={-150} href="#Notifications">Notifications</Link>
                  
                </div>
                {isAuthenticated ? <ImgProfile/> : <LoginButton/>}
                
            </div>
        </div>
    </nav>
  )
}

export default Nav