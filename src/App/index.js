import React, { Component } from 'react';
import logo from '../logo.svg';
import './index.css';
import SeriesList from '../components/SeriesList';

class App extends Component {

  state = {
    series : []
  }

  componentDidMount(){
    fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=6c13a32e23b643989e19a722674ca873')
      .then(
        (response) => {
          //console.log(response)
          return response.json()
        }
      )
      .then(
        (json) => {
          console.log(json.articles)
          this.setState({ series : json.articles })
        }
      )
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React News App</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          The length is {this.state.series.length}          
        </p>
        <SeriesList list={this.state.series}/>
      </div>
    );
  }
}

export default App;
