import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from "./Redux/Store"
// import Login from './Components/Login'
import NavBar from './Components/NavBar'
import Router from './Router'

function App() {
  return (
    <div className="App">
    <Provider store={store}>
      <BrowserRouter>
        <div>
        <NavBar />
        </div>
        <Router />
        </BrowserRouter>
    </Provider>
      
    </div>
  );
}

export default App;
