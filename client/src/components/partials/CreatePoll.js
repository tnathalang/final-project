import React from "react";
import { Form, Col, Row, Button, Container } from 'react-bootstrap';
import gql from "graphql-tag";
import { Query, Mutation } from "react-apollo";



//adding db stuff for poll
const CREATE_POLL = gql`
  mutation CreatePoll(
      $host_id: Int!,
      $title: String!,
      $description: String!
  ) {
    createPoll(input: {
      host_id: $host_id,
      title: $title,
      description: $description
    }) {
      poll {
        id
        host_id
        title
        description
      }
      errors
    }
  }
`;






//creating and sending
class CreatePoll extends React.Component {

//setting state so fields so the react components are now controlled inuts
  state = {
    host_id: 1,
    title: '',
    description: ''
  }
  onSubmit = (e, createPoll) => {
    e.preventDefault();
    createPoll({ variables: this.state });
    this.setState({ host_id: 1, title: '', description: '' });
  }


//create af function, fetch request to post the data.
//once posted, notify list of polls it needs to update
//create a method in poll display, when successful, will send a message
// to poll display, retrieve polls again

  render () {

    return (
          // Form for testing
        <Mutation
          mutation={CREATE_POLL}
          update={this.props.onCreatePoll}>
          {createPollMutation => (
            <div>
              <Container>
                <Row>
                  <Col></Col>
                  <Col xl={6}>
                    <Form onSubmit={e => this.onSubmit(e, createPollMutation)}>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                      <Form.Label>TITLE</Form.Label>
                      <Form.Control
                        size="lg"
                        type="text"
                        placeholder="Large text"
                        rows="3"
                        onChange={e => this.setState({ title: e.target.value })}
                        />
                    </Form.Group>

                      <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Create a New Poll</Form.Label>
                        <Form.Control
                          as="textarea"
                          size="lg"
                          type="text"
                          placeholder="Large text"
                          rows="3"
                          onChange={e => this.setState({ description: e.target.value })}
                          />
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
          )}
        </Mutation>
    )
  }
}

export default CreatePoll;
