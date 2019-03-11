import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import { Button, Card, Form} from 'react-bootstrap';
import NewPoll from "./NewPoll.js"
import Poll from "./Poll.js"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../assets/styles/App.css'

//THE ACTUAL LIST OF ALL THE POLLS RENDERED



class ListOfPolls extends React.Component {

  render () {
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
       <Slider {...settings}>

         {this.props.polls.map((data) =>
           <Col style={{ padding: '10px' }}>

            <Poll {...data} />


           </Col>
         )}

        </Slider>
      </div>
    );
  }
}

//Exporting the File
export default ListOfPolls;
