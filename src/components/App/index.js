import React, { Component } from 'react';
import world from '../../world.svg';
import './index.css';
import NewsHome from '../container/NewsHome';
import NewsTechCrunch from '../container/NewsTechCrunch';
import NewsUS from '../container/NewsUS';
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
              <Link to="/">Home</Link>
            </button>

            <button className="news-link-btn">
              <Link to="/TC">News TechCrunch</Link>
            </button>

            <button className="news-link-btn">
              <Link to="/US">News US</Link>
            </button>

            <Route exact path="/" component={NewsHome} />
            <Route path="/TC" component={NewsTechCrunch} />
            <Route path="/US" component={NewsUS} />
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
