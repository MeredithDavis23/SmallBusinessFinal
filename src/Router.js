import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router'
import Login from './Components/Login'
import cookie from "cookie";
import Details from './Components/Details'
import AddListing from './Components/AddListing'
import Listing from './Containers/Listing'
// import { Reddit } from '@material-ui/icons'

const checkAuth = () => {
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
            <ProtectedRoute path="/Details" component={Details} />
        </Switch>
    );
};

export default Router;