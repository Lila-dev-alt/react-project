import logo from './logo.svg';
import React, { useState, useEffect, useMemo } from 'react';
import './App.css';
import MovieList from './MovieList';


function App() {


  const [data, setData] = useState([]);
  const url = "https://api.themoviedb.org/3/movie/popular?api_key=" + process.env.REACT_APP_MY_KEY;



  useEffect(() => {
    fetch(url).then(response => {
      return response.json();
    }).then(donnee => {
      console.log(donnee);
      setData(donnee.results);

    });
  }, []);



  return (
    <>
      <h1> Liste de Films populaires</h1>
      <MovieList movies={data} />
    </>
  );

}

export default App;
