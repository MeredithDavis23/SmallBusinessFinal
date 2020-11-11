import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from "./Redux/Store"
// import Login from './Components/Login'
import NavBar from './Containers/NavBar'
import Router from './Router'
import "./App.css";

// require('dotenv').config()

function App() {
  return (
    <div className="App">
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
        <Router />
        </BrowserRouter>
    </Provider>
      
    </div>
  );
}

export default App;
