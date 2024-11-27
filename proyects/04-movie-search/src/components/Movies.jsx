
// LE ETSAMOS PASANDO MOVIES A NIVEL DE APP 
export function VerMovies({ movies }) {
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <h3>{movie.title}</h3>
          <p>{movie.year}</p>
          <img src={movie.img} alt={movie.title} />
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
