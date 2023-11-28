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

  return (
    <>
      <h4>{status}</h4>
      <div className='board-row'>
        <Square
          value={squares[0]}
          onSquareClick={() => handleClick(0)}
        />
        <Square
          value={squares[1]}
          onSquareClick={() => handleClick(1)}
        />
        <Square
          value={squares[2]}
          onSquareClick={() => handleClick(2)}
        />
      </div>
      <div className='board-row'>
        <Square
          value={squares[3]}
          onSquareClick={() => handleClick(3)}
        />
        <Square
          value={squares[4]}
          onSquareClick={() => handleClick(4)}
        />
        <Square
          value={squares[5]}
          onSquareClick={() => handleClick(5)}
        />
      </div>
      <div className='board-row'>
        <Square
          value={squares[6]}
          onSquareClick={() => handleClick(6)}
        />
        <Square
          value={squares[7]}
          onSquareClick={() => handleClick(7)}
        />
        <Square
          value={squares[8]}
          onSquareClick={() => handleClick(8)}
        />
      </div>
    </>
  );
}
