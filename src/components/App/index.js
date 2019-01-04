import React, { Component } from 'react';
import world from '../../world.svg';
import './index.css';
import NewsGoogle from '../container/NewsGoogle';
import NewsTechCrunch from '../container/NewsTechCrunch';
import NewsESPN from '../container/NewsESPN';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={world} className="App-logo" alt="world" />
          <h1 className="App-title">React News App</h1>
        </header>

        <Router>
          <div>
            <button className="news-link-btn">
              <Link to="/">Google News</Link>
            </button>

            <button className="news-link-btn">
              <Link to="/TC">Tech News</Link>
            </button>

            <button className="news-link-btn">
              <Link to="/ESPN">Sports News</Link>
            </button>

            <Route exact path="/" component={NewsGoogle} />
            <Route path="/TC" component={NewsTechCrunch} />
            <Route path="/ESPN" component={NewsESPN} />
          </div>
        </Router>

        <footer className="App-footer">
          Footer section
        </footer>
      </div>
    );
  }
}

export default App;
