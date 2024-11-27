import "./App.css";
import { Movies } from "./components/movies";
import { useMovies } from "./hooks/useMovies.js";



function App() {
 const {movies: mapOfMOvies} = useMovies()


  return (
    <>
      <div className="page">
        <h1>Buscador de peliculas</h1>
        <form className=" from">
          <input placeholder="Matrix, Avengers, Spiderman" />
          <button>Buscar</button>
        </form>
      </div>
      <main>
        <Movies movies={mapOfMOvies} />
      </main>
    </>
  );
}

export default App;
