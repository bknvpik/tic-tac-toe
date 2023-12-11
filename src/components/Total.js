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
      {total.x}
      vs
      {total.o}
    </div>
  );
}
