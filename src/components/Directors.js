import React from "react";
import { directors } from "../data";

function Directors() {
  const allDirectors = directors.map((director)=>{
    const directorMovie = director.movies.map((movie)=>{
      return <li key={movie}>{movie}</li>
    })

     return (
     <div key={director.name}>
       <p>{director.name}</p>
       <ul>
       {directorMovie}
     </ul>
   </div>)
  })
  return <div>
    <h1>Directors Page</h1>
    {allDirectors}
    </div>;
}

export default Directors;
