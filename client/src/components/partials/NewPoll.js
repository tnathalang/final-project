import React from "react";
import { Form, Col, Row, Button, Container } from 'react-bootstrap';


//CREATE A NEW POLL

class NewPoll extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
    }
  }

  //Handle Poll Change and Submit
    handleOnChange = event => {
      this.setState({
        [event.target.name]: event.target.value //[target.name] is es6 , name is applied to the input. mostly square brakets
      })
    }

    onSubmit = event => {
      event.preventDefault();
      let params = {
        host_id: 1,
        ...this.state
      }

      this.props.submitNewPolls(params);

      this.setState({ title: '', description: '' }); //clear the field
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
                  <Form onSubmit={this.onSubmit}>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                      <Form.Label>Create a New Poll</Form.Label>
                      <Form.Control
                        name= "title"
                        type="text"
                        placeholder="Title"
                        value={this.state.title}
                        onChange={this.handleOnChange}
                      />
                      <br/ >
                      <Form.Control
                        as="textarea"
                        size="lg"
                        name = "description"
                        type="text"
                        placeholder="What would you like to do?"
                        value = {this.state.description}
                        onChange={this.handleOnChange}
                        rows="3" />
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
