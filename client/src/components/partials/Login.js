import React, { Component } from 'react';
import { Button, Container, Form, Row, Col } from 'react-bootstrap';
import Auth from '../../modules/Auth';
import { Link, withRouter } from 'react-router-dom'



class Login extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const params = {
      email: form.email.value,
      password: form.password.value
    }

    fetch("/login", {
      method: "POST",
      body: JSON.stringify(params),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json()).then(res => {
      Auth.authenticateToken(res.user.token)
      this.props.onSuccessLogin(res)
      this.props.history.push('/home')
    })
  }

  render() {
    return (
      /*Form for Login*/
      <div className="login">
        <Container>
          <Row>
            <Col></Col>
            <Col xl={6}>
              <h2>Login</h2>
              <br />
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <Col></Col>
            <Col xl={6}>

              <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  {/* Input ?? */}
                  <Form.Control type="email" placeholder="Enter email" name="email" />
                  <Form.Text className="text-muted">
                  </Form.Text>

                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" name="password" />

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

export default withRouter(Login);
