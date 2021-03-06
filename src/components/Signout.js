import React from 'react';
import firebase from 'firebase/app';
import { useHistory } from 'react-router-dom';

function SignOut() {

  const myStyledSignOut = {
    backgroundColor: 'silver',
    border: '2px black',
		textAlign: 'center',
    padding: '5px',
    borderStyle:'groove',
    width: '90%',
    height: "200",
    margin: '50px',
  }

  const history = useHistory();
  
  function doSignOut() {
		firebase.auth().signOut().then(function() {
      history.push('/signin');
			console.log("successfully signed out!");
		}).catch(function(error) {
			console.log("error signing in");
		});
  }

  return (
    <>
    <div class="row">
      <div class = "column">
        <div style={myStyledSignOut}>
          <h1>Sign Out</h1>
            <button onClick = {doSignOut}>Sign Out</button>
        </div>
      </div> 
    </div> 
    </>
  );
}

export default SignOut;