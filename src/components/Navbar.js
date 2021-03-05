import React from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import { BrowserRouter as Switch, Route, Link } from "react-router-dom";
import Signin from './Signin';
import SignOut from './SignOut';
import Register from './Register';
import {
  FormControl as FormControl,
  Button as Button,
  Form as Form
} from "react-bootstrap";

const Navbar = () => {
  return (
    <>
    <ReactBootStrap.Navbar bg="dark" variant="dark">
      <ReactBootStrap.Navbar.Brand href="#app">ScreamBnB</ReactBootStrap.Navbar.Brand>
      <ReactBootStrap.Nav className="mr-auto">
      <Switch>
        <Route path ="/">
        </Route>
        <Route path ="/signin">
          <Signin />
        </Route>  
        <Route path ="/register">
          <Register />
        </Route> 
        <Route path ="/signOut">
          <SignOut />
        </Route> 
      </Switch>
        <Link to = '/'>
        <ReactBootStrap.Nav.Link href="#app">Home</ReactBootStrap.Nav.Link>
        </Link>
        <Link to ="/Signin">
        <ReactBootStrap.Nav.Link href="#signin">Sign In</ReactBootStrap.Nav.Link>
        </Link>
        <Link to ='/Register'>
        <ReactBootStrap.Nav.Link href="#register">Register</ReactBootStrap.Nav.Link>
        </Link>
        <Link to ='/SignOut'>
        <ReactBootStrap.Nav.Link href="#signOut">Sign Out</ReactBootStrap.Nav.Link>
        </Link>
      </ReactBootStrap.Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form>
    </ReactBootStrap.Navbar>
    </>
  )
}

export default Navbar;