import React, { useState } from 'react';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
// import AddListing from "./AddListing"

// class Login extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       loggedIn: false,
//     }
//   }

const Login = (props) => {
  const [user, setUser] = useState("");

  const handleChange = (e) => {
    if (e.target.name === "user") {
      setUser(e.target.value);
    } else {
      // setPassword(evt.target.value);
    }
  };
    const handleClick = (e) => {
    e.preventDefault()
    document.cookie = "loggedIn=true; max-age=60*1000";
    props.userLogin(user)
    props.history.push("/")
    }

      return (
        <div className="App">
          <div className="login">
              <TextField
                required 
                onChange={handleChange}
                className="username"
                id="username"
                placeholder="username"
                margin="normal"
                variant="outlined"
              ></TextField>
              <TextField
               required 
               onChange={handleChange}
                className="password"
                id="password"
                placeholder="password"
                type="password"
                margin="normal"
                variant="outlined"
                color="white"
              ></TextField>
              <Button
                onClick={handleClick}
                variant="contained"
                color="primary"
              >
                Login
              </Button>
            </div>
        </div>
      )
    }

  export default Login