import React from 'react';
import Header from './Header.js';

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
        <Route path ="/signout" component={Signout}>
          <SignOut/>
        </Route>
        <Route path ="/" component={App}>
          <MemoryControl />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
