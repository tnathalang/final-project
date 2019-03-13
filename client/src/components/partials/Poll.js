import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import { Button, Card, Form } from 'react-bootstrap';


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
  comeUpClick(event) {
    event.preventDefault();
    let id = this.props.id
    let newanswer = {
      id: id,
      comeUp: true
    }
    if (!this.state.comeUp) {
      this.setState((prevState, props) => {
        return {
          listofanswers: { id: newanswer },
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


  render() {

    const flip = this.state.joined ? 'See you then!' : 'Join?'

    return (

      <Card
        id={this.props.id}
        class="shadow-sm"
        style={{
          width: '18rem',
          margin: 'auto',
          backgroundColor: 'white	',
          color: 'grey',
          border: '#7f7f7f',
          borderRadius: '10px'
        }}
      >

        <Card.Body>
          <Card.Header>{this.props.user.first_name} {this.props.user.last_name} says: </Card.Header>
          <div style={{ backgroundColor: 'white', borderRadius: '10px' }}>
            <Card.Title style={{ margin: 'auto' }}><br />{this.props.title}: </Card.Title>
            <br />
            <Card.Text>
              {this.props.description}
            </Card.Text>
            <br />
          </div>

          <br />
          <Card.Subtitle>

            <Form style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

              <Button
                type="checkbox"
                variant="outline-dark"
                size="sm"
                onClick={(e) => {
                  this.comeUpClick(e, this.props.id)
                  this.handleClick(e)
                }}
              >
                {flip}
              </Button>
              <div>{this.state.come}</div >

            </Form>
          </Card.Subtitle>
        </Card.Body>
      </Card>

    )
  }
}


export default Poll;
