import React, { Component } from 'react';

class TestMapUsers extends Component {

  state = {
    users: []
  }

  componentDidMount() {
    fetch('/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        "query": "{users { id firstName lastName}}", "variables": null
      })
    })
      .then(r => r.json())
      .then(y => {
        this.setState({ users: y.data.users })
      })
    //can do a console log for visual 
    console.log(this.state);
  }

  render() {

    return (
      <div className="App">
        <h1>Users</h1>
        {this.state.users.map(user =>
          (<div key={user.id}>{user.firstName} {user.lastName}</div>)
        )}
      </div>

    )
  }
}

export default TestMapUsers;