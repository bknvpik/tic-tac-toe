export default function Reset() {
  function resetBoard() {}
  return (
    <div className='game-reset panel'>
      <button
        className='action-button'
        onClick={resetBoard}
      >
        Reset Board
      </button>
      <button className='action-button'>Reset All</button>
    </div>
  );
}
