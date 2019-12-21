
import React, { Component } from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import NavigationBar from './components/NavigationBar/NavigationBar';
import Calendar from './components/Calendar/Calendar';
import Github from './components/Github/Github';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';

import './App.css';

class App extends Component {
  

  render() {
    return (
      <div className="App">
        
        <Router>
        <NavigationBar/>
            <Switch>
              <Route path="/github">
                <Github />
              </Route>
              <Route path="/calendar">
                <Calendar/>
              </Route>
              <Route path="/signin">
                <SignIn />
              </Route>
              <Route path="/signup">
                <SignUp />
              </Route>
            </Switch>
        </Router>
      </div>
    )
  }
}

export default App

