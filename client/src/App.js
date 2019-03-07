import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/partials/Header.js'
import SideBar from './components/partials/Sidebar.js'
import ProfileMatch from './components/partials/ProfileMatch.js'
import PollDisplay from './components/partials/PollDisplay.js'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Login from "./components/partials/Login"

class App extends Component {
  state = { currentUser: {}, users: [{}] }

  setCurrentuser = () => {

  }

  render() {
    return (
      <Router>
        <div >
          <header style={{ marginTop: '80px' }}>
            <Header />
          </header>

          {/*  If not logged in */}

          <Route path="/login" component={Login} />

          <aside>
            <SideBar setCurrentuser={this.setCurrentuser} />
          </aside>

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

export default App;
