import React, { Component } from 'react';
import { Button, Container, Form, Row, Col } from 'react-bootstrap';


class Login extends Component {
  render () {

    return (
          /*Form for Login*/
          <div className="login">
          {/* Row for Login */}
            <Container>
              <Row>
                <Col></Col>
                <Col xl={6}>
                  <h2>Login</h2>
                  <br />
                </Col>
                <Col></Col>
              </Row>

          {/*Row for Login Form*/}
              <Row>
                <Col></Col>
                <Col xl={6}>
                  <Form>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                      <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                      </Form.Text>
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

export default Login;
