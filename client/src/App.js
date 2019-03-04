import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';


import './assets/styles/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/partials/Login.js'
import TestMapUsers from './components/partials/TestMapUsers.js'
import Header from './components/partials/Header.js'
import SideBar from './components/partials/Sidebar.js'
import NewPoll from './components/partials/NewPoll.js'
import Register from './components/partials/Register.js'
import ProfileMatchCard from './components/partials/ProfileMatchCard.js'
import ProfileMatch from './components/partials/ProfileMatch.js'
import PollDisplay from './components/partials/PollDisplay.js'

class App extends Component {

  render() {
    return (
        <div>
        <div>
          <Header />
        </div>
        {/*  If not logged in */}
        <div>
            <SideBar />
        </div>

        <div>
        < ProfileMatch />



        </div>
        <div>
          <PollDisplay />
          </div>


        {/*
          <Login />
          <Register />
          <SideBar />
          <NewPoll />
          < ProfileMatch />
          <ProfileMatchCard />

        <div className="App">
          // <SideBar /> //
          <Container>
            <Row>
              <Col ><NewPoll /></Col>
            </Row>
          </Container>
        </div>
        */}

      </div>
    );
  }
}

export default App;
