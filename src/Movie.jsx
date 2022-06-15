import React from 'react';


function Movie(props) {


  const {
    name,
    summary,
    img,
    vote
  } = props;


  return (
    <li className="Movie list">
      <div className="name bold">{name}</div>
      <div className="summary">{summary}</div>
      <img className='img' src={"https://image.tmdb.org/t/p/w300/" + img} alt={name} />
      <div className="vote">Vote: {vote}</div>
    </li>
  );

}


export default React.memo(Movie);