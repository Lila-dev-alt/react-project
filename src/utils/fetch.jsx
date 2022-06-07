const url = "https://api.themoviedb.org/3/movie/popular?api_key=" + process.env.REACT_APP_MY_KEY;


export default function fetchmovies() {
  return fetch(url).then(response => response.json())
}