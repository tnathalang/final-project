import React, { Component } from 'react'
import Sidebar from "./partials/Sidebar"
import { Container, Row, Col } from 'react-bootstrap';
import ProfileMatch from './partials/ProfileMatch.js'
import PollDisplay from './partials/PollDisplay.js'
import Calendar from './partials/Calendar.js'


class Home extends Component {


    render() {

        return (
            <div>
                <Sidebar user={this.props.user} interests={this.props.interests} />
                <main style={{backgroundColor: '#d1e1df', marginLeft: '300px'}} >
                    <div style={{ margin: '60px' }}>
                        <Container style={{ display: 'flex' }}>
                            <Row>

                                <Col sm={12}>
                                    <ProfileMatch user={this.props.user} interests={this.props.interests} />
                                </Col>

                                <Col sm={12}>
                                    <PollDisplay user={this.props.user} interests={this.props.interests} />
                                </Col>

                                <Col sm={12}>
                                    <Calendar user={this.props.user} interests={this.props.interests} />
                                </Col>

                            </Row>
                        </Container>
                    </div>
                </main>
            </div>
        )
    }
}

export default Home



// <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
//   <Tab eventKey="home" title="Home">
//     <ProfileMatch user={this.props.user} interests={this.props.interests} />
//
//   </Tab>
//   <Tab eventKey="profile" title="Profile">
//     <PollDisplay user={this.props.user} interests={this.props.interests} />
//
//   </Tab>
//   <Tab eventKey="contact" title="Contact" disabled>
//     <Calendar user={this.props.user} interests={this.props.interests} />
//
//   </Tab>
// </Tabs>;
