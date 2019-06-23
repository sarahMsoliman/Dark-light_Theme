import React, { Component } from 'react';
import './App.css';
import Router from './Router'
import { getLocalStorage } from './Utilities/LocalStorage/LocalStorage'

class App extends Component {
  constructor() {
    super();

    this.state = { theme: 'light'};
  }

  componentDidMount(){
    this.updateState()
  }

   updateState(){
    var currentTheme = getLocalStorage('theme');
    this.setState({
      theme: currentTheme
    })
  }

  render() {
    return (
      <div className="App">
        <Router updateAppState={this.updateState.bind(this)} />
      </div>
    );
  }
}

export default App;
