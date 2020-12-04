import React, { useState } from "react";
import { ApiKey } from "../APIKey";
import axios from "axios";
import ResultCard from "./ResultCard";

const Add = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const onChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);

    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${ApiKey}&language=en-US&query=${e.target.value}&page=1&include_adult=false`
      )
      .then((res) => {
        console.log(res);
        setResults(res.data.results);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Search for a Movie"
              value={query}
              onChange={onChange}
            />
            {results.length > 0 ? (
              <ul className="results">
                {results.map((movie) => (
                  <li key={movie.id}>
                    <ResultCard movie={movie} />
                  </li>
                ))}
              </ul>
            ) : (
              <h3>No Results</h3>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
