import React, { Component } from "react";
import { slide as Menu } from 'react-burger-menu'
import Image from 'react-bootstrap/Image'
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import '../../assets/styles/SideBar.css'




const USERS_QUERY = gql`
query {
    users {
        id
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
            <div pageWrapId={"page-wrap"}>
              <main id="page-wrap">
                <Menu
                  isOpen={true}
                  noOverlay
                  customBurgerIcon={false}
                  customCrossIcon={false}
                >
                  {data.users.map((user) => {
                    return <div key={user.id}>
                      <Image
                        src={`https://robohash.org/${user.email}.png?set=set4`}
                        roundedCircle
                        fluid
                      />
                      <div style={{ padding: '20px' }} >
                        <h3 id="about" className="menu-item">{user.firstName} {user.lastName} </h3>
                        <br />
                        <h4 id="about" className="menu-item"> {user.email}</h4>
                        <br />
                        <ul id="about" className="menu-item"> <h4>Interests</h4>
                          {user.interests.map((el =>
                            <li>{el.topic}</li>
                          ))} </ul>
                        <br />
                      </div>
                    </div>
                  })}
                </Menu>
              </main>
            </div>
          )
        }}
      </Query>
    );
  }
}

export default SideBar;
