import Square from "./Square";
import { calculateWinner, players } from "../helpers/helpers";

export default function Board({ xIsNext, squares, onPlay, winner }) {
  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) return;

    const nextSquares = squares.slice();

    xIsNext ? (nextSquares[i] = players.x) : (nextSquares[i] = players.o);

    onPlay(nextSquares);
  }

  const board = Array(3)
    .fill(null)
    .map((_, row) => {
      return (
        <div
          key={row}
          className='board-row'
        >
          {Array(3)
            .fill(null)
            .map((_, col) => {
              return (
                <Square
                  key={row * 3 + col}
                  value={squares[row * 3 + col]}
                  onSquareClick={() => handleClick(row * 3 + col)}
                  winner={winner && winner.rows?.includes(row * 3 + col)}
                />
              );
            })}
        </div>
      );
    });

  return <>{board}</>;
}
