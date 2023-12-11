import { players } from "../helpers/helpers";

export default function Status({ xIsNext, winner }) {
  let status, player;

  if (winner) {
    status = "Winner";
    player = winner?.player;
  } else if (winner === null) {
    status = "Next";
    player = xIsNext ? players.x : players.o;
  } else {
    status = "Winner";
    player = "Draw";
  }
  return (
    <div className='game-status panel'>
      <p>{status}</p>
      <h1 className={`${player === players.x ? "player-x" : "player-o"}`}>
        {player}
      </h1>
    </div>
  );
}
