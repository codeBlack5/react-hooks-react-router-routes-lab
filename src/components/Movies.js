import React from "react";
import { movies } from "../data";

function Movies() {

  const allMovies = movies.map((movie)=>{
    const movieList = movie.genres.map((mv)=>{
      return <li key={mv}>{mv}</li>
    })
    return (
      <div key={movie.title}>
        <p>{movie.title}</p>
        <p>{movie.time}</p>
        <ul>
          {movieList}
        </ul>
      </div>
    )
  }) 
  return <div>
    <h1> Movies Page</h1>
    {allMovies}
  </div>;
}

export default Movies;
