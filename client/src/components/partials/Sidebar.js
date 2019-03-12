import React, { Component } from "react";
import { slide as Menu } from 'react-burger-menu'
import Image from 'react-bootstrap/Image'
import '../../assets/styles/SideBar.css'


class SideBar extends Component {


  render() {
    const { user, interests } = this.props
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
                  src={user.avatar_url}
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
