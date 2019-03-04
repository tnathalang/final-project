import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Gravatar from 'react-gravatar';


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

class Users extends Component {
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
                                    <Gravatar email={user.email} size={100} />
                                    <div>
                                        <div>{user.firstName}</div>
                                        <div>{user.lastName}</div>
                                        <p>{user.email}</p>
                                        <ul>{user.interests.map((el => <li>{el.topic}</li>
                                        ))}
                                        </ul>
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

export default Users;