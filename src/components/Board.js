import { useState } from "react";
import Square from "./Square";
import { calculateWinner } from "../helpers/helpers";

export default function Board({ xIsNext, squares, onPlay }) {
  const players = {
    x: "X",
    o: "O",
  };

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) return;

    const nextSquares = squares.slice();

    xIsNext ? (nextSquares[i] = players.x) : (nextSquares[i] = players.o);

    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;

  winner
    ? (status = `Winner: ${winner}`)
    : (status = `Next Player: ${xIsNext ? players.x : players.o}`);

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
                  value={squares[row * 3 + col]}
                  onSquareClick={() => handleClick(row * 3 + col)}
                />
              );
            })}
        </div>
      );
    });

  return (
    <>
      <h4>{status}</h4>
      {board}
    </>
  );
}
