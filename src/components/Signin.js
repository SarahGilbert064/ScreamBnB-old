import React from 'react';
import firebase from 'firebase/app';
import { useHistory } from 'react-router-dom';

function Signin() {

  const myStyledSignin = {
    backgroundColor: 'silver',
    border: '2px black',
		textAlign: 'center',
    padding: '5px',
    borderStyle:'groove',
    width: '90%',
    height: "200",
    margin: '80px',
    
  }

  const history = useHistory();
	
	function doSignIn(event) {
		event.preventDefault();
		const email = event.target.signinEmail.value;
		const password = event.target.signinPassword.value;
		firebase.auth().signInWithEmailAndPassword(email, password)
			.then(function() {
				history.push('/');
				console.log("Success");
		}).catch(function(error) {
				console.log(error.message);
		});
	}

  return (
		<>
      <div class ="row">
        <div class = 'column'>
          <div style ={myStyledSignin}>
            <h4>Sign In</h4>
            <form onSubmit={doSignIn}>
              <input
                type = 'text'
                name = 'signinEmail'
                placeholder = 'email' />
                <br></br>
              <input
                type='password'
                name='signinPassword'
                placeholder='Password' />	
                <br></br>
              <button type='submit'>Sign In</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signin;