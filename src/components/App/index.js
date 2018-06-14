import React, { Component } from 'react';
import world from '../../world.svg';
import './index.css';
import NewsTechCrunch from '../container/NewsTechCrunch';
import NewsUS from '../container/NewsUS';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={world} className="App-logo" alt="world" />
          <h1 className="App-title">React News App</h1>
        </header>

        <NewsTechCrunch />
        <NewsUS />

        <footer className="App-header">
          <p>Footer section</p>
        </footer>
      </div>
    );
  }
}

export default App;
