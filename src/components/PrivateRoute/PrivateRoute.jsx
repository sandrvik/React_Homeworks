import React from 'react';
import { Redirect, Route } from 'react-router-dom'

export const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props => {
                return (
                    isAuthenticated ? (
                        <Component {...props} {...rest} />
                    ) : (
                        <Redirect to="/signin" />
                    )
                )
            }}
        />
    )
}