import React from "react";
import { Container, Collapse, Col, Row, Button } from 'react-bootstrap';
import ListOfPolls from './ListOfPolls.js'
import NewPoll from './NewPoll.js'

//THE POLL DISPLAY PAGE OF ALL THE COMPONENTS


class PollDisplay extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: true,
      polls: [],
    };

    this.submitNewPolls = this.submitNewPolls.bind(this); //binding the this.
  }

  componentDidMount() {
    this.fetchAllPolls();
  }

  submitNewPolls(params) {
    fetch('/api/v1/polls', {
      method: 'POST',
      body: JSON.stringify(params),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      this.setState((state) => ({ polls: [params, ...this.state.polls] }))
      // return this.state.polls.push(res);
    }) //cause a prommise,
      //.then(response => console.log('Success:', JSON.stringify(response)))
      .catch(error => console.error('Error:', error));
  }

  fetchAllPolls() {
    fetch('http://localhost:3001/api/v1/polls', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(res => {//create an index in controller and do same thing
        this.setState((state) => ({ polls: res }))
        //WHAT DO I SET / DO!!!
        console.log('Res:', res)
      })
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
                    <ListOfPolls
                      polls={this.state.polls}
                    />
                    {/*Button to create a new poll */}
                    <Row>
                      <Col>
                        <Button
                          style={{ margin: '10px', marginBottom: '1rem' }}
                          variant="outline-success"
                        >
                          Create A New Poll+
              </Button>
                      </Col>
                    </Row>
                    {/* Press the create Button */}
                    <NewPoll submitNewPolls={this.submitNewPolls} />
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
