import React, { Component } from 'react';
import './App.css';

class App extends Component {

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
        "query": "{users { id firstName lastName email }}", "variables": null
      })
    })
      .then(r => r.json())
      .then(res => {
        this.setState({ users: res.data.users })
      })

  }

  render() {
    return (
      <div className="App">
        <h1>Users</h1>
        {this.state.users.map(user =>
          <div key={user.id} value={user.firstName}>{user.firstName} {user.lastName} {user.email}</div>
        )
        }
      </div>
    );
  }
}

export default App;