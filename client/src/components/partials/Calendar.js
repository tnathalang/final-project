import React, { Component } from 'react';


class Calendar extends Component {


  render(){
    return(
      <div>
        <iframe
          src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=tcd0ipu9tmb25b4k1opq6pi024%40group.calendar.google.com&amp;color=%2342104A&amp;ctz=America%2FToronto"
          width="800"
          height="600"
          frameborder="0"
          scrolling="no">
        </iframe>
        <p>
          <a href="https://calendar.google.com/calendar/r/eventedit?sf=true"
            class="cta gmail-show">Save the date</a>
        </p>
      </div>
    )
  }
}


export default Calendar;
