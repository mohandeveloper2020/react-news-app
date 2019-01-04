import React, { Component } from 'react';
import NewsList from '../../NewsList';

class NewsGoogle extends Component {

  state = {
    newsIndia : [],
    newsUk : []
  }

  componentDidMount(){

    const googleIndia = `https://newsapi.org/v2/top-headlines?sources=google-news-in&apiKey=6c13a32e23b643989e19a722674ca873`;
    const googleUk = `https://newsapi.org/v2/top-headlines?sources=google-news-uk&apiKey=6c13a32e23b643989e19a722674ca873`;
    //const us = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=6c13a32e23b643989e19a722674ca873`;

    fetch(`${googleIndia}`)
      .then(
        (response) => {
          //console.log(response)
          return response.json()
        }
      )
      .then(
        (json) => {
          console.log(json.articles)
          this.setState({ newsIndia : json.articles })
        }
      )

      fetch(`${googleUk}`)
      .then(
        (response) => {
          //console.log(response)
          return response.json()
        }
      )
      .then(
        (json) => {
          console.log(json.articles)
          this.setState({ newsUk : json.articles })
        }
      )
  }

  render(){
    return(
      <div>
        <p className="App-intro">
          Top headlines from <strong>'Google News (India)'</strong>
        </p>
        <NewsList list={this.state.newsIndia}/>

        <hr />
        <p className="App-intro">
          Top headlines from <strong>'Google News (UK)'</strong>
        </p>
        <NewsList list={this.state.newsUk}/>

      </div>
    )
  }
}

export default NewsGoogle;
