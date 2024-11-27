
// LE ETSAMOS PASANDO MOVIES A NIVEL DE APP 
export function VerMovies({ movies }) {
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.Title}>
          <h3>{movie.Title}</h3>
          <p>{movie.Year}</p>
          <img src={movie.Poster} alt={movie.Title} />
        </li>
      ))}
    </ul>
  );
}

function NoMoviesResult() {
  return <p>No hay resultados para esta busqueda</p>;
}

export function Movies({ movies }) {
  const hayMovies = movies?.length > 0;

  return hayMovies ? <VerMovies movies={movies} /> : <NoMoviesResult />;
}
