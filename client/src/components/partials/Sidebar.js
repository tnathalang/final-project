import React, { Component } from "react";
import { slide as Menu } from 'react-burger-menu'
import Image from 'react-bootstrap/Image'
import '../../assets/styles/SideBar.css'
import axios from 'axios'


class SideBar extends Component {

  componentDidMount() {
    axios
      .get("")
      .then(response => {
        console.log(response);
        this.setState({
          users: response.data
        });
      })
      .catch(error => console.log(error));
  }


  render() {
    const { user, interests } = this.props
    console.log("what is user", user)
    console.log("what is interest", interests)
    return (
      <div className="App">
        <div pageWrapId={"page-wrap"}>
          <main id="page-wrap">
            <Menu
              isOpen={true}
              noOverlay
              customBurgerIcon={false}
              customCrossIcon={false}
            >
              <div>
                <Image
                  src={`https://robohash.org/${user.email}.png?set=set4`}
                  roundedCircle
                  fluid
                />
              </div>
              <div style={{ padding: '20px' }}>
                <h3 id="about" className="menu-item">{user.first_name} {user.last_name}</h3>
                <br />
                <h4 id="about" className="menu-item"> {user.email} </h4>
                <br />
                <h4 id="about" className="menu-item"> Interests </h4>
                {interests.map(interest => { return (<div>{interest.topic}</div>) })}
                <br />
              </div>
            </Menu>
          </main>
        </div>
      </div>
    )
  }
}

export default SideBar;
