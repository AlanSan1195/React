import "./App.css";
import { useState } from "react";

const TURNS = {
  X: "x",
  O: "o",
};

const board = Array(9).fill(null);

const Squere = ({ index, isSelected, update, children }) => {
  const className = `square ${isSelected ? "is-selected" : ""}`;

  const handelClick = () => {
    update( index);
  };

  return (
    <div onClick={handelClick} className={className}>
      {children}
    </div>
  );
};

function App() {
  // actualiza el tablero

  const [board, setBoard] = useState(Array(9).fill(null));

  

  const [turn, setTurn] = useState(TURNS.X);
  const update = (index) => {

    const newBoard = [...board];
    setBoard(newBoard);
    const nuevoTurno = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(nuevoTurno);

    
  };
  

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <section className="game">
        {board.map((_, index) => (
          <Squere key={index} index={index} update={update}>
            {board[index]}
          </Squere>
        ))}
      </section>
      <section className="turn">
        <Squere isSelected={TURNS.X === turn}>{TURNS.X}</Squere>
        <Squere isSelected={TURNS.O === turn}>{TURNS.O}</Squere>
      </section>
    </main>
  );
}

export default App;
