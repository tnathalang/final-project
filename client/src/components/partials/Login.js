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

      <div className="login" style={{backgroundColor: '#D2E2E0' }}>
        <Container style={{width: '75%', padding: '50px'}} >



              <div style={{width: '75%', margin: '50px auto', padding: '4rem 2rem', borderRadius: '10px'}} className= 'bg-light border-radius-3 ma-4 shadow'>

                <h2>Login</h2>
                <br />

                <Form onSubmit={this.handleSubmit} className= 'my-4' > {/*1-8 for y x for sides : pa = padding to all*/}
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
                    Login
                  </Button>
                </Form>

                <div>
                  <h3>
                  Let your meetings be fruitful.
                  <br/>
                  A connecting app to make friends in your community!
                  </h3>
                </div>


              </div>


        </Container>
      </div>
    )
  }
}

export default withRouter(Login);
