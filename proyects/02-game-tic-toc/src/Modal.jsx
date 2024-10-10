import { Cuadrado } from "./components/Cuadrado";

export function Modal({winner, resetGame}) {
  if (winner === null) return null;

  const winnerText = winner === false ? "Empate" : "ganó";
  return (
    <section className="winner">
      <div className="text">
        <h2>{winnerText}</h2>

        <header className="win">
          {winner && <Cuadrado>{winner}</Cuadrado>}
        </header>

        <footer>
          <button onClick={resetGame}>Empezar de nuevo</button>
        </footer>
      </div>
    </section>
  );
}
