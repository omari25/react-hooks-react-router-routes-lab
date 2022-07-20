import React from "react";
import { movies } from "../data";

function Movies() {
  return(
    <div>
      <h1>Movies Page</h1>
      {movies.map((data) => (
        <div key={data.title}>
          <h2>{data.title}</h2>
          <p>Time: {data.time}</p>
          <p>Genres:</p>
          <ul>
            {data.genres.map((genre) =>(
              <li key={genre}>{genre}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default Movies;
