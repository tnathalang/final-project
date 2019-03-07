import React, { Component } from 'react';
import { Button, Container, Form, Row, Col } from 'react-bootstrap';

class Login extends Component {


  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }



//* LOGIN FORM!! CHANGE FOR AXIOS!! */


  handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(event.target);

    fetch('/api/form-submit-url', {
      method: 'POST',
      body: data,
    });
  }


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


{/* Form for on submit*/}
                  <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
{/* Input ?? */}
                      <Form.Control type="email" placeholder="Enter email" />
                      <Form.Text className="text-muted">
                      </Form.Text>

                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
{/* Input?? */}
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
