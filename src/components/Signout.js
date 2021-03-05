import React from 'react';
import firebase from 'firebase/app';
import { useHistory } from 'react-router-dom';

function SignOut() {

  const myStyledSignOut = {
    backgroundColor: 'silver',
    border: '12px black',
		textAlign: 'center',
    padding: '34px',
    borderStyle:'groove',
    borderRadius: '50%/100%',
    width: '90%',
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
    <div style={myStyledSignOut}>
      <h1>Sign Out</h1>
        <button onClick = {doSignOut}>Sign Out</button>
    </div>
    </>
  );
}

export default SignOut;