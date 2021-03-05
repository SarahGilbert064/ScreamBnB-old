import React from 'react';
import Header from './Header.js';
import HotelControl from "./HotelControl";
import Signin from './Signin';
import Register from './Register';
import SignOut from './SignOut';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './Navbar.js';


function App() {
  return (
    <Router>
      <Navbar/>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Header/>
      <Switch>
        <Route path ="/signin" component={Signin}>
          <Signin />
        </Route>  
        <Route path ="/register" component={Register}>
          <Register/>
        </Route>
        <Route path ="/signOut" component={SignOut}>
          <SignOut/>
        </Route>
        <Route path ="/" component={App}>
          <HotelControl />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
