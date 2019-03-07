import React from "react";
import { Container, Collapse, Col, Row, Button } from 'react-bootstrap';
import ListOfPolls from './ListOfPolls.js'
import CreatePoll from './CreatePoll.js'



class PollDisplay extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: true,
    };
  }

  render() {
    const { open } = this.state;
    return (
      <>
      <div>
        <Container>
          <Row>
            <Col style={{ padding: '10px' }}></Col>
            <Col xl={12}>
        <div class="input-group">
          <h2>
            Open Polls
          </h2>

          <Button
            variant="outline-info"
            style={{ marginLeft: '20px', marginBottom: '1rem' }}
            onClick={() => this.setState({ open: !open })}
            aria-controls="example-collapse-text"
            aria-expanded={open}
          >
            ↑ ↓
          </Button>
        </div>
        <Collapse in={this.state.open}>
{/* Form for testing*/}
          <div style={{ margin: '10px', marginBottom: '1rem' }} id="example-collapse-text">
{/* List of Current Polls*/}
            <ListOfPolls />
{/*Button to create a new poll */}
            <Row>
              <Col>
              <Button
                style={{ margin: '10px', marginBottom: '1rem' }}
                variant="outline-success"
              >
                Create +
              </Button>
              </Col>
            </Row>
{/* Press the create Button */}
            <CreatePoll />
{/*If No Events */}
              <div>

              </div>

          </div>
        </Collapse>
        </Col>
        <Col></Col>
        </Row>
        </Container>
        </div>
      </>
    );
  }
}

export default PollDisplay;



/*

*/
