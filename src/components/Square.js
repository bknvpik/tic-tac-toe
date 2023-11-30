export default function Square({ value, onSquareClick, winner }) {
  return (
    <button
      className='square'
      onClick={onSquareClick}
      style={winner ? { backgroundColor: "green" } : null}
    >
      {value}
    </button>
  );
}
