import { useState } from "react";
import "./App.css";
import { Movies } from "./components/movies";
import { useMovies } from "./hooks/useMovies.js";
import { useRef } from "react";

//custom Hook para el BUSCADOR
function useSearch() {
  const firstImput = useRef(true);
  const [error, setError] = useState(null);
  const [search, setUpdateSearch] = useState("");

  useState(() => {
    if (firstImput.current) {
      firstImput.current = search === "";
      return;
    }
    if (search.length < 2) {
      setError("Almenos 3 o mas caracteres");
      return;
    }
  }, [search]);

  return {error,search, setUpdateSearch}
}

function App() {
  const { movies, getMovie } = useMovies();
  const { search, setUpdateSearch} = useSearch()
  console.log('render')



  const submitHandel = (event) => {
    event.preventDefault();
    getMovie({ search });
  };

  const handelChange = (event) => {
    setUpdateSearch(event.target.value);
  };

  // ahora has un estado que evalue el search siempre que este cambiando para que el usuario tenga una mejor experiencia
  // UTILIZA UNA REFERENCIA

  return (
    <>
      <div className="page">
        <h1>Buscador de peliculas</h1>
        <form onSubmit={submitHandel} className=" from">
          <input
            placeholder="Matrix, Avengers, Spiderman"
            value={search}
            onChange={handelChange}
          />
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
