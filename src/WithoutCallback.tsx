import React, { useState, useEffect } from 'react';
interface WithCallbackProps {
    propValue: string; 
  }
const WithoutCallback: React.FC<WithCallbackProps>= ({ propValue }) => {
  const [count, setCount] = useState(0);

  
  const handleClick = () => {
    console.log('Button clicked!');
    setCount(count + 1);
  };

  useEffect(() => {
    console.log('Component rendered!');
  });

  return (
    <div>
      <p>Count: {count}</p>
      <p>Prop Value: {propValue}</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default WithoutCallback;
