import React from "react";
import './Movie.css';

const Movie = ({title, poster, year, rating, director, genre, cast}) => {
    return (
        <div className="movie">
            <div className="movie__title">{title}</div>
            <div className="movie__poster">poster</div>
            <div className="movie__year">{year}</div>
            <div className="movie__rating">{rating}</div>
            <div className="movie__director">{director}</div>
            <div className="movie__genre">{genre}</div>
            <div className="movie__cast">cast</div>
        </div>
    )
};

export default Movie;