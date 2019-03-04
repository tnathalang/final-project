import React from 'react';
import { UncontrolledCollapse, Button, Row, Col, Container } from 'reactstrap';
import { Card, Badge} from 'react-bootstrap';

//Profile Match container is made with reactstrap
//The cards generated are hardCoded, these are made with reactBootstrap.
//When we render we will delete tese hard coded nd import the fie from Profile Match card

const ProfileMatch = () => (
  <div>
    <Container>
      <Row>
        <Col style={{ padding: '10px' }}></Col>
        <Col xl={12}>

{/*Toggle button to drop down the cards*/}

          <div class="input-group"><h2>Your Matches</h2>

          <Button style={{ marginLeft: '20px', marginBottom: '1rem' }} outline color="info" id="toggler">
            ▽
          </Button>
          </div>

{/*Toggle buttons for refreshing the search and/or  inverting the search*/}
          <UncontrolledCollapse toggler="#toggler">
            <Row>
            <Col>
              <Button style={{ margin: '10px', marginBottom: '1rem' }} outline color="success">
                Refresh ↻
              </Button>

              <Button style={{ margin: '10px', marginBottom: '1rem' }} outline color="danger">
                Invert ⇄
              </Button>
              </Col>
            </Row>

{/*Profile Cards generated*/}
            <Row style={{ padding: '10px' }}>
              <Col style={{ padding: '10px' }}>

              <Card style={{ width: '16rem' }}>
                <Card.Img style={{ height: '15rem' }} variant="top" src="https://steamuserimages-a.akamaihd.net/ugc/918042871153508715/BA9058FD48450707B232AD72DDC927C4C88E95AB/" />
                <Card.Body>
                  <Card.Title>NAME: Gudetama</Card.Title>
                  <Card.Text>
                    Maybe their language!
                    <br/>
                    Maybe their department!
                    <br/>
                    List their similar interests!
                    <Row>
                      <Col><Badge variant="info">Cats</Badge></Col>
                      <Col><Badge variant="info">Blooging</Badge></Col>
                    </Row>
                    <Row>
                      <Col><Badge variant="info">Food</Badge></Col>
                      <Col><Badge variant="info">Sleep</Badge></Col>
                    </Row>
                  </Card.Text>
                </Card.Body>
              </Card>

              </Col>
              <Col style={{ padding: '10px' }}>

              <Card style={{ width: '16rem' }}>
                <Card.Img style={{ height: '15rem' }} variant="top" src="https://steamuserimages-a.akamaihd.net/ugc/918042871153508715/BA9058FD48450707B232AD72DDC927C4C88E95AB/" />
                <Card.Body>
                  <Card.Title>NAME: Gudetama</Card.Title>
                  <Card.Text>
                    Maybe their language!
                    <br/>
                    Maybe their department!
                    <br/>
                    List their similar interests!
                    <Row>
                      <Col><Badge variant="info">Cats</Badge></Col>
                      <Col><Badge variant="info">Blooging</Badge></Col>
                    </Row>
                    <Row>
                      <Col><Badge variant="info">Food</Badge></Col>
                      <Col><Badge variant="info">Sleep</Badge></Col>
                    </Row>
                  </Card.Text>
                </Card.Body>
              </Card>

              </Col>
              <Col style={{ padding: '10px' }}>

              <Card style={{ width: '16rem' }}>
                <Card.Img style={{ height: '15rem' }} variant="top" src="https://steamuserimages-a.akamaihd.net/ugc/918042871153508715/BA9058FD48450707B232AD72DDC927C4C88E95AB/" />
                <Card.Body>
                  <Card.Title>NAME: Gudetama</Card.Title>
                  <Card.Text>
                    Maybe their language!
                    <br/>
                    Maybe their department!
                    <br/>
                    List their similar interests!
                    <Row>
                      <Col><Badge variant="info">Cats</Badge></Col>
                      <Col><Badge variant="info">Blooging</Badge></Col>
                    </Row>
                    <Row>
                      <Col><Badge variant="info">Food</Badge></Col>
                      <Col><Badge variant="info">Sleep</Badge></Col>
                    </Row>
                  </Card.Text>
                </Card.Body>
              </Card>


              </Col>
            </Row>
          </UncontrolledCollapse>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  </div>
);

//Exporting the File
export default ProfileMatch;
