import React, { useEffect, useState } from 'react';

function UseEffectExample() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log(`current value of counter ${counter}`);
    return () => {
      console.log(`previous value of  counter ${counter}`);
    };
  });

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>Click Me</button>

      <div style={{ margin: 20 }}>{counter}</div>
    </div>
  );
}

export default UseEffectExample;
