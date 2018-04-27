import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/navbar';
import Main from './Components/Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Main />
      </div>
    );
  }
}

export default App;
