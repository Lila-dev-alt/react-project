import logo from './logo.svg';
import React, { useState, useEffect, useMemo } from 'react';
import './App.css';
import MovieList from './MovieList';


function App() {


  const [data, setData] = useState([]);
  const url = "https://api.themoviedb.org/3/movie/popular?api_key=" + process.env.REACT_APP_MY_KEY;



  useEffect(() => {
    fetch(url).then(response => {
      setData(response.json());
      console.log({ data });
    });
  }, []);



  return (
    <>
      <MovieList movies={data} />
    </>
  );

}

export default App;
