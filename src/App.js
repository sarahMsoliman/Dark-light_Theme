import React, { Component } from 'react';
import './App.css';
import Router from './Router'
import { getLocalStorage } from './Utilities/LocalStorage/LocalStorage'

class App extends Component {
  constructor() {
    super();

    this.state = { theme: getLocalStorage('theme')};
  }

  // componentDidMount(){
  //   debugger;
  //   this.updateState()
  // }

   updateState(){
    var currentTheme = getLocalStorage('theme');
    this.setState({
      theme: currentTheme
    })
  }

  render() {
    return (
      <div className={this.state.theme === 'dark'? 'App darkTheme' : 'App'}>
        <Router updateAppState={this.updateState.bind(this)} />
      </div>
    );
  }
}

export default App;
