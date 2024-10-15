import "./App.css";
import { useEffect, useState } from "react";
import { Cuadrado } from "./components/Cuadrado";
import { Modal } from "./Modal";
import { TURNS } from "./components/Constantes";
import { checkWinner } from "./components/LogicWinner";
import confetti from "canvas-confetti";
import { saveGameStorage, resetGameStorage } from "./components/storage";
function App() {
  // estados con el que inicia un app, aprendimos a inicializar un estado con todo y localStorgafe
  const [board, setBoard] = useState(() => {
    const continueGame = window.localStorage.getItem("board");
    return continueGame ? JSON.parse(continueGame) : Array(9).fill(null);
  });

  const [turn, setTurn] = useState(() => {
    const continueTurn = window.localStorage.getItem("turn");
    return continueTurn ?? TURNS.X;
  });
  const [winner, setWinner] = useState(null);

  // RESETEAR
  // en React esto es asi podemos restablecer filtros busquedas y
  //  cualquier cosa  solo con regresar los estados a sus valores
  // iniciales
  function resetGame() {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
    resetGameStorage();
  }

  const checkEndGame = (newBoard) => {
    return newBoard.every((cuadrado) => cuadrado !== null);
  };

  //actualiza el turno y el tablero
  const update = (index) => {
    if (board[index] || winner) return;
    //tablero
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    //turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
    

    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      confetti();
      setWinner(newWinner);
      console.log(winner);
    } else if (checkEndGame(newBoard)) {
      setWinner(false);
    }
  };
  useEffect(() => {
    // aqui guarda la partida
    const newTurn = turn
    const newBoard = board
    saveGameStorage({ turn: newTurn, board: newBoard });
    console.log("probando useEfect");
  },[turn, board]);

  return (
    <main className="board">
      <h1>Gato Game</h1>
      <button onClick={resetGame}>Reset Game</button>
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

      <Modal winner={winner} resetGame={resetGame} />
    </main>
  );
}

export default App;
