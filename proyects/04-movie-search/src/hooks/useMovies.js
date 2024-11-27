import whitResult from "../mocks/whit-result.json"

export function useMovies(){
    const movies = whitResult?.Search
    const mapOfMOvies = movies.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      img: movie.Poster,
      year: movie.Year
    }))
    return {movies : mapOfMOvies}
  
  }
  
  