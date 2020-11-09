import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import AddListing from "./AddListing"

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false,
    }
  }
    handleClick = (e) => {
    e.preventDefault()
    document.cookie = "loggedIn=true;max-age=60*1000";
      this.setState({
        loggedIn: true,
      })
    }
    render() {
      if(this.state.loggedIn === true) {
        return <AddListing />
      }
      return (
        <div className="App">
          <div className="login">
              <TextField
                className="username"
                id="username"
                placeholder="username"
                margin="normal"
                variant="outlined"
              ></TextField>
              <TextField
                className="password"
                id="password"
                placeholder="password"
                type="password"
                margin="normal"
                variant="outlined"
                color="white"
              ></TextField>
              <Button
                onClick={this.handleClick}
                variant="contained"
                color="primary"
              >
                Login
              </Button>
            </div>
        </div>
      );
      }
    }
  
  export default Login
    

