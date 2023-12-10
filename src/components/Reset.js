export default function Reset({ setHistory, setCurrentMove, setTotal }) {
  function resetBoard() {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
  }

  function resetAll() {
    resetBoard();
    setTotal({ x: 0, o: 0 });
  }

  return (
    <div className='game-reset panel'>
      <button
        className='action-button'
        onClick={resetBoard}
      >
        Reset Board
      </button>
      <button
        className='action-button'
        onClick={resetAll}
      >
        Reset All
      </button>
    </div>
  );
}
