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
        "query": "{users { id name }}", "variables": null
      })
    })
      .then(r => r.json())
      .then(y => {
        this.setState({ users: y.data.users })
      })

  }

  render() {
    return (
      <div className="App">
        <h1>Users</h1>
        {this.state.users.map(user =>
          <div key={user.id} value={user.name}>{user.name}</div>
        )}
      </div>
    );
  }
}

export default App;