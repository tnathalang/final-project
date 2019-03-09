import React, { Component } from 'react';
import { UncontrolledCollapse, Button, Row, Col, Container } from 'reactstrap';
import { Card, Badge } from 'react-bootstrap';
import axios from 'axios';


class ProfileMatch extends Component {


  componentDidMount() {
    axios
      .get("http://localhost:3001/users.json")
      .then(response => {
        console.log(response);
        this.setState({
          resources: response.data
        });
      })
      .catch(error => console.log(error));
  }

  // currentUser.interests.map(Cinterest => {
  // if(databseUser.interest.map(DBinterest => {
  // if (DBinterest === Cinterest) {
  //  return databseUser
  // }
  // })
  // })

  render() {

    const { user, interests } = this.props

    const myMatches = [
      {
        first_name: user.first_name,
        last_name: user.last_name,
        image: `https://robohash.org/${user.email}.png?set=set4`,
        interests: interests.topic
      },
    ];

    return (
      <div>
        <Container >
          <Row>
            <Col style={{ padding: '10px' }}></Col>
            <Col xl={12}>

              {/* Toggle button to drop down the cards */}

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
                    {myMatches.map((data) =>
                      <Card style={{ width: '16rem' }}>
                        <Card.Img style={{ height: '15rem' }} variant="top" src={data.image} />
                        <Card.Body>
                          <Card.Title>NAME: {data.first_name} {data.last_name}</Card.Title>
                          <Card.Text>
                            {interests.map(interest => {
                              return (
                                <Row>
                                  <Col><Badge variant="info">{interest.topic}</Badge></Col>
                                </Row>
                              )
                            })}

                          </Card.Text>
                        </Card.Body>
                      </Card>
                    )}
                  </Col>
                </Row>
              </UncontrolledCollapse>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
    )
  }
};

//Exporting the File
export default ProfileMatch;
