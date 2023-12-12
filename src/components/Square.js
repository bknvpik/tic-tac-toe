import { players } from "../helpers/helpers";

export default function Square({ value, onSquareClick, winner, cssClass }) {
  return (
    <button
      className={`square ${cssClass} ${
        value === players.x ? "player-x" : "player-o"
      }`}
      onClick={onSquareClick}
      style={winner ? { backgroundColor: "green" } : null}
    >
      {value}
    </button>
  );
}
