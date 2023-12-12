import { useEffect } from "react";
import { players } from "../helpers/helpers";

export default function Total({ winner, total, setTotal }) {
  useEffect(() => {
    if (winner?.player === players.x) {
      const nextTotal = JSON.parse(JSON.stringify(total));
      nextTotal.x = nextTotal.x + 1;
      setTotal(nextTotal);
    }
    if (winner?.player === players.o) {
      const nextTotal = JSON.parse(JSON.stringify(total));
      nextTotal.o = nextTotal.o + 1;
      setTotal(nextTotal);
    }
  }, [winner]);

  return (
    <div className='game-total panel'>
      <div>
        <h1 className='player-x'>X</h1>
        <h3>{total.x}</h3>
      </div>
      <div>
        <p>Total</p>
        <h3>vs</h3>
      </div>
      <div>
        <h1 className='player-o'>O</h1>
        <h3> {total.o}</h3>
      </div>
    </div>
  );
}
