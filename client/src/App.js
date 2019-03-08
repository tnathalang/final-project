import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/partials/Header.js'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Login from "./components/partials/Login"
import Auth from './modules/Auth'
import PrivateRoute from './modules/PrivateRoute'
import Home from './components/Home'



class App extends Component {
  constructor() {
    super()
    this.state = {
      auth: Auth.isUserAuthenticated()
    }
  }

  onSuccessLogin = (currentUser) => {
    this.setState({
      user: currentUser.user,
      interests: currentUser.interests
    }, console.log(this.state))
  }

  render() {
    return (
      <Router>
        <div >
          <Header />
          <Route path="/login" component={() => <Login onSuccessLogin={this.onSuccessLogin} />} />
          <PrivateRoute path="/home" component={() => <Home user={this.state.user} interests={this.state.interests} />} />
        </div>
      </Router>
    );
  }
}

export default App
