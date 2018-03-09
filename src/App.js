import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import withLayout from './Layout'

// pages
import Home from 'pages/Home'
import About from 'pages/About'

@withLayout
class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
      </Switch>
    );
  }
}

export default App;
