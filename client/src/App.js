import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/partials/Header.js'
import ProfileMatch from './components/partials/ProfileMatch.js'
import PollDisplay from './components/partials/PollDisplay.js'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Login from "./components/partials/Login"
import Sidebar from "./components/partials/Sidebar"
import AuthService from './components/partials/AuthService';
import withAuth from './components/withAuth';
const Auth = new AuthService();

class App extends Component {
  state = { currentUser: {}, users: [{}] }

  setCurrentuser = () => {

  }

  render() {
    return (
      <Router>
        <div >
          <Header />

          <Route path="/login" component={Login} />
          <Route path="/home" component={Sidebar} />


          <main >

            <div style={{ margin: '60px', paddingLeft: '280px' }}>
              <Container style={{ display: 'flex' }}>
                <Row>
                  <Col sm={12}>
                    <ProfileMatch />
                  </Col>

                  <Col sm={12}>
                    <PollDisplay />
                  </Col>
                  <Col sm>

                  </Col>
                </Row>
              </Container>
            </div>

          </main>

          <footer>
          </footer>
        </div>
      </Router>
    );
  }
}

export default App
