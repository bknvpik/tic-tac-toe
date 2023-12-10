import { players } from "../helpers/helpers";

export default function Status({ xIsNext, winner }) {
  let status;

  if (winner) {
    status = `Winner: ${winner?.player}`;
  } else if (winner === null) {
    status = `Next Player: ${xIsNext ? players.x : players.o}`;
  } else {
    status = `Draw`;
  }
  return (
    <div className='game-status panel'>
      <h4>{status}</h4>
    </div>
  );
}
