import React, { Component } from 'react';
import Users from './components/Users';

class App extends Component {
  render() {
    return (
      <div>
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
        {/* users from user partial */}
        {/* <div>
        <Users />
      </div> */}
        );
      }
    }
    
    export default App;
