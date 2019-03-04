import React from "react";
import {  Row, Form, Button } from 'react-bootstrap';



class CreatePoll extends React.Component {

  render() {
    return (
      <>
      <div>
        <Form style={{ width: '50%' }}>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label></Form.Label>
            <Form.Control as="textarea" size="lg" type="text" placeholder="What would you like to do?" rows="3" />
          </Form.Group>
          <span>
          <Button  style={{ float: 'right' }} variant="primary" type="submit">
            Submit
          </Button>
          </span>
        </Form>
        <br/>
        <br/>
      </div>
      </>
    );
  }
}

export default CreatePoll;
