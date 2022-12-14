import React, { Component } from "react";
import { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faRecordVinyl } from '@fortawesome/free-solid-svg-icons';
import "./Header.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



const HeaderStyle = styled.div`
  background-color: black;
  color: white;
  margin: 0;
  height: 50px;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  *{
    color: inherit;
    text-decoration: inherit;
    
    margin: 0px;
  }
`

const NavbarStyle = styled.div`
  
  display: inline-block;
  background-color: gray;
  ul{
    padding: 1rem;
  }

  a{
    text-decoration: none;
  }
   
  li{
    text-decoration: none;
  }
`



function Header(props){

  const [navbar, navbarEnabled] = useState(false);
  const [cart, cartEnabled] = useState(false)

  const toggler = () =>{

    navbarEnabled((prev) => !prev);
    
  }

  return(
    <div style={{height: "inherit"}}>
      <HeaderStyle>
        <a href="#ss" onClick={toggler}><FontAwesomeIcon icon={faBars} /></a>
        <Link to = '/'>
          <h1>{props.title}</h1>
        </Link>
        <Link to = '/cart'>
          <a href = "#ss"><FontAwesomeIcon icon={faCartShopping} /></a>
        </Link>
      </HeaderStyle>
      <NavbarStyle className={navbar ? "" : "active"}>
          <ul>
            <Link to="/store">
              <li >
                <FontAwesomeIcon icon={faRecordVinyl} />
                Store
              </li>
            </Link>
            <li><FontAwesomeIcon icon={faRecordVinyl} /> About Us</li>
            <li><FontAwesomeIcon icon={faRecordVinyl} /> FAQ</li>
            <Link to="/admin">
              <li>
                <FontAwesomeIcon icon={faRecordVinyl} />
                Admin Menu
              </li>
            </Link>
          </ul> 
      </NavbarStyle>
    </div>
  );
}

export default Header;
