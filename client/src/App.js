import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

class App extends Component {

  state = {
    users: []
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