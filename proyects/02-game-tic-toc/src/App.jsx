import "./App.css";
import { useState } from "react";

const TURNS = {
  X: "x",
  O: "o",
};

const board = Array(9).fill(null);

const Cuadrado = ({ children, isSelected, update, index }) => {
  const className = `square ${isSelected ? "is-selected" : ""}`;

  const handelClick = () => {
    update(index);
  };

  return (
    <div onClick={handelClick} className={className}>
      {children}
    </div>
  );
};

function App() {
  // actualiza el tablero

  // estados con el que inicia un app
  const [turn, setTurn] = useState(TURNS.X);
  const [board, setBoard] = useState(Array(9).fill(null));

  const update = (index) => {
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
  };

  return (
    <main className="board">
      <h1>Gato Game</h1>
      <section className="game">
        {board.map((_, index) => {
          return (
            <Cuadrado key={index} index={index} update={update}>
              {board[index]}
            </Cuadrado>
          );
        })}
      </section>
      <section className="turn">
        <Cuadrado isSelected={turn === TURNS.X}>{TURNS.X}</Cuadrado>
        <Cuadrado isSelected={turn === TURNS.O}>{TURNS.O}</Cuadrado>
      </section>
    </main>
  );
}

export default App;
