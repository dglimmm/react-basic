import { useState } from 'react';
import Counter from './Counter';

function Main() {
  const [totalCounter, setTotalCounter] = useState(0);
  const [flag, setFlag] = useState(false);

  const handleTotal = () => {
    setTotalCounter(totalCounter + 1);
  };

  return (
    <main>
      <h2>total : {totalCounter}</h2>
      <h2>flag: {flag.toString()}</h2>
      <button onClick={() => setFlag(!flag)}>toggle flag</button>
      <Counter onTotal={handleTotal} />
      <hr />
      <Counter onTotal={handleTotal} />
      <hr />
      <Counter />
    </main>
  );
}

export default Main;
