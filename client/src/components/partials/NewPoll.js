import React from "react";
import { Form, Col, Row, Button, Container } from 'react-bootstrap';



class NewPoll extends React.Component {

  constructor() {
    super();
    this.state = {
      joined: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

    handleClick() {
    this.setState({
      joined: !this.state.joined
    });
  }

  render () {


    return (
          // Form for testing
          <div>
            <Container>
              <Row>
                <Col></Col>
                <Col xl={6}>
                  <Form>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                      <Form.Label>Create a New Poll</Form.Label>
                      <Form.Control as="textarea" size="lg" type="text" placeholder="Large text" rows="3" />
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

export default NewPoll;
