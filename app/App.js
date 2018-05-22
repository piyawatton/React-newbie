import React, { Component } from 'react';
import logo from './logo.svg';
import Title from './Component/Title'
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Title text={'Hello CPu_PiPe'} />

      </div>
    );
  }
}

export default App;