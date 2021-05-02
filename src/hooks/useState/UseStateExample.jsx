import React, { useState } from 'react';

function UseStateExample() {
  const [string, setString] = useState('This is the Initial State');

  return (
    <div>
      <p style={{ margin: 20, fontSize: 60 }}>{string}</p>
      <button onClick={() => setString('The State Has Been Changed')}>
        Change the State
      </button>
    </div>
  );
}

export default UseStateExample;
