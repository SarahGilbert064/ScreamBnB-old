import React, { Component } from "react"
import logo from './../img/logo.png';


function Header() {

  const appStyle = {
    width: '90%',
    margin: '70px',
  }
  return (
    <React.Fragment>
      <div className='row'>
        <div className='logo' style={appStyle}>
            <img src={logo} width="350" height="300"/>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Header;