import React, { Component } from "react"
import logo from './../img/logo.png';


function Header() {

  const appStyle = {
    
    // backgroundColor: 'silver',
    // border: '12px black',
    // padding: '34px',
    // borderStyle:'groove',
    // borderRadius: '50%/100%',
    // width: '90%',
    // margin: '50px',
  }
  return (
    <React.Fragment>
      <div className='row'>
        <div className='logo'>
          <center>
            <img src={logo} width="250" height="200" margin="50px"/>
          </center>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Header;