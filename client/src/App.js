import React, { Component } from 'react';
import './assets/styles/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import TestForm from './components/partials/TestForm.js'
import TestMapUsers from './components/partials/TestMapUsers.js'


class App extends Component {

  render() {
    return (
      <div className="App">
          <TestMapUsers />

        {/* Form for testing */}
          < TestForm />

      </div>
    );
  }
}

export default App;