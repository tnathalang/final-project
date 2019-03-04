import React from "react";
import { slide as Menu } from 'react-burger-menu'

class SideBar extends React.Component {

  showSettings (event) {
    event.preventDefault();

  }

  render() {
    return (
      <div id="outer-container">
        <main id="page-wrap">
        <Menu
          isOpen={ true }
          noOverlay
          customBurgerIcon={ false }
          customCrossIcon={ false }
        />
          <a id="home" className="menu-item" href="/">Home</a>
          <a id="about" className="menu-item" href="/about">About</a>
          <a id="contact" className="menu-item" href="/contact">Contact</a>
          <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
        </main>
</div>
    );
  }
}

export default SideBar;
