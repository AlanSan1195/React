import { useEffect, useState } from "react";
import "./App.css";
const MouseFollow = () => {
  const [enabled, setEnabled] = useState(false);
  const [posision, setPosision] = useState({ x: 0, y: 0 });

  
 // pointer muve
  useEffect(() => {
    console.log("activaste efeccto ", { enabled });

    const eventoMouse = (event) => {
      const { clientX, clientY } = event;
      setPosision({ x: clientX, y: clientY });
    };
    if (enabled) {
      window.addEventListener("pointermove", eventoMouse);
    }
    return () => {
      window.removeEventListener("pointermove", eventoMouse);
    };
  }, [enabled]);

  // cambio de cursor
  useEffect(()=>{

    document.body.classList.toggle("no-cursor",enabled)


    //limpiar siempre todas las subscripciones
    return ()=>{
      document.body.classList.remove("no-cursor")
    }

  }, [enabled])



  return (
    <>
      <div
        style={{
          position: "absolute",
          backgroundColor: "#09f",
          borderRadius: "50%",
          pointerEvents: "none",
          opacity: 0.7,
          height: 40,
          width: 40,
          left: -20,
          top: -20,
          transform: `translate(${posision.x}px, ${posision.y}px)`,
        }}
      />
      <button
        onClick={() => {
          setEnabled(!enabled);
        }}
      >
        {enabled ? "Desactivar" : "Activar"} evento
      </button>
    </>
  );
};

function App() {
  const [montado, setDesmontar] = useState(false);

  return (
    <main className="componenetes">
      {montado && <MouseFollow />}
      <button
        onClick={() => {
          setDesmontar(!montado);
        }}
      >
        {montado ? "Desmontar" : "Montar"} componente
      </button>
    </main>
  );
}

export default App;
