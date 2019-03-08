import React, { Component } from 'react'
import Sidebar from "./partials/Sidebar"
import { Container, Row, Col } from 'react-bootstrap';
import ProfileMatch from './partials/ProfileMatch.js'
import PollDisplay from './partials/PollDisplay.js'


class Home extends Component {


    render() {

        return (
            <div>
                <Sidebar />
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
            </div>
        )
    }
}

export default Home