import React from "react";
import './MovieList.css';
import Movie from '../Movie/Movie';

const MovieList = ({movies}) => {
    return (
        <div className="movie-list">
            {movies.map(movie => <Movie key={movie.id} id={movie.id} poster={movie.poster} title={movie.title} year={movie.year} rating={movie.rating} director={movie.director} genre={movie.genre} cast={movie.cast}/>)}
        </div>
    )
}

export default MovieList;