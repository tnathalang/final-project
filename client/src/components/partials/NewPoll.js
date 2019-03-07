import React from "react";
import { Form, Col, Row, Button, Container } from 'react-bootstrap';



class NewPoll extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
    }
  }

  //Handle Poll Change and Submit
    handlePollChange = event => {
      this.setState({
        title: event.target.value,
        description: event.target.value,
      })
    }

    handlePollSubmit = event => {
      if (event.key === 'Enter') {
        this.props.updatePoll(this.state.title);
        this.setState({ title: '' }); //clear the field
        this.props.updatePoll(this.state.description);
        this.setState({ description: '' });
      }
    };

    // value={this.state.titlename}
    // onChange= {this.handlePollChange}
    // onKeyUp= {this.handlePollSubmit}??


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
                      <Form.Control type="text" placeholder="Title" />
                      <br/ >
                      <Form.Control as="textarea" size="lg" type="text" placeholder="What would you like to do?" rows="3" />
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
