import React, { useContext } from "react";
import { AiFillEye, IoClose, AiFillEyeInvisible } from "react-icons/all";
import { GlobalContext } from "../context/GlobalState";

const MovieControls = ({ movie, type }) => {
  const {
    removeMovieFromWatchlist,
    addMovieToWatched,
    moveToWatchlist,
    removeMovieFromWatched,
  } = useContext(GlobalContext);
  return (
    <div className="inner-card-controls">
      {type === "watchlist" && (
        <>
          <button className="ctrl-btn">
            <AiFillEye onClick={() => addMovieToWatched(movie)} />
          </button>

          <button className="ctrl-btn">
            <IoClose onClick={() => removeMovieFromWatchlist(movie.id)} />
          </button>
        </>
      )}
      {type === "watched" && (
        <>
          <button className="ctrl-btn">
            <AiFillEyeInvisible onClick={() => moveToWatchlist(movie)} />
          </button>

          <button className="ctrl-btn">
            <IoClose onClick={() => removeMovieFromWatched(movie.id)} />
          </button>
        </>
      )}
    </div>
  );
};

export default MovieControls;
