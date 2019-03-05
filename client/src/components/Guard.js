import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from 'react-router-dom'

const App = () => <App />

class Guard extends Component {
    render() {
        return (
            <div>
                Login
            </div>
        )
    }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        // authenticate === true 
        ? <Component {...props} />
            // render App.js
            : <Redirect to='/login' />
    )} />
)

// export default Guard