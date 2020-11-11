import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import Login from './Containers/Login'
import Details from './Containers/Details'
import AddListing from './Containers/AddListing'
import Listing from './Containers/Listing'
import { checkAuth } from './checkAuth'



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
            <Route path="/Details/:id" component={Details} />
            <ProtectedRoute path="/AddListing" component={AddListing} />
        </Switch>
    );
};

export default Router;