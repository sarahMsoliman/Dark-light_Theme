import React, { Component } from 'react';
import './App.css';
import Router from './Router'
import { getLocalStorage } from './Utilities/LocalStorage/LocalStorage'
import { Helmet } from 'react-helmet';

class App extends Component {
  constructor() {
    super();

    this.state = { theme: getLocalStorage('theme')};
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
        <Helmet>
          <body class={this.state.theme === 'dark'? 'darkTheme' : null} />
        </Helmet>
      </div>
    );
  }
}

export default App;
