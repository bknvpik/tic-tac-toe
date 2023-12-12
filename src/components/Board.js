import Square from "./Square";
import { calculateWinner, players } from "../helpers/helpers";

export default function Board({ xIsNext, squares, onPlay, winner }) {
  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) return;

    const nextSquares = squares.slice();

    xIsNext ? (nextSquares[i] = players.x) : (nextSquares[i] = players.o);

    onPlay(nextSquares);
  }

  const board = Array(9)
    .fill(null)
    .map((_, i) => {
      return (
        <Square
          key={i}
          value={squares[i]}
          onSquareClick={() => handleClick(i)}
          winner={winner && winner.rows?.includes(i)}
          cssClass={`border-${i}`}
        />
      );
    });
  return <div className='game-board-container'>{board}</div>;
}
