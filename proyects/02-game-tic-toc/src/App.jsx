import "./App.css";
import { useState } from "react";
import { Cuadrado } from "./components/Cuadrado";
import { Modal } from "./Modal";
import { TURNS} from "./components/Constantes";
import {checkWinner} from "./components/LogicWinner"
import confetti from "canvas-confetti";



  

function App() {

  // estados con el que inicia un app
  const [turn, setTurn] = useState(TURNS.X);
  const [board, setBoard] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState(null);

// RESETEAR
// en React esto es asi podemos restablecer filtros busquedas y 
//  cualquier cosa  solo con regresar los estados a sus valores 
// iniciales 
  function resetGame () {
    setTurn(TURNS.X);
    setBoard(Array(9).fill(null))
    setWinner(null)
  }

  const checkEndGame = (newBoard)=>{
    return newBoard.every((cuadrado)=>cuadrado !== null)
  }

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
    //ganador
    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      confetti()
      setWinner(newWinner);
      console.log(winner);
    } else if (checkEndGame(newBoard) ){
      setWinner(false)

    }
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

      <Modal winner={winner} resetGame={resetGame} />



      
    </main>
  );
}

export default App;
