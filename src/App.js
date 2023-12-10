import { useState } from "react";
import Board from "./components/Board";
import "./styles.css";
import { calculateWinner } from "./helpers/helpers";
import Status from "./components/Status";

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((_, move) => {
    let description;

    if (move > 0) {
      description =
        move === currentMove
          ? `You are at move #${move}`
          : `Go to move #${move}`;
    } else {
      description = `Go to start`;
    }

    return (
      <li key={move}>
        {move === currentMove && move > 0 ? (
          <span>{description}</span>
        ) : (
          <button onClick={() => jumpTo(move)}>{description}</button>
        )}
      </li>
    );
  });

  const winner = calculateWinner(currentSquares, currentMove);

  return (
    <div className='game'>
      <div className='game-board panel'>
        <Board
          xIsNext={xIsNext}
          squares={currentSquares}
          onPlay={handlePlay}
          winner={winner}
        />
      </div>
      <div className='game-status panel'>
        <Status
          xIsNext={xIsNext}
          winner={winner}
        />
      </div>
      <div className='game-info panel'>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}
