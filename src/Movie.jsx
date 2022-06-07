import React from 'react';


function Movie(props){


    const {
        name,
        summary,
        img,
        vote
    } = props;


    return (
        <li className="Movie">
          <div className="name">{name}</div>
          <div className="summary">{summary}</div>
          <img src={img} alt={name} />
          <div className="vote">{vote}</div>
        </li>
      );

}


export default React.memo(Movie);