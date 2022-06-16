import React from 'react';
import Movie from './Movie';

function MovieList(props) {
  const { movies } = props;
  const FavouriteComponent = props.favouriteComponent;

  const instances = movies.map(item => {

    return (
      <>
        <div>
          <Movie key={item.id} name={item.title} summary={item.overview}
            img={item.backdrop_path}
            vote={item.vote_average} onClick={() => props.handleFavouritesClick(item)} />
          <FavouriteComponent />
        </div>
      </>

    );
  });

  return <ul className="MovieList">{instances}</ul>;
}


export default MovieList;


