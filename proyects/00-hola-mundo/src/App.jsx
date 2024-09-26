import "./App.css";
import "./index.css"
import { TwitterFollowCard } from "./TwitterFollowCard.jsx";

function App() {



  return (
    <section className="app">

      {/* el CHILDREN es lo que hay dentro del componenete, este metodo nos permite extender el componente */}
      <TwitterFollowCard userName="alansan.pro"  >
        Alan San
      </TwitterFollowCard>

      <TwitterFollowCard userName="pheralb" name= "Deigo Armando" />
      <TwitterFollowCard userName="illojuan" name= "Juan Ortega"/>
    </section>

  );
}

export default App;
