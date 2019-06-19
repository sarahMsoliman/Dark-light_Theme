import React, { Component } from 'react';
import './App.css';
import Router from './Router'
import { getLocalStorage } from './Utilities/LocalStorage/LocalStorage'

class App extends Component {
  constructor() {
    super();

    this.state = { theme: false};
  }

  componentDidMount(){
    this.updateState()
  }

  updateState(){
    var currentTheme = getLocalStorage();
    this.setState({
      theme: currentTheme
    })
  }

  render() {
    return (
      <div className="App">
        <Router />
      </div>
    );
  }
}

export default App;
