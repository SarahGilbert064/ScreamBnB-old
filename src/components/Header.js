import React from "react";
// import logo from './../img/logo.png';


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
      <img src={require('./../img/logo.png')} width='500' height='600'>

      </img>
    </React.Fragment>
  );
}

export default Header;