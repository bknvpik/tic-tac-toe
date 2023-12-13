import { players } from "../helpers/helpers";

export default function History({ history, currentMove, setCurrentMove }) {
  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }
  const moves = history.map((_, move) => {
    return (
      <div
        className={`history-record ${move === currentMove && "highlight"}`}
        key={move}
        onClick={() => jumpTo(move)}
      >
        <div className='svg-container'>
          {move === currentMove && <img src='/assets/arrow.svg' />}
        </div>
        <p className={move % 2 === 0 ? "player-x" : "player-o"}>
          {move % 2 === 0 ? players.x : players.o}
        </p>
        <p>#{move}</p>
      </div>
    );
  });

  return (
    <div className='game-history panel'>
      <h4>Moves History</h4>
      <div className='history-container'>{moves}</div>
    </div>
  );
}
