import React, { Component } from 'react';
import { Button, Container, Form, Row, Col } from 'react-bootstrap';


class Register extends Component {
  render () {

    return (
          /*Form for Register*/
          <div className="register">
          {/* Row for Login */}
            <Container>
              <Row>
                <Col></Col>
                <Col xl={6}>
                  <h2>Register</h2>
                  <br />
                </Col>
                <Col></Col>
              </Row>

          {/*Row for Register Form*/}
              <Row>
                <Col></Col>
                <Col xl={6}>
                  <Form>

                    <Form.Group controlId="">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control type="text" placeholder="First name" />
                    </Form.Group>

                    <Form.Group controlId="">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control type="text" placeholder="Last name" />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                  </Form>
                </Col>
                <Col></Col>

              </Row>
            </Container>
          </div>
    )
  }
}

export default Register;
