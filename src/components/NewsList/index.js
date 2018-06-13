import React from 'react';
import './index.css';

const NewsList = (props) => {
  return(
    <div className="grid-container">
      <ul className="news-list">

        {props.list.map(
          (news) => (
            <li key={news.title}>
              <h5>{news.source.name} News</h5>
              <h3><a href={news.url} target="_blank">{news.title}</a></h3>
              <img src={news.urlToImage} alt="urlToImage"/>
              <p>{news.description}</p>
              <h5 className="news-list_author">Author : {news.author}</h5>
              <button><a href={news.url} target="_blank">Know more</a></button>
            </li>
          )
        )}

      </ul>
    </div>
  )
}

export default NewsList;
