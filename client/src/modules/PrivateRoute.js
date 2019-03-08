import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom"
import Auth from './Auth'



function PrivateRoute({ component: Component, ...rest }) {


    return (
        <Route
            {...rest}
            render={props =>
                Auth.isUserAuthenticated() ? (
                    <Component {...props} />
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: props.location }
                            }}
                        />
                    )
            }
        />
    );
}

export default PrivateRoute