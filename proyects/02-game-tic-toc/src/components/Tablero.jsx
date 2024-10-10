import { board } from "./Constantes";
import { Cuadrado } from "./Cuadrado";

export function Tablero(update) {
    
  return (
    
    <section className="game">
      {board.map((_, index) => {
        return (
          <Cuadrado key={index} index={index} update={update}>
            {board[index]}
          </Cuadrado>
        );
      })}
    </section>
  );
}
