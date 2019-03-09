import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import { Button, Card, Form} from 'react-bootstrap';


class Poll extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      joined: false,
      come: 0,
      comeUp: false,
      listofanswers: {}
    };
    console.log(props)
    this.handleClick = this.handleClick.bind(this);
    this.comeUpClick = this.comeUpClick.bind(this);
  }



  //Click Event for the Join up and Don
  comeUpClick (event) {
    event.preventDefault();
    let id = this.props.id
    let newanswer = {
        id: id,
        comeUp: true
    }
    if(!this.state.comeUp) {
      this.setState((prevState, props) => {
        return {
          listofanswers : {id:newanswer},
          come: prevState.come + 1,
          comeUp: true,
        };
      });
    } else {
      this.setState((prevState, props) => {
        return {
          come: prevState.come - 1,
          comeUp: false,
        };
      });
    }
  }

  //CLICK EVENT FOR THE join BUTTON
  handleClick(event) {
    event.preventDefault();
    this.setState({
      joined: !this.state.joined
    });
  }


  render () {

    const flip = this.state.joined ? 'See you then!' : 'Join?'

    return (

      <Card
      id={this.props.id}
      border="dark"
      bg="info"
      text="white"
      style={{ width: '18rem' }}
      >


        <Card.Header>{this.props.userName} Says:</Card.Header>
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>
          {this.props.description}
          </Card.Text>
        </Card.Body>
        <Card.Footer>

        <Form style={{display:'flex', alignItems:'center', justifyContent: 'space-between'}}>

          <Button
            type="checkbox"
            variant="outline-light"
            onClick= {(e) => {
              this.comeUpClick(e,this.props.id)
              this.handleClick(e)
            }}
          >
            {flip}
          </Button>
          <div>{this.state.come}</div >

        </Form>
        </Card.Footer>
      </Card>

    )
  }
}


export default Poll;
