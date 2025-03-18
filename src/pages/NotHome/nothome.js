import React, { useState } from 'react';

const NotHome = () => {
    const [counter, setCounter] = useState(6);

  useEffect(() => {
    if (counter < 0) {
      setCounter(0);
      alert('Counter reset to 0 because it went below 0.');
    }
    if (counter > 5) {
      alert('You passed 5!');
    }
  }, [counter]);

    return (
      <div>
        <h1>Counter: {counter}</h1>
        <button onClick={() => setCounter(counter + 1)}>Increase</button>
        <button onClick={() => setCounter(counter - 1)}>Decrease</button>
      </div>
    );
};

export default NotHome;