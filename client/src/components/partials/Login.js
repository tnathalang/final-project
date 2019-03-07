import React, { Component } from 'react';
import { Button, Container, Form, Row, Col } from 'react-bootstrap';
import AuthService from './AuthService'


class Login extends Component {

  constructor(props) {
    super(props)
    this.Auth = new AuthService()
  }


  handleSubmit = (event) => {

    event.preventDefault();
    const form = event.target;
    const params = {
      email: form.email.value,
      password: form.password.value
    }

    this.Auth.login(...params)
      .then(() => { this.props.history.replace('/'); })
      .catch(err => { alert(err); })
  }

  componentWillMount() {
    if (this.Auth.loggedIn())
      this.props.history.replace('/');
  }



  render() {

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
                  <Form.Label>Email</Form.Label>
                  {/* Input ?? */}
                  <Form.Control type="email" placeholder="Enter email" name="email" />
                  <Form.Text className="text-muted">
                  </Form.Text>

                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  {/* Input?? */}
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

export default Login;
