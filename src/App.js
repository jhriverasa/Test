

import React, { Component } from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route, Redirect} from "react-router-dom";
import NavigationBar from './components/NavigationBar/NavigationBar';
import Calendar from './components/Calendar/Calendar';
import Github from './components/Github/Github';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.handleChangeUsername = this.handleChangeUsername.bind(this)
    this.handleChangePassword = this.handleChangePassword.bind(this)
    this.handleLogIn = this.handleLogIn.bind(this)
    this.handleLogOut = this.handleLogOut.bind(this)

    this.state = {
      username : "",
      password : "",
      isUserLoggedIn: false
    }
  }

  handleChangePassword(value){
    this.setState({password: value})
  }
  handleChangeUsername(value){
      this.setState({username: value})
  }

  handleLogIn(isLoggedIn){
    this.setState({isUserLoggedIn: isLoggedIn})
    
  }
  handleLogOut(){
    this.setState({isUserLoggedIn: false})
    window.location = 'http://localhost:3000/signin'
  }

  render() {
    return (
      <div className="App">
        
        <Router>
        <NavigationBar isUserLoggedIn={this.state.isUserLoggedIn} onLogOut ={this.handleLogOut}/>
            <Switch>
              <Redirect exact from='/' to="/signin" />
              <Route path="/github">
                <Github />
              </Route>
              <Route path="/calendar">
                <Calendar/>
              </Route>
              <Route path="/signin">
                <SignIn 
                  username={this.state.username} password={this.state.password} 
                  onChangePassword ={this.handleChangePassword} onChangeUsername ={this.handleChangeUsername}
                  onLogin={this.handleLogIn} isUserLoggedIn={this.state.isUserLoggedIn}
                />
              </Route>
              <Route path="/signup">
                <SignUp 
                  username={this.state.username} password={this.state.password} 
                  onChangePassword ={this.handleChangePassword} onChangeUsername ={this.handleChangeUsername}
                />
              </Route>
            </Switch>
        </Router>
      </div>
    )
  }
}

export default App