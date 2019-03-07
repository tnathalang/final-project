import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import { Card, Form} from 'react-bootstrap';

//Profile Match container is made with reactstrap
//The cards generated are hardCoded, these are made with reactBootstrap.
//When we render we will delete tese hard coded nd import the fie from Profile Match card

const ListOfPolls = () => (
  <div>
    <Container>
      <Row>
        <Col style={{ padding: '10px' }}></Col>
        <Col xl={12}>


{/*Poll Cards generated*/}
            <Row style={{ padding: '10px' }}>
              <Col style={{ padding: '10px' }}>

              <Card border="success"style={{ width: '18rem' }}>
                <Card.Header>Users Says:</Card.Header>
                <Card.Body>
                  <Card.Title>Hey Bloogers!</Card.Title>
                  <Card.Text>
                    LUNCH!
                    Let's Do It! <br/>
                    12:00pm! <br/>
                    4th floor! <br/>
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                <Form>
                  {['checkbox'].map(type => (
                    <div key={`default-${type}`} className="mb-3">
                      <Form.Check
                        type={type}
                        id={`default-${type}`}
                        label={`Yes!`}
                      />

                    </div>
                  ))}
                  </Form>
                </Card.Footer>
              </Card>

              </Col>
              <Col style={{ padding: '10px' }}>

              <Card border="success"style={{ width: '18rem' }}>
                <Card.Header>Users Says:</Card.Header>
                <Card.Body>
                  <Card.Title>Hey Bloogers!</Card.Title>
                  <Card.Text>
                    LUNCH!
                    Let's Do It! <br/>
                    12:00pm! <br/>
                    4th floor! <br/>
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                <Form>
                  {['checkbox'].map(type => (
                    <div key={`default-${type}`} className="mb-3">
                      <Form.Check
                        type={type}
                        id={`default-${type}`}
                        label={`Yes!`}
                      />

                    </div>
                  ))}
                  </Form>
                </Card.Footer>
              </Card>
              <br />

              </Col>
              <Col style={{ padding: '10px' }}>

              <Card border="success"style={{ width: '18rem' }}>
                <Card.Header>Users Says:</Card.Header>
                <Card.Body>
                  <Card.Title>Hey Bloogers!</Card.Title>
                  <Card.Text>
                    LUNCH!
                    Let's Do It! <br/>
                    12:00pm! <br/>
                    4th floor! <br/>
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                <Form>
                  {['checkbox'].map(type => (
                    <div key={`default-${type}`} className="mb-3">
                      <Form.Check
                        type={type}
                        id={`default-${type}`}
                        label={`Yes!`}
                      />
                    </div>
                  ))}
                  </Form>
                </Card.Footer>
              </Card>

              </Col>
            </Row>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  </div>
);

//Exporting the File
export default ListOfPolls;
