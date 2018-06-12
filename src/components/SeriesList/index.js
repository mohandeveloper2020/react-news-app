import React from 'react';
import './index.css';

const SeriesList = (props) => {
  return(
    <div class="grid-container">
      <ul className="series-list">
        {props.list.map(
          (series) => (
            <li key={series.title}>
              <h3>{series.title}</h3>
              <p>{series.description}</p>
              <h5 className="series-list_author">Author : {series.author}</h5>
            </li>
          )
        )}
      </ul>
    </div>
  )
}

export default SeriesList;
