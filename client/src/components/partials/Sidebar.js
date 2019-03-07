import React, { Component } from "react";
import { slide as Menu } from 'react-burger-menu'
import Image from 'react-bootstrap/Image'
import '../../assets/styles/SideBar.css'
import axios from 'axios'


class SideBar extends Component {
  state = {
    users: [],
  }

  componentDidMount() {
    axios
      .get("http://localhost:3001/api/v1/users")
      .then(response => {
        console.log(response);
        this.setState({
          users: response.data
        });
      })
      .catch(error => console.log(error));
  }

  //   render() {
  //     return (
  //       <div className="App">
  //         <h1>Users</h1>
  //         {this.state.users.map(user =>
  //           <div key={user.id} value={user.first_name}>{user.first_name}</div>
  //         )}
  //       </div>
  //     );
  //   }
  // }


  render() {
    return (
      <div className="App">
        {this.state.users.map(user =>
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
                  <br />
                </div>
              </Menu>
            </main>
          </div>
        )
        }
      </div>
    )
  }
}

export default SideBar;
