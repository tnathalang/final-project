import React from "react";
import { slide as Menu } from 'react-burger-menu'
import Image from 'react-bootstrap/Image'


//import {  } from 'react-bootstrap';

import '../../assets/styles/SideBar.css'



class SideBar extends React.Component {

  showSettings (event) {
    event.preventDefault();

  }

  render() {
    return (
      <div pageWrapId={ "page-wrap" }>
        <main id="page-wrap">
          <Menu
            isOpen={ true }
            noOverlay
            customBurgerIcon={ false }
            customCrossIcon={ false }
          >
            <div>
  {/*HARDCODED PROFILE FIX AFTER */}

              <Image
                src="https://dsimg.wowjpn.goo.ne.jp/rs/?src=https://wow-j.com/images/ext/allguides/01750/01750_001.jpg&maxw=770&maxh=0&resize=1"
                roundedCircle
                fluid
              />
            </div>
            <div style={{ padding: '20px'}}>
                <h3 id="about" className="menu-item"> USER NAME LEARN TO CENTER IT </h3>
                <br />
                <h4 id="about" className="menu-item"> EMAIL </h4>
                <br />
                <h4 id="about" className="menu-item"> Interests </h4>
                <br />
                <p id="contact" className="menu-item">BADGE 1</p>

                <p id="contact" className="menu-item">Badge 2</p>
                <p id="contact" className="menu-item">Badge 3</p>
            </div>
          </Menu>
        </main>
      </div>
    );
  }
}

export default SideBar;
