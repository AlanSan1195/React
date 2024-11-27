import "./App.css";
import { Movies } from "./components/movies";
import whitResult from "./mocks/whit-result.json";


function App() {
  const movies = whitResult.Search;


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
        <Movies movies={movies} />
      </main>
    </>
  );
}

export default App;
