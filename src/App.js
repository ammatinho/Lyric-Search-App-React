import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Index from './components/layout/Index';

import { Provider } from './context';

class App extends Component {
  render () {
    return (
      <Provider>
        <Router>
        <React.Fragment>
        <Navbar/>
        <div className="container">
          <Switch>
            <Route exactpath="/" component={Index}/>
          </Switch>
        </div>
        </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
