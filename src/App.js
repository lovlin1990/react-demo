import React, { Component } from 'react';
import logo from './logo.svg';
import { Button } from 'antd';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            欢迎 Hello World.
          </p>
            <Button type="primary">提交</Button>
          <a href="">dddd</a>
        </header>
      </div>
    );
  }
}

export default App;
