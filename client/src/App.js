import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Users from './components/Users';
import Header from './components/partials/Header.js'
import SideBar from './components/partials/Sidebar.js'
import NewPoll from './components/partials/NewPoll.js'
import Register from './components/partials/Register.js'
import ProfileMatchCard from './components/partials/ProfileMatchCard.js'
import ProfileMatch from './components/partials/ProfileMatch.js'
import PollDisplay from './components/partials/PollDisplay.js'
import { Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div >
        {/* <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Guard} />
        </Switch> */}
        <header style={{ marginTop: '80px' }}>
          <Header />
        </header>
        {/*  If not logged in */}

        <div>
          <SideBar />
        </div>

        <main >

          <div style={{ margin: '60px', border: '1px solid black', paddingLeft: '280px' }}>
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
