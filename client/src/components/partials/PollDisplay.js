import React from "react";
import { Container, Collapse, Col, Row, Button } from 'react-bootstrap';
import { UncontrolledCollapse } from 'reactstrap';

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

        <div>
          <Container>
          <Row style={{ backgroundColor: 'rgba(255,255,255,0.5)', borderRadius: '10px' }}>
            <Col style={{ padding: '10px' }}></Col>
            <Col xl={12}>
                <div class="input-group">

                  <Button
                    variant="outline-info"
                    style={{ marginLeft: '20px', marginRight: '20px', marginBottom: '1rem' }}
                    onClick={() => this.setState({ open: !open })}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                    id="togg"
                  >
                    ▶
                  </Button>

                  <h2>

                    Explore Current Hangouts

                  </h2>
                </div>
                <UncontrolledCollapse toggler="#togg">
                  {/* Form for testing*/}
                  <div style={{ margin: '10px', marginBottom: '1rem' }} id="example-collapse-text">
                    {/* List of Current Polls*/}
                    <ListOfPolls
                      polls={this.state.polls}
                      user={this.props.user}
                    />
                    {/*Button to create a new poll */}
                    <Row>
                      <Col>
                      <br />
                        <Button
                          style={{ margin: '2rem', marginBottom: '2rem' }}
                          variant= "light"
                          onClick={() => this.setState({ open: !open })}
                          aria-controls="example-collapse-text"
                          aria-expanded={open}
                          id="toog"
                        >
                          Create A New Hangout +
              </Button>
                      </Col>
                    </Row>
                  <UncontrolledCollapse toggler="#toog">
                    {/* Press the create Button */}
                    <NewPoll
                      submitNewPolls={this.submitNewPolls}
                    />
                    {/*If No Events */}
                    <div>

                    </div>
                    </UncontrolledCollapse>

                  </div>
                </UncontrolledCollapse>
              </Col>
            </Row>
          </Container>
        </div>

    );
  }
}

export default PollDisplay;
