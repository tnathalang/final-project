import React from "react";
import { Card, Button, Badge, Row, Col} from 'react-bootstrap';

//Made with react-Bootstrap
//Hard coded, will generate with database data after

class ProfileMatchCard extends React.Component {
  render () {

    return (
          // Profile Match Card
          <div>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://steamuserimages-a.akamaihd.net/ugc/918042871153508715/BA9058FD48450707B232AD72DDC927C4C88E95AB/" />
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
                <Button variant="primary">Invite to Lunch</Button>
              </Card.Body>
            </Card>;
          </div>
    )
  }
}

export default ProfileMatchCard;
