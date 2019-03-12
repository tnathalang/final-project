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
                <main >
                    <div style={{ margin: '60px', paddingLeft: '280px' }}>
                        <Container style={{ display: 'flex' }}>
                            <Row>
                                <Col sm={12}>
                                    <ProfileMatch user={this.props.user} interests={this.props.interests} />
                                </Col>

                                <Col sm={12}>
                                    <PollDisplay user={this.props.user} interests={this.props.interests} />
                                </Col>
                                <Col sm>
                                <Col sm={12}>
                                    <Calendar user={this.props.user} interests={this.props.interests} />
                                </Col>
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
