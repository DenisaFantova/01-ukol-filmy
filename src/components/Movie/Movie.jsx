import React from "react";
import './Movie.css';

import Actor from '../Actor/Actor.jsx';

const Movie = ({title, poster, year, rating, director, genre, cast}) => {
    return (
        <div className="movie">
            <div className="movie__rating">
                <span className="movie__real-rating">{rating}</span>
                <span className="movie__max-rating">{` / 10`}</span></div>
            <img className="movie__poster" src={`/assets/${poster}`} />

            <div className="movie__info">
                <div className="movie__about">           
                    <div className="movie__title">{title}</div>
                    <p><b>Rok vydání:</b><span>{` ${year}`}</span></p>   
                    <p><b>Žánr:</b><span>{` ${genre}`}</span></p> 
                    <p><b>Režie:</b><span>{` ${director}`}</span></p>
               </div>
               <div className="movie__main-roles">V hlavních rolích:</div>
                <div className="movie__actor-roles">                    
                    {cast.map(actor => <Actor key={actor.name} name={actor.name} as={actor.as}/>)}
                </div>
                
            </div>
        </div>
    )
};

export default Movie;