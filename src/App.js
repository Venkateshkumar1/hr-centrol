import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [circleColor, setCircleColor] = useState('red');

  function handleClick() {
    setCount(count + 1);
    if (count % 2 === 0) {
      setCircleColor('green');
    } else {
      setCircleColor('red');
    }
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ width: '100px', height: '100px', borderRadius: '50%', backgroundColor: circleColor, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <span style={{ fontSize: '24px', color: 'white' }}>{count}</span>
        </div>
        <button onClick={handleClick} style={{ marginTop: '16px' }}>Click me!</button>
      </div>
    </div>
  );
}

export default App;
