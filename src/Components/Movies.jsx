import * as React from 'react';
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import Card from "./Card";

function Movies() {
  const {movies} = useContext(AppContext);
return(
    <div className="row mx-0 my-5 gap-4 justify-content-center">
        {movies.map((movie) => (<Card key={movie.id} movie= {movie}/>))}
    </div>
);
}
export default Movies;