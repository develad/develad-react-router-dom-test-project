import React from 'react';
import Navbar from './components/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import User from './components/Pages/User';
import { UsersStoreProvider } from './components/store/Users.Store';

function App() {
  return (
    <>
      <UsersStoreProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path='/about' component={About} />
            <Route path='/:id' component={User} />
            <Route exact path='/' component={Home} />
          </Switch>
        </Router>
      </UsersStoreProvider>
    </>
  );
}

export default App;
