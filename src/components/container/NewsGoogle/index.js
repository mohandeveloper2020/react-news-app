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

    /* Used Promise to fetch multiple api's at once. */
    Promise.all( [fetch(`${googleIndia}`), fetch(`${googleUk}`)] )
      .then(
        ([response1, response2]) => { 
          //console.log(response1, response2)
          return Promise.all( [response1.json(), response2.json()] ) 
        }
      )
      .then(
        (json) => {
          //console.log(json);
          this.setState({
            newsIndia : json[0].articles,
            newsUk : json[1].articles
          })
        }
      )


    /* Fetching api's separately */

    // fetch(`${googleIndia}`)
    //   .then(
    //     (response) => {
    //       console.log(response)
    //       return response.json()
    //     }
    //   )
    //   .then(
    //     (json) => {
    //       console.log(json.articles)
    //       this.setState({ newsIndia : json.articles })
    //     }
    //   )

    //   fetch(`${googleUk}`)
    //   .then(
    //     (response) => {
    //       //console.log(response)
    //       return response.json()
    //     }
    //   )
    //   .then(
    //     (json) => {
    //       // console.log(json.articles)
    //       this.setState({ newsUk : json.articles })
    //     }
    //   )
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
