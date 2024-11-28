import { useState } from "react";


export function useMovies() {
  const [setMovies, setUpdateMovies] = useState([]);
  
  const movies = setMovies.Search;

  const mapOfMOvies = movies?.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    img: movie.Poster,
    year: movie.Year,
  }));

  const getMovie = ({ search }) => {
    if (search) {
      fetch(`https://www.omdbapi.com/?apikey=4287ad07&s=${search}`)
        .then((res) => res.json())
        .then((json) => {
          setUpdateMovies(json);
        });
    }
  };

  return { movies: mapOfMOvies, getMovie };
}

// se necesitan crear unos estadpos iniciales un array vacio para las peliculas y
