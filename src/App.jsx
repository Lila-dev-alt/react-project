import logo from './logo.svg';
import React, { useState, useEffect, useMemo } from 'react';
import Button from 'react-bootstrap/Button';
import './App.css';
import MovieList from './MovieList';
import Filters from './Filters';


function App() {


  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [active, setActive] = useState(0);
  const [loading, setLoading] = useState(true);
  const url = "https://api.themoviedb.org/3/movie/popular?api_key=" + process.env.REACT_APP_MY_KEY;



  useEffect(() => {
    fetch(url).then(response => {
      return response.json();
    }).then(donnee => {
      console.log(donnee);
      setData(donnee.results);
      setFilter(donnee.results);
      setLoading(false);

    });
  }, []);

  const loader = <div className="loading">Wait...</div>;


  const page = (
    <>
      <div className='container'>
        <h1> Liste de Films populaires</h1>
        <Filters popular={data} setFilter={setFilter} setActive={setActive} active={active}></Filters>
        <MovieList movies={filter} />
      </div>
    </>
  )
  return (

    <div className='App'>
      {loading ? loader : page}
    </div>
  );

}

export default App;
