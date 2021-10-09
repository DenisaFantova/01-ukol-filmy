import React from "react";
import './MovieList.css';
import Movie from '../Movie/Movie';

const MovieList = ({movies}) => {
    return (
        <div className="movie-list">
            {movies.map(movie => <Movie key={movie.id} id={movie.id} title={movie.title} year={movie.year} rating={movie.rating} director={movie.director} genre={movie.genre}/>)}
        </div>
    )
}

export default MovieList;