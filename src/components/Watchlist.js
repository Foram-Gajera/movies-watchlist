import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import MovieCard from "./MovieCard";

const WatchList = () => {
  const { watchlist } = useContext(GlobalContext);
  console.log(watchlist.map((m) => m.title));
  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">My WatchList</h1>
        </div>
        {watchlist.length > 0 ? (
          <div className="movie-grid">
            {watchlist.map((movie) => (
              <MovieCard movie={movie} type="watchlist" key={movie.id} />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">No movies in your list, add some!</h2>
        )}
      </div>
    </div>
  );
};

export default WatchList;
