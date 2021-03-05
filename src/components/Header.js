import React from "react";

function Header() {

  const appStyle = {
    backgroundColor: 'silver',
    border: '12px black',
    padding: '34px',
    borderStyle:'groove',
    borderRadius: '50%/100%',
    width: '90%',
    margin: '50px',
  }
  return (
    <React.Fragment>
      <div class ='row'>
        <div class ='column'>
          <div style={appStyle}>
            <h4><center>Enter if you dare!</center></h4>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Header;