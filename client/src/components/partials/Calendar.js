import React, { Component } from 'react';
import { UncontrolledCollapse, Button, Row, Col, Container, CardSubtitle, CardLink } from 'reactstrap';
import { Card, Badge } from 'react-bootstrap';

class Calendar extends Component {


  render(){
    return(
      <div>
      <Container>
        <div class="input-group"><h2>View My Calendar</h2>

          <Button style={{ marginLeft: '20px', marginBottom: '1rem' }} outline color="info" id="cald">
            ▽
        </Button>
        </div>
        {/*Toggle buttons for refreshing the search and/or  inverting the search*/}
        <UncontrolledCollapse toggler="#cald">

          <iframe
            src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=tcd0ipu9tmb25b4k1opq6pi024%40group.calendar.google.com&amp;color=%2342104A&amp;ctz=America%2FToronto"
            width="800"
            height="600"
            frameborder="0"
            scrolling="no"
            style= {{backgroundColor: '#d1e1df'}}>
          </iframe>

          <p>
          <br/>
            <Button
              target="_blank"
              href="https://calendar.google.com/calendar/r/eventedit?sf=true"
              class="cta gmail-show"
              outline color="primary"
            >Save the Date!
            </Button>
          </p>
          </UncontrolledCollapse>
        </Container>

      </div>
    )
  }
}


export default Calendar;
