import React, {useEffect} from "react";
import { createStyles, makeStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { Link } from 'react-router-dom'
// import NavBar from '../Containers/NavBar'
// import Button from '@material-ui/core/Button'
import { checkAuth } from '../checkAuth'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    // menuButton: {
    //   marginRight: theme.spacing(2),
    // },
    title: {
      flexGrow: 1,
    },
    // margin: {
    //   margin: theme.spacing(3),
    // },
  })
);

const NavBar = (props) => {
  const classes = useStyles();

  useEffect(() => {
    console.log(typeof props.user);
    console.log(checkAuth())
  });


  return (
    <React.Fragment>
    <div className={classes.root}>
      <AppBar position="relative">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="#4040a1"
            aria-label="menu"
          >
          </IconButton>
          <Typography variant="h6" className={classes.title} id="title">
            Austin Small Business 
          </Typography>
          <ul className="nav-list">
                    <li className="nav-list-item">
                        <Link to="/">Listings</Link>
                    </li>
                    {checkAuth() && (
                        <li className="nav-list-item">
                            <Link to="/AddListing">Add Restaurant</Link>
                        </li>
                    )}
                    {checkAuth() ? (
                         <li className="nav-list-item"
                         onClick={() => {
                             document.cookie = "loggedIn="
                             window.location.replace("/login")
                         }}
                         >
                             <Link to="/login">Logout</Link>
                         </li>
                    ) : (
                    <li className="nav-list-item">
                        <Link to="/Login">Login</Link>
                    </li>
                      )}
                </ul>
        </Toolbar>
      </AppBar>
    {checkAuth() && (
      <h4>Welcome, {props.user}</h4>
    )}
    </div>
  </React.Fragment>
  );
}

export default NavBar
