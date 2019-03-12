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
      auth: Auth.isUserAuthenticated(),
      user: Auth.getUser()
    }
  }

  // componentDidMount() {
  //   console.log(Auth.getToken());
  //   const instance = axios.create({
  //     baseURL: 'http://localhost:3001',
  //     timeout: 1000,
  //     headers: {
  //       'token': Auth.getToken(),
  //       'Authorization': `Token token=${Auth.getToken()}`
  //     }
  //   });
  //   instance
  //     .get("/session")
  //     .then(response => {response

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
          <PrivateRoute path="/home" component={() => <Home user={this.state.user} interests={this.state.interests || []} />} />
        </div>
      </Router>
    );
  }
}

export default App
