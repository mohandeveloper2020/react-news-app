import React, { Component } from 'react';
import NewsList from '../../NewsList';

class NewsGoogle extends Component {

  state = {
    news : []
  }

  componentDidMount(){

    const google = `https://newsapi.org/v2/top-headlines?sources=google-news-in&apiKey=6c13a32e23b643989e19a722674ca873`;
    //const techcrunch = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=6c13a32e23b643989e19a722674ca873`;
    //const us = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=6c13a32e23b643989e19a722674ca873`;

    fetch(`${google}`)
      .then(
        (response) => {
          //console.log(response)
          return response.json()
        }
      )
      .then(
        (json) => {
          console.log(json.articles)
          this.setState({ news : json.articles })
        }
      )
  }

  render(){
    return(
      <div>
        <p className="App-intro">
          Top headlines from <strong>'Google News (India)'</strong>
        </p>
        <NewsList list={this.state.news}/>
      </div>
    )
  }
}

export default NewsGoogle;
