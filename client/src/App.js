import React, { Component } from 'react';
import './assets/styles/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import TestForm from './components/partials/TestForm.js'
import TestMapUsers from './components/partials/TestMapUsers.js'


<<<<<<< HEAD
class App extends Component {
=======
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
>>>>>>> 81dfe96a11bc416ba2744d0d461b62be99756e0e

  render() {
    return (
      <div className="App">
<<<<<<< HEAD
          <TestMapUsers />

        {/* Form for testing */}
          < TestForm />

=======
        <h1>Users</h1>
        {this.state.users.map(user =>
          <div key={user.id} value={user.firstName}>{user.firstName} {user.lastName} {user.email}</div>
        )
        }
>>>>>>> 81dfe96a11bc416ba2744d0d461b62be99756e0e
      </div>
    );
  }
}

export default App;