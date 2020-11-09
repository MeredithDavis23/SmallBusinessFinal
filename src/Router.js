import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router'
import Login from './Containers/Login'
import cookie from "cookie";
import Details from './Containers/Details'
import AddListing from './Containers/AddListing'
import Listing from './Containers/Listing'

export const checkAuth = () => {
    const cookies = cookie.parse(document.cookie);
    return cookies["loggedIn"] ? true : false;
};

const ProtectedRoute = ({ component: Component, ...rest }) => {
    return (
        <Route 
        {...rest}
        render={(props) => 
        checkAuth() ? <Component {...props} /> : <Redirect to="/Login" />
        }
        />
    )
}

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Listing} />
            <Route path="/Login" component={Login} />
            <ProtectedRoute path="/AddListing" component={AddListing} />
            <Route path="/Details/:id" component={Details} />
        </Switch>
    );
};

export default Router;