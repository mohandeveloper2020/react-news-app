import React, { Component } from 'react';
import world from '../../world.svg';
import './index.css';
import NewsList from '../NewsList';

class App extends Component {

  state = {
    news : []
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
          //console.log(json.articles)
          this.setState({ news : json.articles })
        }
      )
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={world} className="App-logo" alt="world" />
          <h1 className="App-title">React News App</h1>
        </header>
        <p className="App-intro">
          Top headlines from <strong>'TechCrunch'</strong>
        </p>
        <NewsList list={this.state.news}/>
      </div>
    );
  }
}

export default App;
