import React from "react";
import MovieControls from "./MovieControls";

const MovieCard = ({ movie, type }) => {
  return (
    <div>
      <div className="movie-card">
        <div className="obverlay"></div>
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title} Poster`}
          />
        ) : (
          <div className="filler-poster" />
        )}
        <MovieControls type={type} movie={movie} />
      </div>
      <h3>{movie.title}</h3>
    </div>
  );
};

export default MovieCard;
