import React, { Component } from 'react';
import { UncontrolledCollapse, Button, Row, Col, Container } from 'reactstrap';
import { Card, Badge } from 'react-bootstrap';
import axios from 'axios';
import Auth from '../../modules/Auth';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../assets/styles/App.css'


class ProfileMatch extends Component {

  state = { users: [] }

  componentDidMount() {
    console.log(Auth.getToken());
    const instance = axios.create({
      baseURL: 'http://localhost:3001',
      timeout: 1000,
      headers: {
        'token': Auth.getToken(),
        'Authorization': `Token token=${Auth.getToken()}`
      }
    });
    instance
      .get("/users.json")
      .then(response => {
        const interestsArray = this.props.interests.map(x => x.topic)
        console.log(interestsArray)
        //map first then adds numbers of comnmon interests, sort on key of the obejct 
        //find a way to count numbers of interests in common
        //sort according to the number
        const users = response.data.filter(x => x.interests.filter(y => { return (interestsArray).indexOf(y.topic) >= 0 }).length > 0)
        console.log(users)
        this.setState({ users: users })
      })
      .catch(error => console.log(error));
  }


  render() {

    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: 'unslick',
        }
      ]
    };

    return (
      <div>
        <Container >
          <Row>
            <Col style={{ padding: '10px' }}></Col>
            <Col xl={12}>
              <div class="input-group"><h2>Your Matches</h2>

                <Button style={{ marginLeft: '20px', marginBottom: '1rem' }} outline color="info" id="toggler">
                  ▽
              </Button>
              </div>
              {/*Toggle buttons for refreshing the search and/or  inverting the search*/}
              <UncontrolledCollapse toggler="#toggler">
                {/* <Row>
                  <Col>
                    <Button style={{ margin: '10px', marginBottom: '1rem' }} outline color="success">
                      Refresh ↻
                  </Button>

                    <Button style={{ margin: '10px', marginBottom: '1rem' }} outline color="danger">
                      Invert ⇄
                  </Button>
                  </Col>
                </Row> */}


                <Slider {...settings}>

                  {this.state.users.map((user) =>
                    <Col style={{ padding: '10px' }}>

                      <Card style={{ width: '16rem' }}>
                        <Card.Img style={{ height: '15rem' }} variant="top" src={`https://robohash.org/${user.email}.png?set=set4`} />
                        <Card.Body>
                          <Card.Title> {user.first_name} {user.last_name} {user.email}</Card.Title>
                          <Card.Text>
                            {user.interests.map(interest => {
                              return (
                                <Row>
                                  <Col><Badge variant="info">{interest.topic}</Badge></Col>
                                </Row>
                              )
                            })}
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  )}

                </Slider>

              </UncontrolledCollapse>
            </Col>
          </Row>
        </Container>
      </div >
    )
  }
};

export default ProfileMatch;
