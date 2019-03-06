import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/partials/Header.js'
import SideBar from './components/partials/Sidebar.js'
import ProfileMatch from './components/partials/ProfileMatch.js'
import PollDisplay from './components/partials/PollDisplay.js'
import { Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div >
        <header style={{ marginTop: '80px' }}>
          <Header />
        </header>
        {/*  If not logged in */}

        <div>
          <SideBar />
        </div>

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

    );
  }
}

export default App;
