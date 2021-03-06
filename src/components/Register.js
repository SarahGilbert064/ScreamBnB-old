import React from  'react';
import firebase from 'firebase/app';
import { useHistory }  from 'react-router-dom';

function Register() {

  const myStyledRegister = {
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

  function doRegister(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(function() {
        history.pushState('/signin');
      }).catch(function(error) {
        console.log('Failed to signin');
      });
  }

  return (
    <>
    <div class ="row">
      <div class = 'column'>
        <div style={myStyledRegister}>
          <h4>Register</h4>
          <form onSubmit ={doRegister}>
            <input
              type='text'
              name='email'
              placeholder='Email' />
              <br></br>
            <input
              type='password'
              name='password'
              placeholder='Password' />
              <br></br>
            <button type='submit'>Register Your Account</button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}

export default Register;