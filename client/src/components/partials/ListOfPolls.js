import React, {Component}from 'react';
import { Row, Col, Container } from 'reactstrap';
import { Card, Form} from 'react-bootstrap';

//Profile Match container is made with reactstrap
//The cards generated are hardCoded, these are made with reactBootstrap.
//When we render we will delete tese hard coded nd import the fie from Profile Match card
//map over my card to render it

//deleting later
// const myCard = [{
//   userName: 'George',
//   title: 'Hey Bloogers',
//   description: "LUNCH! Let's Do It! 12:00pm! 4th floor!"
// },
// {
//   userName: 'Boy',
//   title: 'CRY',
//   description: "ALONE!"
// }];

//above, pull from the db
//under, in the component do a fetch
//will go to the route
class ListOfPolls extends Component {
  render(){
    return(
      <div>
        {this.props.polls.map((data) =>
          <div>
          <Container>
            <Row>
            <Col style={{ padding: '10px' }}></Col>
            <Col xl={12}>

{/*Poll Cards generated*/}
            <Row style={{ padding: '10px' }}>
              <Col style={{ padding: '10px' }}>
            <Card border="success"style={{ width: '18rem' }}>
              <Card.Header>{data.userName} Says:</Card.Header>
                <Card.Body>
                  <Card.Title>{data.title}</Card.Title>
                  <Card.Text>
                    {data.description}
                  </Card.Text>
                </Card.Body>
              <Card.Footer>
              <Form>
                {['checkbox'].map(type => (
                <div key={`default-${type}`} className="mb-3">
                  <Form.Check
                  type={type}
                  id={`default-${type}`}
                  label={`Join!`}
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
        )}
      </div>
    )
  }
}


//Exporting the File
export default ListOfPolls;
