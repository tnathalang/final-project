import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import { Button, Card, Form} from 'react-bootstrap';
import NewPoll from "./NewPoll.js"
import Poll from "./Poll.js"
//THE ACTUAL LIST OF ALL THE POLLS RENDERED



class ListOfPolls extends React.Component {

  render () {

      return (

      <div>
        <Container>
          <Row>
            <Col style={{ padding: '10px' }}></Col>
            <Col xl={12}>

                <Row style={{ padding: '10px' }}>


                {this.props.polls.map((data) =>
                  <Col style={{ padding: '10px' }}>


//POLL CARD
                  <Poll {...data} />


                  </Col>
  )}

                </Row>

            </Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

//Exporting the File
export default ListOfPolls;
