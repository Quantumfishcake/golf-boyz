import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const test = [
  {
    url: 'http',
    image: '',
    name: '',
  },
  {
    url: 'http',
    image: '',
    name: '',
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React!</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <hr />
          <div>{ test.map(text => <div>some static content: {text}</div>) }</div>
        </p>
      </div>
    );
  }
}

export default App;
