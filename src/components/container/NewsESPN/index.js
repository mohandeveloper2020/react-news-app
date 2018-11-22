import React, { Component } from 'react';
import NewsList from '../../NewsList';

class NewsESPN extends Component {

  state = {
    news : []
  }

  componentDidMount(){
    fetch('https://newsapi.org/v2/top-headlines?sources=espn-cric-info&apiKey=6c13a32e23b643989e19a722674ca873')
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

  render(){
    return(
      <div>
        <p className="App-intro">
          Top headlines from <strong>'ESPN Cric Info'</strong>
        </p>
        <NewsList list={this.state.news}/>
      </div>
    )
  }
}

export default NewsESPN;
