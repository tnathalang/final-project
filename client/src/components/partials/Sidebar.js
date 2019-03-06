import React, { Component } from "react";
import { slide as Menu } from 'react-burger-menu'
import Image from 'react-bootstrap/Image'
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import '../../assets/styles/SideBar.css'


const USERS_QUERY = gql`
query {
    users {
        firstName
        lastName
        email
        interests {
            topic
        }
    }
}`

class SideBar extends Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <Query query={USERS_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching..</div>
          if (error) return <div>Error!</div>
          return (
            <div>
              {data.users.map((user) => {
                return <div key={user.id}>
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
                          <h3 id="about" className="menu-item">{user.firstName} {user.lastName}</h3>
                          <br />
                          <h4 id="about" className="menu-item"> {user.email} </h4>
                          <br />
                          <h4 id="about" className="menu-item"> Interests </h4>
                          <br />
                          <ul>{user.interests.map((el =>
                            <li id="contact" className="menu-item">{el.topic}</li>
                          ))}
                          </ul>
                        </div>
                      </Menu>
                    </main>
                  </div>
                </div>
              })}
            </div>
          )
        }}
      </Query>
    )
  }
}

export default SideBar;
