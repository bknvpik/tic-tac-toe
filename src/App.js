import { useEffect, useState } from "react";
import Board from "./components/Board";
import "./styles.css";
import { calculateWinner, players } from "./helpers/helpers";
import Status from "./components/Status";
import Reset from "./components/Reset";
import Total from "./components/Total";
import History from "./components/History";

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

  return (
    <div className='game'>
      <header>
        <div className='logo-split'>
          <div className='logo'>
            <span>T</span>
            <span>T</span>
          </div>
          <div className='logo logo-switch'>
            <span className='a'>I</span>
            <span className='b'>A</span>
          </div>
          <div className='logo'>
            <span>C</span>
            <span>C</span>
          </div>
        </div>
        <div className='logo'>TOE</div>
      </header>
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
      <History
        history={history}
        currentMove={currentMove}
        setCurrentMove={setCurrentMove}
      />
    </div>
  );
}
