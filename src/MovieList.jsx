import React from 'react';
import Movie from './Movie';

function MovieList(props) {
  const { movies } = props;

  const instances = movies.map(item => {

    return (

      <Movie key={item.id} name={item.title} summary={item.overview}
        img={item.backdrop_path}
        vote={item.vote_average} />
    );
  });

  return <ul className="MovieList">{instances}</ul>;
}


export default MovieList;


