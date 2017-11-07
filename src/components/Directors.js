import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director, index) => (
        <div key="index">
          <p>{director.name}</p>
          {director.movies.map((movie, index) => <p key="index">{movie}</p>)}
        </div>
      ))}
    </div>
  );
};

export default Directors;
