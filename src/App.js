import { useEffect, useState } from "react";
import Board from "./components/Board";
import "./styles.css";
import { calculateWinner, players } from "./helpers/helpers";
import Status from "./components/Status";
import Reset from "./components/Reset";
import Total from "./components/Total";

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];
  const [total, setTotal] = useState({ x: 0, o: 0 });
  const [winner, setWinner] = useState(null);
  useEffect(() => {
    setWinner(calculateWinner(currentSquares, currentMove));
  }, [currentMove]);

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
      <Total
        winner={winner}
        total={total}
        setTotal={setTotal}
      />
      <div className='game-bar'>
        <Status
          xIsNext={xIsNext}
          winner={winner}
        />
        <Reset
          setHistory={setHistory}
          setCurrentMove={setCurrentMove}
          setTotal={setTotal}
        />
      </div>
      <div className='game-info panel'>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}
