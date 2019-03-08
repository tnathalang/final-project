import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import { Button, Card, Form} from 'react-bootstrap';
import NewPoll from "./NewPoll.js"

//THE ACTUAL LIST OF ALL THE POLLS RENDERED

//hard coded 'likes'



class ListOfPolls extends React.Component {
  constructor(props) {
    super(props);

//STATE FOR THE LIKE BUTTON
    this.state = {
      joined: false,
      like: 0,
      likeUp: false
      //polls: this.props.polls,
    };
    this.handleClick = this.handleClick.bind(this);
    this.likeUp = this.likeUpClick.bind(this);
    // this.likeDown = this.likeDown.bind(this);
  }

//CLICK EVENT FOR THE LIKE BUTTON
  handleClick(event) {
    event.preventDefault();
      if (this.setState) {
        this.setState({
          joined: !this.state.joined,
        })
      }
  }

  likeUpClick(event){
      event.preventDefault();
        if (this.setState) {
          this.setState({
            like: this.state.like += 1,
            likeUp: this.state.likeUp = true,
          })
        } else {
          this.setState({
            like: this.state.like -= 1,
            likeUp: this.state.likeUp = false
          })
        }
  }

  // likeUp(event){
//}

  render () {

    const flip = this.state.joined ? 'See you then!' : 'Join?'


      return (

      <div>
        <Container>
          <Row>
            <Col style={{ padding: '10px' }}></Col>
            <Col xl={12}>

                <Row style={{ padding: '10px' }}>


                {this.props.polls.map((data) =>
                  <Col style={{ padding: '10px' }}>
                    <Card
                    border="dark"
                    bg="info"
                    text="white"
                    style={{ width: '18rem' }}>
                      <Card.Header>{data.userName} Says:</Card.Header>
                      <Card.Body>
                        <Card.Title>{data.title}</Card.Title>
                        <Card.Text>
                        {data.description}
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer>

                      <Form style={{display:'flex', alignItems:'center', justifyContent: 'space-between'}}>

                        <Button
                          type="checkbox"
                          variant="outline-light"
                          onClick={this.handleClick}
                          onClick= {this.likeUpClick}
                        >
                          {flip}
                        </Button>
                        <div>{this.state.like}</div >

                      </Form>
                      </Card.Footer>
                    </Card>
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


// <Form>
//   {['checkbox'].map(type => (
//     <div key={`default-${type}`} className="mb-3">
//       <Form.Check
//         type={type}
//         id={`default-${type}`}
//         label={`Yes!`}
//       />
//
//     </div>
//   ))}
//   </Form>
