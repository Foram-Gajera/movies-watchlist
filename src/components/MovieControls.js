import React from "react";
import { AiFillEye, IoClose } from "react-icons/all";

const MovieControls = ({ movie, type }) => {
  return (
    <div className="inner-card-controls">
      {type === "watchlist" && (
        <>
          <button className="ctrl-btn">
            <AiFillEye />
          </button>

          <button className="ctrl-btn">
            <IoClose />
          </button>
        </>
      )}
    </div>
  );
};

export default MovieControls;
