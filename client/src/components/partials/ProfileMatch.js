import React, { Component } from 'react';
import { UncontrolledCollapse, Button, Row, Col, Container, CardSubtitle, CardLink } from 'reactstrap';
import { Card, Badge } from 'react-bootstrap';
import axios from 'axios';
import Auth from '../../modules/Auth';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../assets/styles/App.css';
import _ from 'lodash';


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
        const users = response.data.map(u => {
          const interestInCommon = _.intersection(interestsArray, u.interests.map(x => x.topic)).length
          return {
            ...u, interestInCommon
          }
        }).filter(u => u.interestInCommon > 0).sort((a, b) => b.interestInCommon - a.interestInCommon)
        // const users = response.data.filter(x => x.interests.filter(y => { return (interestsArray).indexOf(y.topic) >= 0 }).length > 0)
        console.log(users)
        this.setState({ users: users })
      })
      .catch(error => console.log(error));
  }


  render() {

    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
          }
        }
      ]
    };

    return (
      <div>
        <Container >
          <Row>
            <Col style={{ padding: '10px' }}></Col>
            <Col xl={12}>

              <div class="input-group"><h2>My Matches</h2>


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

                      <Card style={{ width: '16rem', margin: 'auto' }}>
                        <Card.Img style={{ height: '15rem' }} variant="top" src={user.avatar_url} />
                        <Card.Body>
                          <Card.Title>
                            {user.first_name} {user.last_name}
                          </Card.Title>
                          <CardSubtitle>
                            {user.email}
                          </CardSubtitle>
                          <Card.Text>
                            {user.interests.map(interest => {
                              return (
                                <Row>
                                  <Col><Badge variant="info">{interest.topic}</Badge></Col>
                                </Row>
                              )
                            })}
                            <CardSubtitle style={{ marginTop: "0.25em" }}>
                              Common Interest(s): {user.interestInCommon}
                            </CardSubtitle>
                            <a class="btn btn-secondary btn-lg active btn-sm" style={{ marginTop: "0.25em" }}
                              href={`mailto:${user.email}`}>Link With Me</a>

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
